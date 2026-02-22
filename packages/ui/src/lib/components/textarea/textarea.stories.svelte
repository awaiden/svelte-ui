<script lang="ts" module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import Textarea from "./textarea.svelte";

const { Story } = defineMeta({
	component: Textarea,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "Textarea",
});
</script>

<Story name="Default">
	<Textarea placeholder="Enter text here" />
</Story>
