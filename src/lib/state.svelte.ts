import { safeParse } from 'valibot';
import { BoardSchema } from './types';

export const controllerState = $state({
	buzzing: [] as boolean[],
	count: 0
});

export const gameState = $state({
	board: {}
});

export function setBoard(input: unknown) {
	const { success, output } = safeParse(BoardSchema, input);

	if (success) {
		gameState.board = output;
		return true;
	} else {
		return false;
	}
}
