<script lang="ts" module>
import type { DropdownMenu } from "bits-ui";

import { cn } from "tailwind-variants";

import { getDropdownMenuContext } from "./dropdown-menu-context";

export interface DropdownMenuSeparatorProps
	extends DropdownMenu.SeparatorProps {}
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	let { class: className, ...rest }: DropdownMenuSeparatorProps = $props();

	const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.Separator class={cn(slots.separator(), className)} {...rest} />
