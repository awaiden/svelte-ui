import { createContext } from "svelte";

import type { alertDialogVariants } from "./alert-dialog.variants";

interface AlertDialogContext {
	slots: ReturnType<typeof alertDialogVariants>;
}

export const [getAlertDialogContext, setAlertDialogContext] =
	createContext<AlertDialogContext>();
