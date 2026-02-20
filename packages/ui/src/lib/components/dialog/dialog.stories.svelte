<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Dialog } from ".";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";

const { Story } = defineMeta({
	title: "Dialog",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
});
</script>

<Story name="Default">
	<Dialog.Root>
		<Dialog.Trigger>
			<Button variant="outline">Edit Profile</Button>
		</Dialog.Trigger>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Edit profile</Dialog.Title>
				<Dialog.Description>
					Make changes to your profile here. Click save when you're done.
				</Dialog.Description>
			</Dialog.Header>
			<div class="grid gap-4 py-4">
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="name" class="text-right">Name</Label>
					<Input id="name" value="John Doe" class="col-span-3" />
				</div>
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="username" class="text-right">Username</Label>
					<Input id="username" value="@johndoe" class="col-span-3" />
				</div>
			</div>
			<Dialog.Footer>
				<Button>Save changes</Button>
			</Dialog.Footer>
			<Dialog.Close />
		</Dialog.Content>
	</Dialog.Root>
</Story>
