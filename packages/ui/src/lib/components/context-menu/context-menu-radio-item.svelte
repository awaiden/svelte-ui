<script lang="ts" module>
	import type { ContextMenu } from 'bits-ui';
	import type { Snippet } from 'svelte';

	import { cn } from 'tailwind-variants';

	import { getContextMenuContext } from './context-menu-context';

	export type ContextMenuRadioItemProps = {
		children?: Snippet;
	} & Omit<ContextMenu.RadioItemProps, 'children'>;
</script>

<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
	import LucideCircle from 'lucide-svelte/icons/circle';

	let { children: userChildren, class: className, ...rest }: ContextMenuRadioItemProps = $props();

	const { slots } = getContextMenuContext();
</script>

<ContextMenuPrimitive.RadioItem class={cn(slots.radioItem(), className)} {...rest}>
	{#snippet children(args)}
		<span class="absolute left-2 flex size-3.5 items-center justify-center">
			{#if args?.checked}
				<LucideCircle class="size-2 fill-current" />
			{/if}
		</span>
		{@render userChildren?.(args || ({ props: {} } as any))}
	{/snippet}
</ContextMenuPrimitive.RadioItem>
