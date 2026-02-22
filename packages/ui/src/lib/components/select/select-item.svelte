<script lang="ts" module>
import type { Select } from "bits-ui";
import type { Snippet } from "svelte";

import { cn } from "tailwind-variants";

import { getSelectContext } from "./select-context";

export interface SelectItemProps extends Omit<Select.ItemProps, "children"> {
	children?: Snippet;
}
</script>

<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import LucideCheck from 'lucide-svelte/icons/check';

	let { children: userChildren, class: className, ...rest }: SelectItemProps = $props();

	const { slots } = getSelectContext();
</script>

<SelectPrimitive.Item class={cn(slots.item(), className)} {...rest}>
	{#snippet children({ selected })}
		<span class="absolute left-2 flex size-3.5 items-center justify-center">
			{#if selected}
				<LucideCheck class="size-4" />
			{/if}
		</span>
		{@render userChildren?.()}
	{/snippet}
</SelectPrimitive.Item>
