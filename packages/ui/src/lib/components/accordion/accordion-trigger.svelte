<script lang="ts" module>
import type { Accordion } from "bits-ui";

import { cn } from "tailwind-variants";

import { getAccordionContext } from "./accordion-context";

export type AccordionTriggerProps = Accordion.TriggerProps;
</script>

<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { LucideChevronDown } from 'lucide-svelte';

	let { children, class: className, ...rest }: AccordionTriggerProps = $props();

	const { slots } = getAccordionContext();
</script>

<AccordionPrimitive.Trigger class={cn(slots.trigger(), className)} {...rest}>
	{@render children?.()}
	<LucideChevronDown class={slots.triggerIcon()} />
</AccordionPrimitive.Trigger>
