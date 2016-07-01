import { getCalcul } from './getCalcul';

export default class {
	constructor() {
		
	}

	displayPause() {
		this.overlay = $(`<div class="overlay content-center">
			<h1 style="color:#FFF">Pause</h1>
		</div>`);

		this.overlay.appendTo(document.body);
	}

	hidePause() {
		if (this.overlay) {
			this.overlay.remove();
		}
	}

	initPause() {
		this.game.input.keyboard.onDownCallback = e => {
			if (!this.game.paused) {
				if (e.keyCode === Phaser.Keyboard.ESC) {
		 			this.game.paused = true;
		 			if (this.game.paused) {
			 			this.displayPause();
		 			}
				}
			}
			else {
	 			this.game.paused = false;
	 			this.hidePause();
			}
		};
	}

	create() {
		this.initPause();
	}

	update() {

	}

	shutdown() {
		this.hidePause();
	}
}