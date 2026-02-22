<script lang="ts" module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import Label from "./label.svelte";

const { Story } = defineMeta({
	component: Label,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "Label",
});
</script>

<Story name="Default">
	<Label for="example">Label Text</Label>
</Story>
