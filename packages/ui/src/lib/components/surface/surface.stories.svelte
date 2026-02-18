<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Surface from './surface.svelte';

	const { Story } = defineMeta({
		title: 'Surface',
		tags: ['autodocs'],
		parameters: {
			layout: 'centered'
		}
	});
</script>

<Story name="Default">
	<Surface>
		<p>This is a surface component</p>
	</Surface>
</Story>
