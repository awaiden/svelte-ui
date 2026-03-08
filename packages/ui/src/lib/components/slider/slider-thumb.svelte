<script lang="ts" module>
	import type { Slider } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getSliderContext } from './slider-context';

	export type SliderThumbProps = Slider.ThumbProps;
</script>

<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';

	let { class: className, ...rest }: SliderThumbProps = $props();

	const { slots } = getSliderContext();
</script>

<SliderPrimitive.Thumb class={cn(slots.thumb(), className)} {...rest} />
