<script lang="ts" module>
import type { DropdownMenu } from "bits-ui";

import { cn } from "tailwind-variants";

import { getDropdownMenuContext } from "./dropdown-menu-context";

export type DropdownMenuContentProps = DropdownMenu.ContentProps;
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	let { children, class: className, sideOffset = 4, ...rest }: DropdownMenuContentProps = $props();

	const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.Portal>
	<DropdownMenuPrimitive.Content class={cn(slots.content(), className)} {sideOffset} {...rest}>
		{@render children?.()}
	</DropdownMenuPrimitive.Content>
</DropdownMenuPrimitive.Portal>
