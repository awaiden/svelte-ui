<script lang="ts" module>
	import type { HTMLLabelAttributes } from 'svelte/elements';

	import { cn } from 'tailwind-variants';

	import { labelVariants, type LabelVariantType } from './label.variants';

	export interface LabelProps extends HTMLLabelAttributes, LabelVariantType {}
</script>

<script lang="ts">
	let { children, class: className, ...rest }: LabelProps = $props();

	let styles = $derived(labelVariants());
</script>

<label class={cn(styles, className)} {...rest}>
	{@render children?.()}
</label>
