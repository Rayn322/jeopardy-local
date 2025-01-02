import { persisted } from 'svelte-persisted-store';
import { safeParse } from 'valibot';
import { BoardSchema, type Board } from './types';

export const controllerState = $state({
	buzzing: [] as boolean[],
	count: 0
});

export const sharedState = persisted('sharedState', {
	question: {
		open: false,
		showAnswer: false,
		categoryIndex: 0,
		questionIndex: 0,
		points: 0
	}
});

export function openQuestion(categoryIndex: number, questionIndex: number) {
	sharedState.update((state) => {
		state.question.open = true;
		state.question.showAnswer = false;
		state.question.categoryIndex = categoryIndex;
		state.question.questionIndex = questionIndex;
		state.question.points = questionIndex + 1;

		return state;
	});
}

export function closeQuestion() {
	sharedState.update((state) => {
		state.question.open = false;
		return state;
	});
}

export const board = persisted<Board | undefined>('board', undefined);

export function setBoard(input: unknown) {
	const { success, output, issues } = safeParse(BoardSchema, input);

	if (success) {
		board.set(output);
		return true;
	} else {
		console.error('setBoard failed', issues);
		return false;
	}
}
