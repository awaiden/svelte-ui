<script lang="ts">
	import type { Snippet } from 'svelte'; // Snippet tipini import et

	import { Tooltip as TooltipPrimitive, type TooltipTriggerProps } from 'bits-ui';

	let { children, ...rest }: { children?: Snippet } & TooltipTriggerProps = $props();
</script>

<TooltipPrimitive.Trigger {...rest}>
	{@render children?.()}
</TooltipPrimitive.Trigger>
