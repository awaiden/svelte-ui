<script lang="ts" module>
import type { Accordion } from "bits-ui";

import { cn } from "tailwind-variants";

import { getAccordionContext } from "./accordion-context";

export type AccordionContentProps = Accordion.ContentProps;
</script>

<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: AccordionContentProps = $props();

	const { slots } = getAccordionContext();
</script>

<AccordionPrimitive.Content class={cn(slots.content(), className)} {...rest}>
	<div class="pt-0 pb-4">
		{@render children?.()}
	</div>
</AccordionPrimitive.Content>
