<script lang="ts" module>
	import type { AlertDialog } from 'bits-ui';

	export type AlertDialogTriggerProps = AlertDialog.TriggerProps;
</script>

<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	let { children: userChildren, ...rest }: AlertDialogTriggerProps = $props();
</script>

<AlertDialogPrimitive.Trigger {...rest}>
	{#snippet children(args)}
		{@render userChildren?.(args || ({ props: {} } as any))}
	{/snippet}
</AlertDialogPrimitive.Trigger>
