<script lang="ts" module>
	import type { ContextMenu } from 'bits-ui';

	export type ContextMenuSubProps = ContextMenu.SubProps;
</script>

<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	let { children, ...rest }: ContextMenuSubProps = $props();
</script>

<ContextMenuPrimitive.Sub {...rest}>
	{@render children?.()}
</ContextMenuPrimitive.Sub>
