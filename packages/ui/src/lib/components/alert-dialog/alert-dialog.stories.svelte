<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { AlertDialog } from ".";
import { Button } from "../button";

const { Story } = defineMeta({
	title: "Alert Dialog",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
});
</script>

<Story name="Default">
	<AlertDialog.Root>
		<AlertDialog.Trigger>
			<Button variant="outline">Delete Account</Button>
		</AlertDialog.Trigger>
		<AlertDialog.Content>
			<AlertDialog.Header>
				<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
				<AlertDialog.Description>
					This action cannot be undone. This will permanently delete your account and remove your
					data from our servers.
				</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
				<AlertDialog.Action>Continue</AlertDialog.Action>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog.Root>
</Story>
