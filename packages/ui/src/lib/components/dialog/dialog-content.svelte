<script lang="ts" module>
	import type { Dialog } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getDialogContext } from './dialog-context';

	export type DialogContentProps = Dialog.ContentProps;
</script>

<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	import DialogOverlay from './dialog-overlay.svelte';

	let { children, class: className, ...rest }: DialogContentProps = $props();

	const { slots } = getDialogContext();
</script>

<DialogPrimitive.Portal>
	<DialogOverlay />
	<DialogPrimitive.Content class={cn(slots.content(), className)} {...rest}>
		{@render children?.()}
	</DialogPrimitive.Content>
</DialogPrimitive.Portal>
