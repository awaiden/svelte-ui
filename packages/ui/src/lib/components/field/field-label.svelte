<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from 'tailwind-variants';

	import type { FieldVariantType } from './field.variants';

	import { getFieldContext } from './field-context';

	export type FieldProps = FieldVariantType & HTMLAttributes<HTMLLabelElement>;
</script>

<script lang="ts">
	let { children, class: className, ...rest }: FieldProps = $props();

	const { id, slots } = getFieldContext();
</script>

<label for={id} class={cn(slots.label(), className)} {...rest}>
	{@render children?.()}
</label>
