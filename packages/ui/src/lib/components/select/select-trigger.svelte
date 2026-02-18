<script lang="ts" module>
import { cn } from "tailwind-variants";
import { Select, type SelectTriggerProps } from "bits-ui";

import { selectVariants } from "./select.variants";
import { LucideChevronDown } from "lucide-svelte";

export type SelectProps = SelectTriggerProps;
</script>

<script lang="ts">
	let { children, class: className, ...rest }: SelectProps = $props();
	const slots = $derived(selectVariants());
</script>

<Select.Trigger {...rest} class={cn(slots.trigger(), className)}>
	{@render children?.()}
	<LucideChevronDown class={slots.icon()} />
</Select.Trigger>
