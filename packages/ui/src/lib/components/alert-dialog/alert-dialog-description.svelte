<script lang="ts" module>
	import type { AlertDialog } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getAlertDialogContext } from './alert-dialog-context';

	export type AlertDialogDescriptionProps = AlertDialog.DescriptionProps;
</script>

<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: AlertDialogDescriptionProps = $props();

	const { slots } = getAlertDialogContext();
</script>

<AlertDialogPrimitive.Description class={cn(slots.description(), className)} {...rest}>
	{@render children?.()}
</AlertDialogPrimitive.Description>
