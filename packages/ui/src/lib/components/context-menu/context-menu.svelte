<script lang="ts" module>
	import type { ContextMenu } from 'bits-ui';

	import { setContextMenuContext } from './context-menu-context';
	import { contextMenuVariants, type ContextMenuVariantType } from './context-menu.variants';

	export type ContextMenuRootProps = ContextMenu.RootProps & ContextMenuVariantType;
</script>

<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	let { children, ...rest }: ContextMenuRootProps = $props();

	let slots = $derived(contextMenuVariants());

	setContextMenuContext({
		get slots() {
			return slots;
		}
	});
</script>

<ContextMenuPrimitive.Root {...rest}>
	{@render children?.()}
</ContextMenuPrimitive.Root>
