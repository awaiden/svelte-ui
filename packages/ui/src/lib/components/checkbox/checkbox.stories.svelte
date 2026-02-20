<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Checkbox } from ".";
import { Label } from "../label";

const { Story } = defineMeta({
	component: Checkbox,
	title: "Checkbox",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
});
</script>

<Story name="Default">
	<div class="flex items-center gap-2">
		<Checkbox id="terms" />
		<Label for="terms">Accept terms and conditions</Label>
	</div>
</Story>

<Story name="Checked" args={{ checked: true }}>
	<div class="flex items-center gap-2">
		<Checkbox id="checked" checked />
		<Label for="checked">Checked</Label>
	</div>
</Story>

<Story name="Indeterminate" args={{ indeterminate: true }}>
	<div class="flex items-center gap-2">
		<Checkbox id="indeterminate" indeterminate />
		<Label for="indeterminate">Indeterminate</Label>
	</div>
</Story>

<Story name="Disabled" args={{ disabled: true }}>
	<div class="flex items-center gap-2">
		<Checkbox id="disabled" disabled />
		<Label for="disabled">Disabled</Label>
	</div>
</Story>
