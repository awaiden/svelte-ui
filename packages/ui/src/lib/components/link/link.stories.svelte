<script lang="ts" module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import Link from "./link.svelte";

const { Story } = defineMeta({
	component: Link,
	title: "Link",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
});
</script>

<Story name="Default">
	<Link>Click here</Link>
</Story>
