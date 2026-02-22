<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import { getDialogContext } from "./dialog-context";

export type DialogFooterProps = HTMLAttributes<HTMLDivElement>;
</script>

<script lang="ts">
	let { children, class: className, ...rest }: DialogFooterProps = $props();

	const { slots } = getDialogContext();
</script>

<div class={cn(slots.footer(), className)} {...rest}>
	{@render children?.()}
</div>
