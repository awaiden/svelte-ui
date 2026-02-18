<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from 'tailwind-variants';

	import { formVariants, type FormVariantType } from './form.variants';

	export interface FormProps extends FormVariantType, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	let { children, class: className, ...rest }: FormProps = $props();

	let styles = $derived(formVariants());
</script>

<div class={cn(styles, className)} {...rest}>
	{@render children?.()}
</div>
