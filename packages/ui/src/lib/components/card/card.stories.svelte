<script lang="ts" module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import { Card } from ".";

const { Story } = defineMeta({
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "Card",
});
</script>

<Story name="Default">
	<Card.Root>
		<Card.Header>
			<Card.Title>Card Title</Card.Title>
			<Card.Description>This is a description of the card.</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>This is the content of the card.</p>
		</Card.Content>
	</Card.Root>
</Story>
