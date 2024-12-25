<script lang="ts">
	import Board from '$lib/Board.svelte';
	import { board } from '$lib/state.svelte';
</script>

{#if $board}
	<Board board={$board} />
{:else}
	<p>No board</p>
{/if}
