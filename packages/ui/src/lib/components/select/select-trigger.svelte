<script lang="ts" module>
import { Select, type SelectTriggerProps } from "bits-ui";
import { cn } from "tailwind-variants";

import { LucideChevronDown } from "lucide-svelte";
import { getSelectContext } from "./select-context";

export type SelectProps = SelectTriggerProps;
</script>

<script lang="ts">
	let { children, class: className, ...rest }: SelectProps = $props();
	const { slots } = getSelectContext();
</script>

<Select.Trigger {...rest} class={cn(slots.trigger(), className)}>
	{@render children?.()}
	<LucideChevronDown class={slots.icon()} />
</Select.Trigger>
