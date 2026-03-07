#!/usr/bin/env node
import { Command } from "commander";
import prompts from "prompts";
import chalk from "chalk";
import fs from "fs-extra";
import path from "node:path";
import { execa } from "execa";
import ora from "ora";

const GITHUB_REPO = "awaiden/svelte-ui";
const GITHUB_BRANCH = "main";
const GITHUB_RAW_BASE = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/packages/ui`;
const GITHUB_API_BASE = `https://api.github.com/repos/${GITHUB_REPO}/contents/packages/ui`;

const program = new Command();

program.name("svelte-ui").description("CLI for svelte-ui").version("0.0.1");

async function fetchRaw(filePath: string): Promise<string> {
	const url = `${GITHUB_RAW_BASE}/${filePath}`;
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
	}
	return response.text();
}

async function listGitHubDir(dirPath: string): Promise<any[]> {
	const url = `${GITHUB_API_BASE}/${dirPath}?ref=${GITHUB_BRANCH}`;
	const response = await fetch(url, {
		headers: {
			Accept: "application/vnd.github.v3+json",
			"User-Agent": "svelte-ui-cli",
		},
	});
	if (!response.ok) {
		throw new Error(`Failed to list ${url}: ${response.statusText}`);
	}
	return response.json();
}

program
	.command("init")
	.description("Initialize svelte-ui in your project")
	.action(async () => {
		const response = await prompts([
			{
				type: "text",
				name: "componentsPath",
				message: "Where do you want to install the components?",
				initial: "src/lib/components/ui",
			},
			{
				type: "text",
				name: "utilsPath",
				message: "Where is your utils file located?",
				initial: "src/lib/utils.ts",
			},
			{
				type: "text",
				name: "stylesPath",
				message: "Where is your global CSS file located?",
				initial: "src/app.css",
			},
		]);

		if (!response.componentsPath) {
			console.log(chalk.red("Initialization cancelled."));
			return;
		}

		const spinner = ora("Initializing svelte-ui from GitHub...").start();

		try {
			// 1. Create directories
			await fs.ensureDir(response.componentsPath);
			await fs.ensureDir(path.dirname(response.utilsPath));

			// 2. Fetch utils.ts
			spinner.text = "Fetching utils.ts...";
			const utilsContent = await fetchRaw("src/lib/utils.ts");
			await fs.writeFile(response.utilsPath, utilsContent);

			// 3. Setup styles
			spinner.text = "Fetching styles...";
			const targetStylesDir = path.join(
				path.dirname(response.stylesPath),
				"styles",
			);
			await fs.ensureDir(targetStylesDir);

			const styleFiles = [
				"src/lib/styles/index.css",
				"src/lib/styles/components.css",
				"src/lib/styles/animations.css",
				"src/lib/styles/themes/default.css",
			];

			for (const file of styleFiles) {
				const content = await fetchRaw(file);
				const fileName = path.basename(file);
				const fileDir = path.dirname(file).replace("src/lib/styles", "");
				const targetDir = path.join(targetStylesDir, fileDir);
				await fs.ensureDir(targetDir);
				await fs.writeFile(path.join(targetDir, fileName), content);
			}

			// 4. Update global CSS
			const importStatement = `@import "./styles/index.css";\n`;
			let currentStyles = "";
			if (await fs.pathExists(response.stylesPath)) {
				currentStyles = await fs.readFile(response.stylesPath, "utf-8");
			}
			if (!currentStyles.includes(importStatement)) {
				await fs.writeFile(
					response.stylesPath,
					importStatement + currentStyles,
				);
			}

			// 5. Install dependencies
			spinner.text = "Installing dependencies...";
			const deps = [
				"bits-ui",
				"lucide-svelte",
				"tailwind-merge",
				"tailwind-variants",
				"tailwindcss-animate",
			];

			const packageManager = await getPackageManager();
			await execa(packageManager, [
				packageManager === "npm" ? "install" : "add",
				...deps,
			]);

			spinner.succeed(chalk.green("svelte-ui initialized successfully!"));
		} catch (error) {
			spinner.fail(chalk.red("Failed to initialize svelte-ui."));
			console.error(error);
		}
	});

program
	.command("add")
	.description("Add a component from GitHub")
	.argument("[component]", "The component to add")
	.action(async (componentName) => {
		const spinner = ora("Fetching available components...").start();
		let availableComponents: string[] = [];

		try {
			const contents = await listGitHubDir("src/lib/components");
			availableComponents = contents
				.filter((item) => item.type === "dir")
				.map((item) => item.name);
			spinner.stop();
		} catch (error) {
			spinner.fail(chalk.red("Failed to fetch component list from GitHub."));
			return;
		}

		let selectedComponents: string[] = [];

		if (componentName) {
			if (availableComponents.includes(componentName)) {
				selectedComponents = [componentName];
			} else {
				console.log(
					chalk.red(`Component "${componentName}" not found on GitHub.`),
				);
				return;
			}
		} else {
			const response = await prompts({
				type: "multiselect",
				name: "components",
				message: "Select components to add",
				choices: availableComponents.map((c) => ({ title: c, value: c })),
			});
			selectedComponents = response.components;
		}

		if (!selectedComponents || selectedComponents.length === 0) {
			console.log(chalk.yellow("No components selected."));
			return;
		}

		const componentsPath = "src/lib/components/ui";
		const spinnerAdd = ora("Adding components...").start();

		try {
			for (const comp of selectedComponents) {
				spinnerAdd.text = `Adding ${comp}...`;
				const destDir = path.join(componentsPath, comp);
				await fs.ensureDir(destDir);

				const compFiles = await listGitHubDir(`src/lib/components/${comp}`);
				for (const fileItem of compFiles) {
					if (fileItem.name.endsWith(".stories.svelte")) continue;

					let content = await fetchRaw(
						`src/lib/components/${comp}/${fileItem.name}`,
					);

					// Adjust imports
					content = content.replace(
						/from "\$lib\/utils"/g,
						`from "${path.relative(destDir, "src/lib/utils")}"`,
					);

					await fs.writeFile(path.join(destDir, fileItem.name), content);
				}
			}
			spinnerAdd.succeed(
				chalk.green(`Added ${selectedComponents.join(", ")} successfully!`),
			);
		} catch (error) {
			spinnerAdd.fail(chalk.red("Failed to add components."));
			console.error(error);
		}
	});

async function getPackageManager() {
	if (await fs.pathExists("bun.lock")) return "bun";
	if (await fs.pathExists("pnpm-lock.yaml")) return "pnpm";
	if (await fs.pathExists("yarn.lock")) return "yarn";
	return "npm";
}

program.parse();
