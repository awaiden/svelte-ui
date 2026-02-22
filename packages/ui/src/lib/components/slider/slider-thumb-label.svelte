<script lang="ts" module>
import type { Slider } from "bits-ui";

import { cn } from "tailwind-variants";

import { getSliderContext } from "./slider-context";

export type SliderThumbLabelProps = Slider.ThumbLabelProps;
</script>

<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: SliderThumbLabelProps = $props();

	const { slots } = getSliderContext();
</script>

<SliderPrimitive.ThumbLabel class={cn(slots.thumbLabel(), className)} {...rest}>
	{@render children?.()}
</SliderPrimitive.ThumbLabel>
