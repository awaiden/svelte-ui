<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from 'tailwind-variants';

	import { fieldVariants, type FieldVariantType } from './field.variants';

	export interface FieldProps extends FieldVariantType, HTMLAttributes<HTMLLabelElement> {}
</script>

<script lang="ts">
	let { children, class: className, ...rest }: FieldProps = $props();

	let slots = $derived(fieldVariants());
</script>

<label class={cn(slots.label(), className)} {...rest}>
	{@render children?.()}
</label>
