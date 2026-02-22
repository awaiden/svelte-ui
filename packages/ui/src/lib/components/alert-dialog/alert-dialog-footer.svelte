<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import { getAlertDialogContext } from "./alert-dialog-context";

export type AlertDialogFooterProps = HTMLAttributes<HTMLDivElement>;
</script>

<script lang="ts">
	let { children, class: className, ...rest }: AlertDialogFooterProps = $props();

	const { slots } = getAlertDialogContext();
</script>

<div class={cn(slots.footer(), className)} {...rest}>
	{@render children?.()}
</div>
