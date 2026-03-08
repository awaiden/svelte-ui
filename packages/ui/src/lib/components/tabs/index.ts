import Content from './tabs-content.svelte';
import List from './tabs-list.svelte';
import Trigger from './tabs-trigger.svelte';
import Root from './tabs.svelte';

export { tabsVariants, type TabsVariantType } from './tabs.variants';

export const Tabs = {
	Content,
	List,
	Root,
	Trigger
};
