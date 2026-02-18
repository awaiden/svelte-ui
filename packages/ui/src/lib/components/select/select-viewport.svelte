<script lang="ts" module>
	import { cn } from '$lib/utils';
	import { Select, type SelectViewportProps } from 'bits-ui';

	import { selectVariants } from './select.variants';

	export type SelectProps = SelectViewportProps;
</script>

<script lang="ts">
	let { children, class: className, ...rest }: SelectProps = $props();
	const slots = $derived(selectVariants());
</script>

<Select.Viewport {...rest} class={cn(slots.viewport(), className)}>
	{@render children?.()}
</Select.Viewport>
