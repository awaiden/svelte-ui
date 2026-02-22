<script lang="ts" module>
import type { Accordion } from "bits-ui";

import { cn } from "tailwind-variants";

import { setAccordionContext } from "./accordion-context";
import {
	accordionVariants,
	type AccordionVariantType,
} from "./accordion.variants";

export type AccordionRootProps = Accordion.RootProps & AccordionVariantType;
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

<!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -- Bits UI discriminated union requires type assertion for spreading -->
<AccordionPrimitive.Root class={cn(slots.root(), className)} {...rest as any}>
	{@render children?.()}
</AccordionPrimitive.Root>
