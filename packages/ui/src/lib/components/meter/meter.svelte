<script lang="ts" module>
	import type { Meter } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { meterVariants, type MeterVariantType } from './meter.variants';

	export type MeterProps = {
		indicatorClass?: string;
	} & Meter.RootProps &
		MeterVariantType;
</script>

<script lang="ts">
	import { Meter as MeterPrimitive } from 'bits-ui';

	let {
		children,
		class: className,
		indicatorClass,
		max = 100,
		min = 0,
		value = 0,
		...rest
	}: MeterProps = $props();

	let percentage = $derived(((value - min) / (max - min)) * 100);
</script>

<MeterPrimitive.Root class={cn(meterVariants(), className)} {value} {min} {max} {...rest}>
	<div
		class={cn('meter__indicator', indicatorClass)}
		style="transform: translateX(-{100 - percentage}%)"
	></div>
	{@render children?.()}
</MeterPrimitive.Root>
