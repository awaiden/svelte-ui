<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import {{PascalName}} from "./{{name}}.svelte";

const { Story } = defineMeta({
	component: {{PascalName}},
	title: "{{PascalName}}",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		variant: "default",
	},
});
</script>

<Story name="Default">{{PascalName}} content</Story>
