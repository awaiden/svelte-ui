<script lang="ts" module>
	import type { Slider } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getSliderContext } from './slider-context';

	export type SliderRangeProps = Slider.RangeProps;
</script>

<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';

	let { class: className, ...rest }: SliderRangeProps = $props();

	const { slots } = getSliderContext();
</script>

<SliderPrimitive.Range class={cn(slots.range(), className)} {...rest} />
