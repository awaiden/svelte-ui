import type { ComponentProps } from "svelte";

import SelectContent from "./select-content.svelte";
import SelectGroupHeading from "./select-group-heading.svelte";
import SelectGroup from "./select-group.svelte";
import SelectItem from "./select-item.svelte";
import SelectPortal from "./select-portal.svelte";
import SelectTrigger from "./select-trigger.svelte";
import SelectRoot from "./select.svelte";

export { selectVariants, type SelectVariantType } from "./select.variants";

export const Select = {
	Content: SelectContent,
	Group: SelectGroup,
	GroupHeading: SelectGroupHeading,
	Item: SelectItem,
	Portal: SelectPortal,
	Root: SelectRoot,
	Trigger: SelectTrigger,
};

export {
	SelectContent,
	SelectGroup,
	SelectGroupHeading,
	SelectItem,
	SelectPortal,
	SelectRoot,
	SelectTrigger,
};

export type SelectContentProps = ComponentProps<typeof Select.Content>;
export type SelectGroupHeadingProps = ComponentProps<
	typeof Select.GroupHeading
>;
export type SelectGroupProps = ComponentProps<typeof Select.Group>;
export type SelectItemProps = ComponentProps<typeof Select.Item>;
export type SelectProps = ComponentProps<typeof Select.Root>;
export type SelectTriggerProps = ComponentProps<typeof Select.Trigger>;
