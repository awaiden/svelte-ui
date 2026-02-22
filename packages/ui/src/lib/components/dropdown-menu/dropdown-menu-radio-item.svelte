<script lang="ts" module>
import type { DropdownMenu } from "bits-ui";
import type { Snippet } from "svelte";

import { cn } from "tailwind-variants";

import { getDropdownMenuContext } from "./dropdown-menu-context";

export type DropdownMenuRadioItemProps = {
	children?: Snippet;
} & Omit<DropdownMenu.RadioItemProps, "children">;
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import LucideCircle from 'lucide-svelte/icons/circle';

	let { children: userChildren, class: className, ...rest }: DropdownMenuRadioItemProps = $props();

	const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.RadioItem class={cn(slots.radioItem(), className)} {...rest}>
	{#snippet children({ checked })}
		<span class="absolute left-2 flex size-3.5 items-center justify-center">
			{#if checked}
				<LucideCircle class="size-2 fill-current" />
			{/if}
		</span>
		{@render userChildren?.()}
	{/snippet}
</DropdownMenuPrimitive.RadioItem>
