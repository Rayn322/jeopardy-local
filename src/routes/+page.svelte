<script lang="ts">
	import { state } from '$lib/gamepad.svelte';
</script>

<h1>{state.count}</h1>
{#each state.buzzing as buzzing, i}
	<p>{i}: {buzzing}</p>
{/each}
