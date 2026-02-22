<script lang="ts" module>
import type { Tooltip } from "bits-ui";

export type TooltipTriggerProps = Tooltip.TriggerProps;
</script>

<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';

	let { children, ...rest }: TooltipTriggerProps = $props();
</script>

<TooltipPrimitive.Trigger {...rest}>
	{@render children?.()}
</TooltipPrimitive.Trigger>
