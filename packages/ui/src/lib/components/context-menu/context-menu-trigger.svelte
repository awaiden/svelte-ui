<script lang="ts" module>
	import type { ContextMenu } from 'bits-ui';

	export type ContextMenuTriggerProps = ContextMenu.TriggerProps;
</script>

<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	let { children: userChildren, ...rest }: ContextMenuTriggerProps = $props();
</script>

<ContextMenuPrimitive.Trigger {...rest}>
	{#snippet children(args)}
		{@render userChildren?.(args || ({ props: {} } as any))}
	{/snippet}
</ContextMenuPrimitive.Trigger>
