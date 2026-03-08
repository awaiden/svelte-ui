<script lang="ts" module>
	import type { AlertDialog } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getAlertDialogContext } from './alert-dialog-context';

	export type AlertDialogOverlayProps = AlertDialog.OverlayProps;
</script>

<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	let { class: className, ...rest }: AlertDialogOverlayProps = $props();

	const { slots } = getAlertDialogContext();
</script>

<AlertDialogPrimitive.Overlay class={cn(slots.overlay(), className)} {...rest} />
