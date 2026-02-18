<script lang="ts">
import { Button } from "svelte-ui";

let count: number = $state(0);
const increment = () => {
	count += 1;
};
</script>

<div class="grid place-items-center py-20">
  <Button onclick={increment}>
  count is {count}
</Button>

</div>