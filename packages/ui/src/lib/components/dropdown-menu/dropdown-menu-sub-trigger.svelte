<script lang="ts" module>
import type { DropdownMenu } from "bits-ui";

import { cn } from "tailwind-variants";

import { getDropdownMenuContext } from "./dropdown-menu-context";

export interface DropdownMenuSubTriggerProps
	extends DropdownMenu.SubTriggerProps {}
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import LucideChevronRight from 'lucide-svelte/icons/chevron-right';

	let { children, class: className, ...rest }: DropdownMenuSubTriggerProps = $props();

	const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.SubTrigger class={cn(slots.subTrigger(), className)} {...rest}>
	{@render children?.()}
	<LucideChevronRight class="ml-auto size-4" />
</DropdownMenuPrimitive.SubTrigger>
