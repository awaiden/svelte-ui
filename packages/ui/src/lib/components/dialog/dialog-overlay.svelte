<script lang="ts" module>
import type { Dialog } from "bits-ui";

import { cn } from "tailwind-variants";

import { getDialogContext } from "./dialog-context";

export type DialogOverlayProps = Dialog.OverlayProps;
</script>

<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	let { class: className, ...rest }: DialogOverlayProps = $props();

	const { slots } = getDialogContext();
</script>

<DialogPrimitive.Overlay class={cn(slots.overlay(), className)} {...rest} />
