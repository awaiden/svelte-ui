import Content from './card-content.svelte';
import Description from './card-description.svelte';
import Header from './card-header.svelte';
import Title from './card-title.svelte';
import Root from './card.svelte';

export { cardVariants, type CardVariantType } from './card.variants';

export const Card = {
	Content,
	Description,
	Header,
	Root,
	Title
};
