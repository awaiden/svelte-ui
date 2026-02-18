import Description from './field-description.svelte';
import Error from './field-error.svelte';
import Group from './field-group.svelte';
import Label from './field-label.svelte';
import Prefix from './field-prefix.svelte';
import Suffix from './field-suffix.svelte';
import Root from './field.svelte';

export { fieldVariants, type FieldVariantType } from './field.variants';

export const Field = {
	Description,
	Error,
	Group,
	Label,
	Prefix,
	Root,
	Suffix
};
