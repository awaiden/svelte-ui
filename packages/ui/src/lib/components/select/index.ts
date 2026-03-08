import Content from './select-content.svelte';
import GroupHeading from './select-group-heading.svelte';
import Group from './select-group.svelte';
import Item from './select-item.svelte';
import ScrollDownButton from './select-scroll-down-button.svelte';
import ScrollUpButton from './select-scroll-up-button.svelte';
import Trigger from './select-trigger.svelte';
import Viewport from './select-viewport.svelte';
import Root from './select.svelte';

export { selectVariants, type SelectVariantType } from './select.variants';

export const Select = {
	Content,
	Group,
	GroupHeading,
	Item,
	Root,
	ScrollDownButton,
	ScrollUpButton,
	Trigger,
	Viewport
};
