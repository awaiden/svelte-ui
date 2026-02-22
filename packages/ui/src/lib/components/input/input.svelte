<script lang="ts" module>
import type { HTMLInputAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import { inputVariants, type InputVariantType } from "./input.variants";

export type InputProps = HTMLInputAttributes & InputVariantType;
</script>

<script lang="ts">
	let { class: className, ...rest }: InputProps = $props();

	let styles = $derived(inputVariants());
</script>

<input class={cn(styles, className)} {...rest} />
