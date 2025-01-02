<script lang="ts">
	import QuestionDisplay from './Question.svelte';
	import { board, openQuestion, sharedState } from './state.svelte';
	import type { Board, Category, Question } from './types';

	let categoryIndex = $state(0);
	let questionIndex = $state(0);
</script>

<QuestionDisplay bind:visible={$sharedState.question.open} />

{#if $board}
	<h1 class="mb-4 text-center text-2xl">{$board.name}</h1>
	<div class="flex">
		{#each $board.categories as c, i}
			{@render category(c, i, $board)}
		{/each}
	</div>
{:else}
	<p>Loading...</p>
{/if}

{#snippet category(category: Category, i: number, board: Board)}
	<!-- fun clsx stuff -->
	<div
		class={[
			'grow divide-y border border-gray-300 text-center',
			{ 'rounded-l-lg': i === 0 },
			{ 'rounded-r-lg': i === board.categories.length - 1 }
		]}
	>
		<p class="py-6 text-xl">{category.name}</p>
		{#each category.questions as q, j}
			{@render question(q, j, i)}
		{/each}
	</div>
{/snippet}

{#snippet question(question: Question, j: number, i: number)}
	{#if question}
		<button class="h-25 block w-full p-6 text-2xl" onclick={() => openQuestion(i, j)}>
			{j + 1}
		</button>
	{:else}
		<div class="h-25 w-full"></div>
	{/if}
{/snippet}
