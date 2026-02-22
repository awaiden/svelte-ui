<script lang="ts" module>
import type { Slider } from "bits-ui";

import { cn } from "tailwind-variants";

import { getSliderContext } from "./slider-context";

export type SliderTickLabelProps = Slider.TickLabelProps;
</script>

<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: SliderTickLabelProps = $props();

	const { slots } = getSliderContext();
</script>

<SliderPrimitive.TickLabel class={cn(slots.tickLabel(), className)} {...rest}>
	{@render children?.()}
</SliderPrimitive.TickLabel>
