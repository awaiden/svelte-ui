<script lang="ts" module>
	import type { Slider } from 'bits-ui';
	import type { Snippet } from 'svelte';

	import { cn } from 'tailwind-variants';

	import { setSliderContext } from './slider-context';
	import { sliderVariants, type SliderVariantType } from './slider.variants';

	export type SliderRootProps = {
		children?: Snippet<
			[{ props: any; thumbs: number[]; tickItems: { index: number; value: number }[] }]
		>;
	} & Omit<Slider.RootProps, 'children'> &
		SliderVariantType;
</script>

<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';

	let {
		children: userChildren,
		class: className,
		value = $bindable(),
		...rest
	}: SliderRootProps = $props();

	let slots = $derived(sliderVariants());

	setSliderContext({
		get slots() {
			return slots;
		}
	});
</script>

<!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -- Bits UI discriminated union requires type assertion for spreading -->
<SliderPrimitive.Root bind:value class={cn(slots.root(), className)} {...rest as any}>
	{#snippet children(args)}
		{@render userChildren?.(args || ({ props: {} } as any))}
		{#if !rest.asChild}
			<SliderPrimitive.Track class={slots.track()}>
				<SliderPrimitive.Range class={slots.range()} />
			</SliderPrimitive.Track>
			{#each args?.thumbs ?? [] as _}
				<SliderPrimitive.Thumb class={slots.thumb()} />
			{/each}
		{/if}
	{/snippet}
</SliderPrimitive.Root>
