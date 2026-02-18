<script lang="ts" module>
	import { cn } from '$lib/utils';
	import { Select, type SelectContentProps } from 'bits-ui';

	import { selectVariants } from './select.variants';

	export type SelectProps = SelectContentProps;
</script>

<script lang="ts">
	let { children, class: className, ...rest }: SelectProps = $props();
	const slots = $derived(selectVariants());
</script>

<Select.Content {...rest} class={cn(slots.content(), className)}>
	{@render children?.()}
</Select.Content>
