<script lang="ts" module>
	import type { Tooltip } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getTooltipContext } from './tooltip-context';

	export type TooltipArrowProps = Tooltip.ArrowProps;
</script>

<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';

	let { class: className, ...rest }: TooltipArrowProps = $props();

	const { slots } = getTooltipContext();
</script>

<TooltipPrimitive.Arrow class={cn(slots.arrow(), className)} {...rest} />
