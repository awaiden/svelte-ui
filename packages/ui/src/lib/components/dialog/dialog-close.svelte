<script lang="ts" module>
import type { Dialog } from "bits-ui";

import { cn } from "tailwind-variants";

import { getDialogContext } from "./dialog-context";

export interface DialogCloseProps extends Dialog.CloseProps {}
</script>

<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import LucideX from 'lucide-svelte/icons/x';

	let { children, class: className, ...rest }: DialogCloseProps = $props();

	const { slots } = getDialogContext();
</script>

<DialogPrimitive.Close class={cn(slots.close(), className)} {...rest}>
	{#if children}
		{@render children()}
	{:else}
		<LucideX class="size-4" />
		<span class="sr-only">Close</span>
	{/if}
</DialogPrimitive.Close>
