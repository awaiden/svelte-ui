<script lang="ts" module>
	import type { AlertDialog } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getAlertDialogContext } from './alert-dialog-context';

	export type AlertDialogContentProps = AlertDialog.ContentProps;
</script>

<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	import AlertDialogOverlay from './alert-dialog-overlay.svelte';

	let { children, class: className, ...rest }: AlertDialogContentProps = $props();

	const { slots } = getAlertDialogContext();
</script>

<AlertDialogPrimitive.Portal>
	<AlertDialogOverlay />
	<AlertDialogPrimitive.Content class={cn(slots.content(), className)} {...rest}>
		{@render children?.()}
	</AlertDialogPrimitive.Content>
</AlertDialogPrimitive.Portal>
