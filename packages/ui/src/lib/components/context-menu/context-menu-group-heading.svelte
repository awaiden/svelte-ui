<script lang="ts" module>
	import type { ContextMenu } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getContextMenuContext } from './context-menu-context';

	export type ContextMenuGroupHeadingProps = ContextMenu.GroupHeadingProps;
</script>

<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: ContextMenuGroupHeadingProps = $props();

	const { slots } = getContextMenuContext();
</script>

<ContextMenuPrimitive.GroupHeading class={cn(slots.groupHeading(), className)} {...rest}>
	{@render children?.()}
</ContextMenuPrimitive.GroupHeading>
