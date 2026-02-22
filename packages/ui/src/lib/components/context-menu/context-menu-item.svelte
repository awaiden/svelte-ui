<script lang="ts" module>
import type { ContextMenu } from "bits-ui";

import { cn } from "tailwind-variants";

import { getContextMenuContext } from "./context-menu-context";

export type ContextMenuItemProps = ContextMenu.ItemProps;
</script>

<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: ContextMenuItemProps = $props();

	const { slots } = getContextMenuContext();
</script>

<ContextMenuPrimitive.Item class={cn(slots.item(), className)} {...rest}>
	{@render children?.()}
</ContextMenuPrimitive.Item>
