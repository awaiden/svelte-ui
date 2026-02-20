<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import { getDropdownMenuContext } from "./dropdown-menu-context";

export interface DropdownMenuShortcutProps
	extends HTMLAttributes<HTMLSpanElement> {}
</script>

<script lang="ts">
	let { children, class: className, ...rest }: DropdownMenuShortcutProps = $props();

	const { slots } = getDropdownMenuContext();
</script>

<span class={cn(slots.shortcut(), className)} {...rest}>
	{@render children?.()}
</span>
