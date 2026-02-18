<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Textarea from './textarea.svelte';

	const { Story } = defineMeta({
		component: Textarea,
		title: 'Textarea',
		tags: ['autodocs'],
		parameters: {
			layout: 'centered'
		}
	});
</script>

<Story name="Default">
	<Textarea placeholder="Enter text here" />
</Story>
