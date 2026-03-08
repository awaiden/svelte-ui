<script lang="ts">
	import { Label, Slider } from '@adn-ui/svelte';

	let value = $state([50]);
</script>

<div class="flex w-full max-w-sm flex-col gap-4">
	<div class="flex justify-between">
		<Label>Volume</Label>
		<span class="text-sm text-muted-foreground">{value[0]}%</span>
	</div>
	<Slider.Root bind:value max={100} step={1} />
</div>
