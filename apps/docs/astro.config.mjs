import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig } from 'astro/config';
import starlightLlmsTxt from 'starlight-llms-txt';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			customCss: ['./src/styles/global.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'introduction' },
						{ label: 'Quick Start', slug: 'guides/quick-start' },
						{ label: 'Design Principles', slug: 'design-principles' },
						{ label: 'Showcase', slug: 'showcase' }
					]
				},
				{
					label: 'Components',
					items: [
						{
							label: 'Core',
							items: [
								{ label: 'Button', slug: 'components/button' },
								{ label: 'Link', slug: 'components/link' },
								{ label: 'Separator', slug: 'components/separator' },
								{ label: 'Surface', slug: 'components/surface' }
							]
						},
						{
							label: 'Forms',
							items: [
								{ label: 'Checkbox', slug: 'components/checkbox' },
								{ label: 'Field', slug: 'components/field' },
								{ label: 'Form', slug: 'components/form' },
								{ label: 'Input', slug: 'components/input' },
								{ label: 'Label', slug: 'components/label' },
								{ label: 'Radio Group', slug: 'components/radio-group' },
								{ label: 'Select', slug: 'components/select' },
								{ label: 'Slider', slug: 'components/slider' },
								{ label: 'Switch', slug: 'components/switch' },
								{ label: 'Textarea', slug: 'components/textarea' }
							]
						},
						{
							label: 'Data Display',
							items: [
								{ label: 'Accordion', slug: 'components/accordion' },
								{ label: 'Avatar', slug: 'components/avatar' },
								{ label: 'Card', slug: 'components/card' },
								{ label: 'Collapsible', slug: 'components/collapsible' },
								{ label: 'Meter', slug: 'components/meter' }
							]
						},
						{
							label: 'Overlays',
							items: [
								{ label: 'Alert Dialog', slug: 'components/alert-dialog' },
								{ label: 'Context Menu', slug: 'components/context-menu' },
								{ label: 'Dialog', slug: 'components/dialog' },
								{ label: 'Dropdown Menu', slug: 'components/dropdown-menu' },
								{ label: 'Popover', slug: 'components/popover' },
								{ label: 'Tabs', slug: 'components/tabs' },
								{ label: 'Tooltip', slug: 'components/tooltip' }
							]
						}
					]
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' }
				}
			],
			social: [
				{
					href: 'https://github.com/withastro/withastro',
					icon: 'github',
					label: 'GitHub'
				}
			],
			title: 'Adn UI'
		}),
		svelte()
	],
	site: process.env.SITE_URL || 'http://localhost:4321',

	vite: {
		plugins: [starlightLlmsTxt(), tailwindcss()]
	}
});
