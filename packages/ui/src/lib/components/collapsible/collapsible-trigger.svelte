<script lang="ts" module>
	import type { Collapsible } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getCollapsibleContext } from './collapsible-context';

	export type CollapsibleTriggerProps = Collapsible.TriggerProps;
</script>

<script lang="ts">
	import { Collapsible as CollapsiblePrimitive } from 'bits-ui';

	let { children: userChildren, class: className, ...rest }: CollapsibleTriggerProps = $props();

	const { slots } = getCollapsibleContext();
</script>

<CollapsiblePrimitive.Trigger class={cn(slots.trigger(), className)} {...rest}>
	{#snippet children(args)}
		{@render userChildren?.(args || ({ props: {} } as any))}
	{/snippet}
</CollapsiblePrimitive.Trigger>
