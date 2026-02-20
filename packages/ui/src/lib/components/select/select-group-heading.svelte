<script lang="ts" module>
import { cn } from "$lib/utils";
import { Select, type SelectGroupHeadingProps } from "bits-ui";

import { getSelectContext } from "./select-context";

export type SelectProps = SelectGroupHeadingProps;
</script>

<script lang="ts">
	let { children, class: className, ...rest }: SelectProps = $props();
	const { slots } = getSelectContext();
</script>

<Select.GroupHeading {...rest} class={cn(slots.trigger(), className)}>
	{@render children?.()}
</Select.GroupHeading>
