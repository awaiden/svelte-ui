<script lang="ts">
	import { Label, Switch } from '@adn-ui/svelte';

	let checked = $state(false);
</script>

<div class="flex items-center gap-2">
	<Switch.Root id="airplane-mode" bind:checked>
		<Switch.Thumb />
	</Switch.Root>
	<Label for="airplane-mode">Airplane Mode: {checked ? 'On' : 'Off'}</Label>
</div>
