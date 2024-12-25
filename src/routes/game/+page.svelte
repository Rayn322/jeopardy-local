<script lang="ts">
	import { board } from '$lib/state.svelte';
</script>

{#if $board}
	<p>{$board.name}</p>
{:else}
	<p>No board</p>
{/if}
