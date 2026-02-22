<script lang="ts" module>
import type { HTMLButtonAttributes } from "svelte/elements";

import { Button } from "bits-ui";
import { cn } from "tailwind-variants";

import { buttonVariants, type ButtonVariantType } from "./button.variants";

export type ButtonProps = ButtonVariantType & HTMLButtonAttributes;
</script>

<script lang="ts">
	let { children, class: className, size, variant, ...rest }: ButtonProps = $props();

	let styles = $derived(buttonVariants({ size, variant }));
</script>

<Button.Root class={cn(styles, className)} {...rest}>
	{@render children?.()}
</Button.Root>
