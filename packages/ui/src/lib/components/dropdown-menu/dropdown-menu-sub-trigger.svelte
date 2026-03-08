<script lang="ts" module>
	import type { DropdownMenu } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getDropdownMenuContext } from './dropdown-menu-context';

	export type DropdownMenuSubTriggerProps = DropdownMenu.SubTriggerProps;
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import LucideChevronRight from 'lucide-svelte/icons/chevron-right';

	let { children: userChildren, class: className, ...rest }: DropdownMenuSubTriggerProps = $props();

	const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.SubTrigger class={cn(slots.subTrigger(), className)} {...rest}>
	{#snippet children(args)}
		{@render userChildren?.(args || ({ props: {} } as any))}
		{#if !rest.asChild}
			<LucideChevronRight class="ml-auto size-4" />
		{/if}
	{/snippet}
</DropdownMenuPrimitive.SubTrigger>
