<script lang="ts" module>
import type { Select } from "bits-ui";

import { cn } from "tailwind-variants";

import { getSelectContext } from "./select-context";

export type SelectTriggerProps = Select.TriggerProps;
</script>

<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import LucideChevronDown from 'lucide-svelte/icons/chevron-down';

	let { children, class: className, ...rest }: SelectTriggerProps = $props();

	const { slots } = getSelectContext();
</script>

<SelectPrimitive.Trigger class={cn(slots.trigger(), className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
	<LucideChevronDown class="size-4 opacity-50" />
</SelectPrimitive.Trigger>
