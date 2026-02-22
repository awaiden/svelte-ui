<script lang="ts" module>
import type { Tooltip } from "bits-ui";

import { cn } from "tailwind-variants";

import { getTooltipContext } from "./tooltip-context";

export interface TooltipContentProps extends Tooltip.ContentProps {
	sideOffset?: number;
}
</script>

<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';

	let { children, class: className, sideOffset = 4, ...rest }: TooltipContentProps = $props();

	const { slots } = getTooltipContext();
</script>

<TooltipPrimitive.Portal>
	<TooltipPrimitive.Content class={cn(slots.content(), className)} {sideOffset} {...rest}>
		{@render children?.()}
	</TooltipPrimitive.Content>
</TooltipPrimitive.Portal>
