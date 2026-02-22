<script lang="ts" module>
import type { AlertDialog } from "bits-ui";

import { cn } from "tailwind-variants";

import { getAlertDialogContext } from "./alert-dialog-context";

export type AlertDialogCancelProps = AlertDialog.CancelProps;
</script>

<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: AlertDialogCancelProps = $props();

	const { slots } = getAlertDialogContext();
</script>

<AlertDialogPrimitive.Cancel class={cn(slots.cancel(), className)} {...rest}>
	{@render children?.()}
</AlertDialogPrimitive.Cancel>
