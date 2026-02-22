<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { LucideThumbsUp } from "lucide-svelte";

import Button from "./button.svelte";

const { Story } = defineMeta({
	args: {
		disabled: false,
		size: "md",
		variant: "primary",
	},
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "Button",
});
</script>

<Story name="Default">Hello world</Story>

<Story name="Secondary" args={{ variant: 'secondary' }}>Secondary Button</Story>

<Story name="Large" args={{ size: 'lg' }}>Large Button</Story>

<Story name="Disabled" args={{ disabled: true }}>Hello world</Story>

<Story name="With Icon" args={{ variant: 'primary' }}>
	<LucideThumbsUp />
	Button with Icon
</Story>

<Story name="Only Icon" args={{ isIconOnly: true, size: 'sm', variant: 'ghost' }}>
	<LucideThumbsUp />
</Story>

<Story name="Custom Class" args={{ class: 'bg-green-500 hover:bg-green-600' }}>
	Custom Class Button
</Story>
