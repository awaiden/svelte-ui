<script lang="ts" module>
	import type { Select } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getSelectContext } from './select-context';

	export type SelectTriggerProps = Select.TriggerProps;
</script>

<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import LucideChevronDown from 'lucide-svelte/icons/chevron-down';

	let { children: userChildren, class: className, ...rest }: SelectTriggerProps = $props();

	const { slots } = getSelectContext();
</script>

<SelectPrimitive.Trigger class={cn(slots.trigger(), className)} {...rest}>
	{#snippet children(args)}
		{@render userChildren?.(args || ({ props: {} } as any))}
		{#if !rest.asChild}
			<LucideChevronDown class="size-4 opacity-50" />
		{/if}
	{/snippet}
</SelectPrimitive.Trigger>
