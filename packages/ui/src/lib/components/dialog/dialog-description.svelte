<script lang="ts" module>
import type { Dialog } from "bits-ui";

import { cn } from "tailwind-variants";

import { getDialogContext } from "./dialog-context";

export type DialogDescriptionProps = Dialog.DescriptionProps;
</script>

<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: DialogDescriptionProps = $props();

	const { slots } = getDialogContext();
</script>

<DialogPrimitive.Description class={cn(slots.description(), className)} {...rest}>
	{@render children?.()}
</DialogPrimitive.Description>
