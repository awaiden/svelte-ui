<script lang="ts" module>
import type { AlertDialog } from "bits-ui";

import { setAlertDialogContext } from "./alert-dialog-context";
import {
	alertDialogVariants,
	type AlertDialogVariantType,
} from "./alert-dialog.variants";

export type AlertDialogRootProps = AlertDialogVariantType &
	AlertDialog.RootProps;
</script>

<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	let { children, ...rest }: AlertDialogRootProps = $props();

	let slots = $derived(alertDialogVariants());

	setAlertDialogContext({
		get slots() {
			return slots;
		}
	});
</script>

<AlertDialogPrimitive.Root {...rest}>
	{@render children?.()}
</AlertDialogPrimitive.Root>
