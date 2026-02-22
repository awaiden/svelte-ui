<script lang="ts" module>
import type { Popover } from "bits-ui";

import { cn } from "tailwind-variants";

import { getPopoverContext } from "./popover-context";

export type PopoverCloseProps = Popover.CloseProps;
</script>

<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';
	import LucideX from 'lucide-svelte/icons/x';

	let { children, class: className, ...rest }: PopoverCloseProps = $props();

	const { slots } = getPopoverContext();
</script>

<PopoverPrimitive.Close class={cn(slots.close(), className)} {...rest}>
	{#if children}
		{@render children()}
	{:else}
		<LucideX class="size-4" />
		<span class="sr-only">Close</span>
	{/if}
</PopoverPrimitive.Close>
