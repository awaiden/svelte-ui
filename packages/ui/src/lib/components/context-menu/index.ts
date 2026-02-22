import CheckboxItem from "./context-menu-checkbox-item.svelte";
import Content from "./context-menu-content.svelte";
import GroupHeading from "./context-menu-group-heading.svelte";
import Group from "./context-menu-group.svelte";
import Item from "./context-menu-item.svelte";
import RadioGroup from "./context-menu-radio-group.svelte";
import RadioItem from "./context-menu-radio-item.svelte";
import Separator from "./context-menu-separator.svelte";
import Shortcut from "./context-menu-shortcut.svelte";
import SubContent from "./context-menu-sub-content.svelte";
import SubTrigger from "./context-menu-sub-trigger.svelte";
import Sub from "./context-menu-sub.svelte";
import Trigger from "./context-menu-trigger.svelte";
import Root from "./context-menu.svelte";

export {
	contextMenuVariants,
	type ContextMenuVariantType,
} from "./context-menu.variants";

export const ContextMenu = {
	CheckboxItem,
	Content,
	Group,
	GroupHeading,
	Item,
	RadioGroup,
	RadioItem,
	Root,
	Separator,
	Shortcut,
	Sub,
	SubContent,
	SubTrigger,
	Trigger,
};
