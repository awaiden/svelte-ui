<script lang="ts" module>
import type { Accordion } from "bits-ui";

import { cn } from "tailwind-variants";

import { getAccordionContext } from "./accordion-context";

export type AccordionHeaderProps = Accordion.HeaderProps;
</script>

<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: AccordionHeaderProps = $props();

	const { slots } = getAccordionContext();
</script>

<AccordionPrimitive.Header class={cn(slots.header(), className)} {...rest}>
	{@render children?.()}
</AccordionPrimitive.Header>
