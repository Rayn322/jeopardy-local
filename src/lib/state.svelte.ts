import { persisted } from 'svelte-persisted-store';
import { safeParse } from 'valibot';
import { BoardSchema, type Board } from './types';

export const controllerState = $state({
	buzzing: [] as boolean[],
	count: 0
});

export const gameState = $state({
	// board: undefined as Board | undefined
});

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
