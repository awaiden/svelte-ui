<script lang="ts" module>
import type { AlertDialog } from "bits-ui";

import { cn } from "tailwind-variants";

import { getAlertDialogContext } from "./alert-dialog-context";

export type AlertDialogActionProps = AlertDialog.ActionProps;
</script>

<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: AlertDialogActionProps = $props();

	const { slots } = getAlertDialogContext();
</script>

<AlertDialogPrimitive.Action class={cn(slots.action(), className)} {...rest}>
	{@render children?.()}
</AlertDialogPrimitive.Action>
