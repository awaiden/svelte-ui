<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Button from './button.svelte';
	import { LucideThumbsUp } from 'lucide-svelte';

	const { Story } = defineMeta({
		component: Button,
		title: 'Button',
		tags: ['autodocs'],
		parameters: {
			layout: 'centered'
		},
		args: {
			variant: 'primary',
			size: 'md',
			disabled: false
		}
	});
</script>

<Story name="Default">Hello world</Story>

<Story name="Secondary" args={{ variant: 'secondary' }}>Secondary Button</Story>

<Story name="Large" args={{ size: 'lg' }}>Large Button</Story>

<Story name="Disabled" args={{ disabled: true }}>Hello world</Story>

<Story name="With Icon" args={{ variant: 'primary' }}>
	<LucideThumbsUp />
	Button with Icon
</Story>

<Story name="Only Icon" args={{ variant: 'ghost', size: 'sm', isIconOnly: true }}>
	<LucideThumbsUp />
</Story>

<Story name="Custom Class" args={{ class: 'bg-green-500 hover:bg-green-600' }}>
	Custom Class Button
</Story>
