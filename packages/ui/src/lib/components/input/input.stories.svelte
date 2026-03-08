<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Input from './input.svelte';

	const { Story } = defineMeta({
		component: Input,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		title: 'Input'
	});
</script>

<Story name="Default">
	<Input placeholder="Enter text here" />
</Story>
