import { createContext } from 'svelte';

import { alertDialogVariants } from './alert-dialog.variants';

interface AlertDialogContext {
	slots: ReturnType<typeof alertDialogVariants>;
}

const [getOriginalAlertDialogContext, setOriginalAlertDialogContext] =
	createContext<AlertDialogContext>();

export const getAlertDialogContext = () => {
	try {
		return getOriginalAlertDialogContext();
	} catch {
		return {
			get slots() {
				return alertDialogVariants();
			}
		};
	}
};

export const setAlertDialogContext = setOriginalAlertDialogContext;
