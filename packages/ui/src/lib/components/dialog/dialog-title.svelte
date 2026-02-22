<script lang="ts" module>
import type { Dialog } from "bits-ui";

import { cn } from "tailwind-variants";

import { getDialogContext } from "./dialog-context";

export type DialogTitleProps = Dialog.TitleProps;
</script>

<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: DialogTitleProps = $props();

	const { slots } = getDialogContext();
</script>

<DialogPrimitive.Title class={cn(slots.title(), className)} {...rest}>
	{@render children?.()}
</DialogPrimitive.Title>
