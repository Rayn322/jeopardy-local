export const state = $state({
	buzzing: [] as boolean[],
	count: 0
});

const BUZZERS = [0, 1, 2, 3];

window.addEventListener('gamepadconnected', (event) => {
	const i = event.gamepad.index;
	state.buzzing[i] = false;

	updateState();
});

window.addEventListener('gamepaddisconnected', (event) => {
	const i = event.gamepad.index;
	state.buzzing[i] = false;

	updateState();
});

function updateState() {
	state.count = performance.now();
	const gamepads = navigator.getGamepads();

	for (const pad of gamepads) {
		if (!pad) continue;

		let shapePressed = false;

		for (const j of BUZZERS) {
			if (pad.buttons.at(j)?.pressed) {
				shapePressed = true;
			}
		}

		state.buzzing[pad.index] = shapePressed;
	}

	requestAnimationFrame(updateState);
}

export function startLoop() {
	requestAnimationFrame(updateState);
}
