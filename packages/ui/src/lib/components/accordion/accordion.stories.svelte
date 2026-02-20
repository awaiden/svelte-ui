<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Accordion } from ".";

const { Story } = defineMeta({
	title: "Accordion",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
});
</script>

<Story name="Single">
	<div class="w-full min-w-100">
		<Accordion.Root type="single" value="item-1">
			<Accordion.Item value="item-1">
				<Accordion.Header>
					<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Header>
					<Accordion.Trigger>Is it styled?</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content
					>Yes. It comes with default styles that match the other components' aesthetic.</Accordion.Content
				>
			</Accordion.Item>
			<Accordion.Item value="item-3">
				<Accordion.Header>
					<Accordion.Trigger>Is it animated?</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content
					>Yes. It's animated by default, but you can disable it if you prefer.</Accordion.Content
				>
			</Accordion.Item>
		</Accordion.Root>
	</div>
</Story>

<Story name="Multiple">
	<div class="w-full min-w-100">
		<Accordion.Root type="multiple">
			<Accordion.Item value="item-1">
				<Accordion.Header>
					<Accordion.Trigger>First section</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>Content for the first section.</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Header>
					<Accordion.Trigger>Second section</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>Content for the second section.</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</div>
</Story>
