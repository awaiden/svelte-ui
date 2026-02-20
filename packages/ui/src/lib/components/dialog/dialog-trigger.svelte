<script lang="ts" module>
import type { Dialog } from "bits-ui";

export interface DialogTriggerProps extends Dialog.TriggerProps {}
</script>

<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	let { children, ...rest }: DialogTriggerProps = $props();
</script>

<DialogPrimitive.Trigger {...rest}>
	{@render children?.()}
</DialogPrimitive.Trigger>
