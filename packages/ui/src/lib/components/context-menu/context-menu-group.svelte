<script lang="ts" module>
	import type { ContextMenu } from 'bits-ui';

	export type ContextMenuGroupProps = ContextMenu.GroupProps;
</script>

<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	let { children, ...rest }: ContextMenuGroupProps = $props();
</script>

<ContextMenuPrimitive.Group {...rest}>
	{@render children?.()}
</ContextMenuPrimitive.Group>
