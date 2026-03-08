import Close from './dialog-close.svelte';
import Content from './dialog-content.svelte';
import Description from './dialog-description.svelte';
import Footer from './dialog-footer.svelte';
import Header from './dialog-header.svelte';
import Overlay from './dialog-overlay.svelte';
import Title from './dialog-title.svelte';
import Trigger from './dialog-trigger.svelte';
import Root from './dialog.svelte';

export { dialogVariants, type DialogVariantType } from './dialog.variants';

export const Dialog = {
	Close,
	Content,
	Description,
	Footer,
	Header,
	Overlay,
	Root,
	Title,
	Trigger
};
