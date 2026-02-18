<script lang="ts" module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Form } from ".";
import { Card, Input, Field, Button } from "$lib/components";

const { Story } = defineMeta({
	title: "Form",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
});
</script>

<script lang="ts">
	const handleSubmit = (event: Event) => {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const data = Object.fromEntries(formData.entries());
		console.log('Form submitted:', data);
	};
</script>

<Story name="Default">
	<Card.Root>
		<Card.Header>
			<Card.Title>Form Title</Card.Title>
			<Card.Description>This is a description of the form.</Card.Description>
		</Card.Header>
		<Card.Content>
			<Form onsubmit={handleSubmit}>
				<Field.Root>
					<Field.Label>Username</Field.Label>
					<Input placeholder="Enter your username" />
					<Field.Description>Must be at least 6 characters.</Field.Description>
					<Field.Error>Username is required.</Field.Error>
				</Field.Root>

				<Field.Root>
					<Field.Label>Password</Field.Label>
					<Input type="password" placeholder="Enter your password" />
					<Field.Description>Must be at least 8 characters.</Field.Description>
					<Field.Error>Password is required.</Field.Error>
				</Field.Root>

				<Button type="submit">Submit</Button>
			</Form>
		</Card.Content>
	</Card.Root>
</Story>
