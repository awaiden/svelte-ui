<script lang="ts" module>
import type { Select } from "bits-ui";

import { cn } from "tailwind-variants";

import { getSelectContext } from "./select-context";

export type SelectScrollUpButtonProps = Select.ScrollUpButtonProps;
</script>

<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import LucideChevronUp from 'lucide-svelte/icons/chevron-up';

	let { children, class: className, ...rest }: SelectScrollUpButtonProps = $props();

	const { slots } = getSelectContext();
</script>

<SelectPrimitive.ScrollUpButton class={cn(slots.scrollButton(), className)} {...rest}>
	{#if children}
		{@render children()}
	{:else}
		<LucideChevronUp class="size-4" />
	{/if}
</SelectPrimitive.ScrollUpButton>
