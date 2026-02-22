<script lang="ts" module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import Link from "./link.svelte";

const { Story } = defineMeta({
	component: Link,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "Link",
});
</script>

<Story name="Default">
	<Link>Click here</Link>
</Story>
