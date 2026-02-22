<script lang="ts" module>
import type { Slider } from "bits-ui";

import { cn } from "tailwind-variants";

import { getSliderContext } from "./slider-context";

export type SliderTickProps = Slider.TickProps;
</script>

<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';

	let { class: className, ...rest }: SliderTickProps = $props();

	const { slots } = getSliderContext();
</script>

<SliderPrimitive.Tick class={cn(slots.tick(), className)} {...rest} />
