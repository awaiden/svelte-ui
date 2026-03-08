<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from 'tailwind-variants';

	import { getContextMenuContext } from './context-menu-context';

	export type ContextMenuShortcutProps = HTMLAttributes<HTMLSpanElement>;
</script>

<script lang="ts">
	let { children, class: className, ...rest }: ContextMenuShortcutProps = $props();

	const { slots } = getContextMenuContext();
</script>

<span class={cn(slots.shortcut(), className)} {...rest}>
	{@render children?.()}
</span>
