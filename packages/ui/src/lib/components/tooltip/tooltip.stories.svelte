<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import { Tooltip } from ".";
import { Button } from "../button";

const { Story } = defineMeta({
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "Tooltip",
});
</script>

<Story name="Default">
	<Tooltip.Provider>
		<Tooltip.Root>
			<Tooltip.Trigger>
				<Button variant="outline">Hover me</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>This is a tooltip</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
</Story>

<Story name="With Arrow">
	<Tooltip.Provider>
		<Tooltip.Root>
			<Tooltip.Trigger>
				<Button variant="outline">With arrow</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<Tooltip.Arrow />
				<p>Tooltip with an arrow</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
</Story>

<Story name="Positions">
	<Tooltip.Provider>
		<div class="flex gap-4">
			<Tooltip.Root>
				<Tooltip.Trigger>
					<Button variant="outline">Top</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="top">
					<p>Top tooltip</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger>
					<Button variant="outline">Bottom</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="bottom">
					<p>Bottom tooltip</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger>
					<Button variant="outline">Left</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="left">
					<p>Left tooltip</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger>
					<Button variant="outline">Right</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="right">
					<p>Right tooltip</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</div>
	</Tooltip.Provider>
</Story>
