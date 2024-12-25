import { controllerState } from './state.svelte';

let updating = false;

const BUZZERS = [0, 1, 2, 3];

window.addEventListener('gamepadconnected', (event) => {
	const i = event.gamepad.index;
	controllerState.buzzing[i] = false;

	if (!updating) {
		updating = true;
		updateState();
	}
});

window.addEventListener('gamepaddisconnected', (event) => {
	const i = event.gamepad.index;
	controllerState.buzzing[i] = false;

	if (!updating) {
		updating = true;
		updateState();
	}
});

function updateState() {
	controllerState.count = performance.now();
	const gamepads = navigator.getGamepads();

	for (const pad of gamepads) {
		if (!pad) continue;

		let shapePressed = false;

		for (const j of BUZZERS) {
			if (pad.buttons.at(j)?.pressed) {
				shapePressed = true;
			}
		}

		controllerState.buzzing[pad.index] = shapePressed;
	}

	requestAnimationFrame(updateState);
}
