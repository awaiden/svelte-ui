<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import { Slider } from './index';

	const { Story } = defineMeta({
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		title: 'Slider'
	});
</script>

<Story name="Default">
	<div class="w-64">
		<Slider.Root type="single" value={50}>
			{#snippet children(args)}
				<span class="bg-muted relative h-2 w-full grow cursor-pointer overflow-hidden rounded-full">
					<Slider.Range />
				</span>
				{#each args?.thumbs ?? [] as index (index)}
					<Slider.Thumb {index} />
				{/each}
			{/snippet}
		</Slider.Root>
	</div>
</Story>

<Story name="Range">
	<div class="w-64">
		<Slider.Root type="multiple" value={[25, 75]}>
			{#snippet children(args)}
				<span class="bg-muted relative h-2 w-full grow cursor-pointer overflow-hidden rounded-full">
					<Slider.Range />
				</span>
				{#each args?.thumbs ?? [] as index (index)}
					<Slider.Thumb {index} />
				{/each}
			{/snippet}
		</Slider.Root>
	</div>
</Story>

<Story name="With Ticks">
	<div class="w-64">
		<Slider.Root type="single" min={0} max={10} step={1} value={5}>
			{#snippet children(args)}
				<span class="bg-muted relative h-2 w-full grow cursor-pointer overflow-hidden rounded-full">
					<Slider.Range />
				</span>
				{#each args?.thumbs ?? [] as index (index)}
					<Slider.Thumb {index} />
				{/each}
				{#each args?.tickItems ?? [] as { index } (index)}
					<Slider.Tick {index} />
				{/each}
			{/snippet}
		</Slider.Root>
	</div>
</Story>

<Story name="Disabled">
	<div class="w-64">
		<Slider.Root type="single" value={40} disabled>
			{#snippet children(args)}
				<span class="bg-muted relative h-2 w-full grow cursor-pointer overflow-hidden rounded-full">
					<Slider.Range />
				</span>
				{#each args?.thumbs ?? [] as index (index)}
					<Slider.Thumb {index} />
				{/each}
			{/snippet}
		</Slider.Root>
	</div>
</Story>
