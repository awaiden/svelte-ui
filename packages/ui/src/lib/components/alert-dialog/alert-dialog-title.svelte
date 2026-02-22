<script lang="ts" module>
import type { AlertDialog } from "bits-ui";

import { cn } from "tailwind-variants";

import { getAlertDialogContext } from "./alert-dialog-context";

export type AlertDialogTitleProps = AlertDialog.TitleProps;
</script>

<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: AlertDialogTitleProps = $props();

	const { slots } = getAlertDialogContext();
</script>

<AlertDialogPrimitive.Title class={cn(slots.title(), className)} {...rest}>
	{@render children?.()}
</AlertDialogPrimitive.Title>
