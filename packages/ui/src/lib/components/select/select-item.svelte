<script lang="ts" module>
	import { cn } from '$lib/utils';
	import { Select, type SelectItemProps } from 'bits-ui';

	import { selectVariants } from './select.variants';

	export type SelectProps = SelectItemProps;
</script>

<script lang="ts">
	let { children: childrenSnippet, class: className, ...rest }: SelectProps = $props();
	const slots = $derived(selectVariants());
</script>

<Select.Item {...rest} class={cn(slots.item(), className)}>
	{#snippet children(params)}
		{@render childrenSnippet?.(params)}
	{/snippet}
</Select.Item>
