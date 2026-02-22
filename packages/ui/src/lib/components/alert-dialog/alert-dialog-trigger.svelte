<script lang="ts" module>
import type { AlertDialog } from "bits-ui";

export type AlertDialogTriggerProps = AlertDialog.TriggerProps;
</script>

<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	let { children, ...rest }: AlertDialogTriggerProps = $props();
</script>

<AlertDialogPrimitive.Trigger {...rest}>
	{@render children?.()}
</AlertDialogPrimitive.Trigger>
