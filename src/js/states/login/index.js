export default class {
	constructor(game) {
		
	}

	create() {
		const game = this.game;
		this.overlay = $(`<div class="overlay content-center">
			<form class="login">
				<div>
					<input id="username" type="text" placeholder="your name" />
				</div>
				<div style="margin-top:1em">
					<input type="submit" value="login" style="display:block; width: 100%"/>
				</div>
			</form>
		</div>`)
		.on('click', 'input[type=submit]', e => {
			e.preventDefault();
			game.state.start('Menu');
		});

		this.overlay.appendTo(document.body);
	}

	update() {

	}

	shutdown() {
		this.overlay.remove();
	}
}