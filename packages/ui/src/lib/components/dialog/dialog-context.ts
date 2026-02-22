import { createContext } from "svelte";

import type { dialogVariants } from "./dialog.variants";

interface DialogContext {
	slots: ReturnType<typeof dialogVariants>;
}

export const [getDialogContext, setDialogContext] =
	createContext<DialogContext>();
