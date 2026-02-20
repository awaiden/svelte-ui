<script lang="ts" module>
import type { DropdownMenu } from "bits-ui";

import { cn } from "tailwind-variants";

import { getDropdownMenuContext } from "./dropdown-menu-context";

export interface DropdownMenuCheckboxItemProps
	extends DropdownMenu.CheckboxItemProps {}
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import LucideCheck from 'lucide-svelte/icons/check';

	let { children, class: className, checked, ...rest }: DropdownMenuCheckboxItemProps = $props();

	const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.CheckboxItem class={cn(slots.checkboxItem(), className)} {checked} {...rest}>
	<span class="absolute left-2 flex size-3.5 items-center justify-center">
		{#if checked}
			<LucideCheck class="size-4" />
		{/if}
	</span>
	{@render children?.({ checked: checked ?? false, indeterminate: false })}
</DropdownMenuPrimitive.CheckboxItem>
