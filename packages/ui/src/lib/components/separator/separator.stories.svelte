<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Separator from './separator.svelte';

	const { Story } = defineMeta({
		component: Separator,
		title: 'Separator',
		tags: ['autodocs'],
		parameters: {
			layout: 'centered'
		}
	});
</script>

<Story name="Default">
	<div style="width: 200px;">
		<Separator />
	</div>
</Story>
