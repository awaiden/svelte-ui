<script lang="ts" module>
	import type { Accordion } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getAccordionContext } from './accordion-context';

	export type AccordionItemProps = Accordion.ItemProps;
</script>

<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	let { children: userChildren, class: className, ...rest }: AccordionItemProps = $props();

	const { slots } = getAccordionContext();
</script>

<AccordionPrimitive.Item class={cn(slots.item(), className)} {...rest}>
	{#snippet children(args)}
		{@render userChildren?.(args || ({ props: {} } as any))}
	{/snippet}
</AccordionPrimitive.Item>
