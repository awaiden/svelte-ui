<script lang="ts" module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import Input from "./input.svelte";

const { Story } = defineMeta({
	component: Input,
	title: "Input",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
});
</script>

<Story name="Default">
	<Input placeholder="Enter text here" />
</Story>
