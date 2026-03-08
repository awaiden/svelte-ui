<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from 'tailwind-variants';

	import type { FieldVariantType } from './field.variants';

	import { getFieldContext } from './field-context';

	export type FieldProps = FieldVariantType & HTMLAttributes<HTMLDivElement>;
</script>

<script lang="ts">
	let { children, class: className, ...rest }: FieldProps = $props();

	const { slots } = getFieldContext();
</script>

<div class={cn(slots.suffix(), className)} {...rest}>
	{@render children?.()}
</div>
