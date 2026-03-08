<script lang="ts" module>
	import type { Dialog } from 'bits-ui';

	export type DialogTriggerProps = Dialog.TriggerProps;
</script>

<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	let { children: userChildren, ...rest }: DialogTriggerProps = $props();
</script>

<DialogPrimitive.Trigger {...rest}>
	{#snippet children(args)}
		{@render userChildren?.(args || ({ props: {} } as any))}
	{/snippet}
</DialogPrimitive.Trigger>
