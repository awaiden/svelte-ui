<script lang="ts" module>
import type { Avatar } from "bits-ui";

import { cn } from "tailwind-variants";

import { getAvatarContext } from "./avatar-context";

export interface AvatarImageProps extends Avatar.ImageProps {}
</script>

<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';

	let { class: className, ...rest }: AvatarImageProps = $props();

	const { slots } = getAvatarContext();
</script>

<AvatarPrimitive.Image class={cn(slots.image(), className)} {...rest} />
