<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Surface from './surface.svelte';

	const { Story } = defineMeta({
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		title: 'Surface'
	});
</script>

<Story name="Default">
	<Surface>
		<p>This is a surface component</p>
	</Surface>
</Story>
