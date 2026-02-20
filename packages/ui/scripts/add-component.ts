import {
	existsSync,
	mkdirSync,
	readdirSync,
	readFileSync,
	writeFileSync,
} from "node:fs";
import { join, resolve } from "node:path";

// ── Helpers ──────────────────────────────────────────────────────────
function toKebab(str: string): string {
	return str
		.replace(/([a-z])([A-Z])/g, "$1-$2")
		.replace(/[\s_]+/g, "-")
		.toLowerCase();
}

function toPascal(str: string): string {
	return str
		.split("-")
		.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
		.join("");
}

function toCamel(str: string): string {
	const pascal = toPascal(str);
	return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

// ── Resolve paths ────────────────────────────────────────────────────
const ROOT = resolve(import.meta.dirname, "..");
const TEMPLATES_DIR = join(ROOT, "scripts", "templates");
const COMPONENTS_DIR = join(ROOT, "src", "lib", "components");
const COMPONENTS_INDEX = join(COMPONENTS_DIR, "index.ts");
const COMPONENTS_CSS = join(COMPONENTS_DIR, "components.css");

// ── Parse CLI arg ────────────────────────────────────────────────────
const raw = process.argv[2];

if (!raw) {
	console.error("Usage: bun add:component <component-name>");
	process.exit(1);
}

const name = toKebab(raw); // e.g. "date-picker"
const PascalName = toPascal(name); // e.g. "DatePicker"
const camelName = toCamel(name); // e.g. "datePicker"

const componentDir = join(COMPONENTS_DIR, name);

if (existsSync(componentDir)) {
	console.error(`✗ Component "${name}" already exists at ${componentDir}`);
	process.exit(1);
}

// ── Template rendering ───────────────────────────────────────────────
function render(template: string): string {
	return template
		.replaceAll("{{name}}", name)
		.replaceAll("{{PascalName}}", PascalName)
		.replaceAll("{{camelName}}", camelName);
}

// Map template file names to output file names
const FILE_MAP: Record<string, string> = {
	"component.svelte.tpl": `${name}.svelte`,
	"component.css.tpl": `${name}.css`,
	"component.variants.ts.tpl": `${name}.variants.ts`,
	"component.stories.svelte.tpl": `${name}.stories.svelte`,
	"index.ts.tpl": "index.ts",
};

// ── Scaffold ─────────────────────────────────────────────────────────
mkdirSync(componentDir, { recursive: true });

const templateFiles = readdirSync(TEMPLATES_DIR).filter((f) =>
	f.endsWith(".tpl"),
);

for (const tplFile of templateFiles) {
	const outFile = FILE_MAP[tplFile];
	if (!outFile) continue;

	const tplContent = readFileSync(join(TEMPLATES_DIR, tplFile), "utf-8");
	writeFileSync(join(componentDir, outFile), render(tplContent));
	console.log(`  ✓ ${name}/${outFile}`);
}

// ── Register in components/index.ts ──────────────────────────────────
const exportLine = `export * from "./${name}";`;
const indexContent = readFileSync(COMPONENTS_INDEX, "utf-8");

if (!indexContent.includes(exportLine)) {
	const lines = indexContent.trimEnd().split("\n");
	lines.push(exportLine);
	lines.sort((a, b) => a.localeCompare(b));
	writeFileSync(COMPONENTS_INDEX, lines.join("\n") + "\n");
	console.log(`  ✓ Registered in components/index.ts`);
}

// ── Register in components.css ───────────────────────────────────────
const cssImport = `@import "./${name}/${name}.css";`;
const cssContent = readFileSync(COMPONENTS_CSS, "utf-8");

if (!cssContent.includes(cssImport)) {
	const cssLines = cssContent.trimEnd().split("\n");
	cssLines.push(cssImport);
	cssLines.sort((a, b) => a.localeCompare(b));
	writeFileSync(COMPONENTS_CSS, cssLines.join("\n") + "\n");
	console.log(`  ✓ Registered in components.css`);
}

console.log(`\n✔ Component "${name}" created successfully!`);
