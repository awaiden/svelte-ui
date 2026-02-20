import CheckboxItem from "./dropdown-menu-checkbox-item.svelte";
import Content from "./dropdown-menu-content.svelte";
import GroupHeading from "./dropdown-menu-group-heading.svelte";
import Group from "./dropdown-menu-group.svelte";
import Item from "./dropdown-menu-item.svelte";
import RadioGroup from "./dropdown-menu-radio-group.svelte";
import RadioItem from "./dropdown-menu-radio-item.svelte";
import Separator from "./dropdown-menu-separator.svelte";
import Shortcut from "./dropdown-menu-shortcut.svelte";
import SubContent from "./dropdown-menu-sub-content.svelte";
import SubTrigger from "./dropdown-menu-sub-trigger.svelte";
import Sub from "./dropdown-menu-sub.svelte";
import Trigger from "./dropdown-menu-trigger.svelte";
import Root from "./dropdown-menu.svelte";

export {
	dropdownMenuVariants,
	type DropdownMenuVariantType,
} from "./dropdown-menu.variants";

export const DropdownMenu = {
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
