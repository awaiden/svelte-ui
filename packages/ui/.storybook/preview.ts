import '../src/lib/styles/index.css';

import type { Preview, SvelteRenderer } from '@storybook/sveltekit';

import { withThemeByDataAttribute } from '@storybook/addon-themes';

const preview: Preview = {
	decorators: [
		withThemeByDataAttribute<SvelteRenderer>({
			attributeName: 'data-theme',
			defaultTheme: 'light',
			themes: {
				dark: 'dark',
				light: 'light'
			}
		})
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;
