import "../src/lib/styles/index.css";

import { withThemeByDataAttribute } from "@storybook/addon-themes";

import type { Preview, SvelteRenderer } from "@storybook/sveltekit";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		withThemeByDataAttribute<SvelteRenderer>({
			themes: {
				light: "light",
				dark: "dark",
			},
			defaultTheme: "light",
			attributeName: "data-theme",
		}),
	],
};

export default preview;
