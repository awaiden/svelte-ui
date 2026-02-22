<script lang="ts" module>
import type { ContextMenu } from "bits-ui";

export type ContextMenuTriggerProps = ContextMenu.TriggerProps;
</script>

<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	let { children, ...rest }: ContextMenuTriggerProps = $props();
</script>

<ContextMenuPrimitive.Trigger {...rest}>
	{@render children?.()}
</ContextMenuPrimitive.Trigger>
