<script lang="ts" module>
import type { HTMLTextareaAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import {
	textareaVariants,
	type TextareaVariantType,
} from "./textarea.variants";

export interface TextareaProps
	extends HTMLTextareaAttributes,
		TextareaVariantType {}
</script>

<script lang="ts">
	let { class: className, ...rest }: TextareaProps = $props();

	let styles = $derived(textareaVariants());
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<textarea class={cn(styles, className)} {...rest} />
