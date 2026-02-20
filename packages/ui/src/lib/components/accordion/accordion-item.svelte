<script lang="ts" module>
import type { Accordion } from "bits-ui";

import { cn } from "tailwind-variants";

import { getAccordionContext } from "./accordion-context";

export interface AccordionItemProps extends Accordion.ItemProps {}
</script>

<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: AccordionItemProps = $props();

	const { slots } = getAccordionContext();
</script>

<AccordionPrimitive.Item class={cn(slots.item(), className)} {...rest}>
	{@render children?.()}
</AccordionPrimitive.Item>
