import { createContext } from "svelte";

import type { avatarVariants } from "./avatar.variants";

interface AvatarContext {
	slots: ReturnType<typeof avatarVariants>;
}

export const [getAvatarContext, setAvatarContext] =
	createContext<AvatarContext>();
