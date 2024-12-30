<script lang="ts">
	import Board from '$lib/Board.svelte';
	import { board } from '$lib/state.svelte';
</script>

{#if $board}
	<Board />
{:else}
	<p>No board</p>
{/if}
