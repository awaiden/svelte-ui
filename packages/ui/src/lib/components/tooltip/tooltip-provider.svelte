<script lang="ts" module>
	import type { Tooltip } from 'bits-ui';

	export type TooltipProviderProps = Tooltip.ProviderProps;
</script>

<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';

	let { children, delayDuration = 200, ...rest }: TooltipProviderProps = $props();
</script>

<TooltipPrimitive.Provider {delayDuration} {...rest}>
	{@render children?.()}
</TooltipPrimitive.Provider>
