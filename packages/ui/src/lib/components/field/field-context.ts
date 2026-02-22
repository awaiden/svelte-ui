import { createContext } from "svelte";

import type { fieldVariants } from "./field.variants";

interface FieldContext {
	id: string;
	slots: ReturnType<typeof fieldVariants>;
}

export const [getFieldContext, setFieldContext] = createContext<FieldContext>();
