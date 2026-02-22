import type { StorybookConfig } from "@storybook/sveltekit";

const config: StorybookConfig = {
	addons: ["@storybook/addon-svelte-csf"],
	framework: "@storybook/sveltekit",
	stories: ["../src/**/*.stories.@(js|ts|svelte)"],
};
export default config;
