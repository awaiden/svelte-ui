import Content from "./accordion-content.svelte";
import Header from "./accordion-header.svelte";
import Item from "./accordion-item.svelte";
import Trigger from "./accordion-trigger.svelte";
import Root from "./accordion.svelte";

export {
	accordionVariants,
	type AccordionVariantType,
} from "./accordion.variants";

export const Accordion = {
	Content,
	Header,
	Item,
	Root,
	Trigger,
};
