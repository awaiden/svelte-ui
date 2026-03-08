<script lang="ts" module>
	import type { DropdownMenu } from 'bits-ui';

	export type DropdownMenuTriggerProps = DropdownMenu.TriggerProps;
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	let { child, children: userChildren, ...rest }: DropdownMenuTriggerProps = $props();
</script>

<DropdownMenuPrimitive.Trigger {...rest}>
	{#snippet children(args)}
		{@render userChildren?.(args || ({ props: {} } as any))}
	{/snippet}
</DropdownMenuPrimitive.Trigger>
