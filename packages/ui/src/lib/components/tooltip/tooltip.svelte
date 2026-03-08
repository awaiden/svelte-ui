<script lang="ts" module>
	import type { Tooltip } from 'bits-ui';

	import { setTooltipContext } from './tooltip-context';
	import { tooltipVariants, type TooltipVariantType } from './tooltip.variants';

	export type TooltipRootProps = Tooltip.RootProps & TooltipVariantType;
</script>

<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';

	let { ...rest }: TooltipRootProps = $props();

	let slots = $derived(tooltipVariants());

	setTooltipContext({
		get slots() {
			return slots;
		}
	});
</script>

<TooltipPrimitive.Root {...rest} />
