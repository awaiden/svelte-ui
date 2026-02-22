<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import { getAlertDialogContext } from "./alert-dialog-context";

export type AlertDialogHeaderProps = HTMLAttributes<HTMLDivElement>;
</script>

<script lang="ts">
	let { children, class: className, ...rest }: AlertDialogHeaderProps = $props();

	const { slots } = getAlertDialogContext();
</script>

<div class={cn(slots.header(), className)} {...rest}>
	{@render children?.()}
</div>
