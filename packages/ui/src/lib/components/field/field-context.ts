import { createContext } from "svelte";
import type { fieldVariants } from "./field.variants";

interface FieldContext {
	slots: ReturnType<typeof fieldVariants>;
}

export const [getFieldContext, setFieldContext] = createContext<FieldContext>();
