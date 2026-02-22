<script lang="ts" module>
import type { Select } from "bits-ui";

import { cn } from "tailwind-variants";

import { getSelectContext } from "./select-context";

export type SelectScrollDownButtonProps = Select.ScrollDownButtonProps;
</script>

<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import LucideChevronDown from 'lucide-svelte/icons/chevron-down';

	let { children, class: className, ...rest }: SelectScrollDownButtonProps = $props();

	const { slots } = getSelectContext();
</script>

<SelectPrimitive.ScrollDownButton class={cn(slots.scrollButton(), className)} {...rest}>
	{#if children}
		{@render children()}
	{:else}
		<LucideChevronDown class="size-4" />
	{/if}
</SelectPrimitive.ScrollDownButton>
