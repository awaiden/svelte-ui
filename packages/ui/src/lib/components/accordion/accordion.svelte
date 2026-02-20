<script lang="ts" module>
import type { Accordion } from "bits-ui";

import { cn } from "tailwind-variants";

import { setAccordionContext } from "./accordion-context";
import {
	accordionVariants,
	type AccordionVariantType,
} from "./accordion.variants";

export type AccordionRootProps = AccordionVariantType & Accordion.RootProps;
</script>

<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: AccordionRootProps = $props();

	let slots = $derived(accordionVariants());

	setAccordionContext({
		get slots() {
			return slots;
		}
	});
</script>

<AccordionPrimitive.Root class={cn(slots.root(), className)} {...rest as any}>
	{@render children?.()}
</AccordionPrimitive.Root>
