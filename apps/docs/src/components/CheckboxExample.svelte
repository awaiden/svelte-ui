<script lang="ts">
	import { Checkbox, Label } from '@adn-ui/svelte';

	let { checked = $bindable(false), disabled = false, indeterminate = false } = $props();
</script>

<div class="flex items-center space-x-2">
	<Checkbox id="terms" bind:checked {disabled} {indeterminate} />
	<Label
		for="terms"
		class="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
	>
		Accept terms and conditions
	</Label>
</div>
