import { createContext } from 'svelte';

import { accordionVariants } from './accordion.variants';

interface AccordionContext {
	slots: ReturnType<typeof accordionVariants>;
}

const [getOriginalAccordionContext, setAccordionContext] = createContext<AccordionContext>();

export const getAccordionContext = () => {
	try {
		return getOriginalAccordionContext();
	} catch {
		return {
			get slots() {
				return accordionVariants();
			}
		};
	}
};

export { setAccordionContext };
