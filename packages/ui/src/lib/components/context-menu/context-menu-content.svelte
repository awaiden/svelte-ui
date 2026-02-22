<script lang="ts" module>
import type { ContextMenu } from "bits-ui";

import { cn } from "tailwind-variants";

import { getContextMenuContext } from "./context-menu-context";

export type ContextMenuContentProps = ContextMenu.ContentProps;
</script>

<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: ContextMenuContentProps = $props();

	const { slots } = getContextMenuContext();
</script>

<ContextMenuPrimitive.Portal>
	<ContextMenuPrimitive.Content class={cn(slots.content(), className)} {...rest}>
		{@render children?.()}
	</ContextMenuPrimitive.Content>
</ContextMenuPrimitive.Portal>
