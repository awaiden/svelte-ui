<script lang="ts" module>
	import type { ContextMenu } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getContextMenuContext } from './context-menu-context';

	export type ContextMenuSeparatorProps = ContextMenu.SeparatorProps;
</script>

<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	let { class: className, ...rest }: ContextMenuSeparatorProps = $props();

	const { slots } = getContextMenuContext();
</script>

<ContextMenuPrimitive.Separator class={cn(slots.separator(), className)} {...rest} />
