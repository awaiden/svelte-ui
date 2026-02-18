<script lang="ts" module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Card } from ".";

const { Story } = defineMeta({
	title: "Card",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
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
