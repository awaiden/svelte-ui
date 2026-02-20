<script lang="ts" module>
import type { DropdownMenu } from "bits-ui";

import { cn } from "tailwind-variants";

import { getDropdownMenuContext } from "./dropdown-menu-context";

export interface DropdownMenuSubContentProps
	extends DropdownMenu.SubContentProps {}
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	let {
		children,
		class: className,
		sideOffset = 2,
		...rest
	}: DropdownMenuSubContentProps = $props();

	const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.Portal>
	<DropdownMenuPrimitive.SubContent
		class={cn(slots.subContent(), className)}
		{sideOffset}
		{...rest}
	>
		{@render children?.()}
	</DropdownMenuPrimitive.SubContent>
</DropdownMenuPrimitive.Portal>
