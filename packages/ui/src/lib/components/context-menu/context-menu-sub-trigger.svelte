<script lang="ts" module>
	import type { ContextMenu } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getContextMenuContext } from './context-menu-context';

	export type ContextMenuSubTriggerProps = ContextMenu.SubTriggerProps;
</script>

<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
	import LucideChevronRight from 'lucide-svelte/icons/chevron-right';

	let { children: userChildren, class: className, ...rest }: ContextMenuSubTriggerProps = $props();

	const { slots } = getContextMenuContext();
</script>

<ContextMenuPrimitive.SubTrigger class={cn(slots.subTrigger(), className)} {...rest}>
	{#snippet children(args)}
		{@render userChildren?.(args || ({ props: {} } as any))}
		{#if !rest.asChild}
			<LucideChevronRight class="ml-auto size-4" />
		{/if}
	{/snippet}
</ContextMenuPrimitive.SubTrigger>
