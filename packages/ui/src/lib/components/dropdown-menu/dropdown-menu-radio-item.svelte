<script lang="ts" module>
import type { DropdownMenu } from "bits-ui";

import { cn } from "tailwind-variants";

import { getDropdownMenuContext } from "./dropdown-menu-context";

export interface DropdownMenuRadioItemProps
	extends DropdownMenu.RadioItemProps {}
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import LucideCircle from 'lucide-svelte/icons/circle';

	let { children, class: className, ...rest }: DropdownMenuRadioItemProps = $props();

	const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.RadioItem class={cn(slots.radioItem(), className)} {...rest}>
	<span class="absolute left-2 flex size-3.5 items-center justify-center">
		{#snippet children({ checked }: { checked: boolean })}
			{#if checked}
				<LucideCircle class="size-2 fill-current" />
			{/if}
		{/snippet}
	</span>
	{@render children?.({ checked: false })}
</DropdownMenuPrimitive.RadioItem>
