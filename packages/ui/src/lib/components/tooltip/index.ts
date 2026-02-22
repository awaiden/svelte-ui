import Arrow from "./tooltip-arrow.svelte";
import Content from "./tooltip-content.svelte";
import Provider from "./tooltip-provider.svelte";
import Trigger from "./tooltip-trigger.svelte";
import Root from "./tooltip.svelte";

export { tooltipVariants, type TooltipVariantType } from "./tooltip.variants";

export const Tooltip = {
	Arrow,
	Content,
	Provider,
	Root,
	Trigger,
};
