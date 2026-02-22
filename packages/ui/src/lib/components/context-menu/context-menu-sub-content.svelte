<script lang="ts" module>
import type { ContextMenu } from "bits-ui";

import { cn } from "tailwind-variants";

import { getContextMenuContext } from "./context-menu-context";

export type ContextMenuSubContentProps = ContextMenu.SubContentProps;
</script>

<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	let {
		children,
		class: className,
		sideOffset = 2,
		...rest
	}: ContextMenuSubContentProps = $props();

	const { slots } = getContextMenuContext();
</script>

<ContextMenuPrimitive.Portal>
	<ContextMenuPrimitive.SubContent class={cn(slots.subContent(), className)} {sideOffset} {...rest}>
		{@render children?.()}
	</ContextMenuPrimitive.SubContent>
</ContextMenuPrimitive.Portal>
