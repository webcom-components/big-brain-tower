export default class {
	constructor(game) {
		
	}

	create() {
		const game = this.game;

		this.overlay = $(`<div class="overlay content-center">
			<form class="menu">
				<h2>Main Menu</h2>
				<input type="submit" value="play" style="display:block; width: 100%"/>
			</form>
		</div>`)
		.on('click', 'input[type=submit]', function(e) {
			e.preventDefault();
			game.state.start('Game')
		});

		this.overlay.appendTo(document.body);
	}

	update() {

	}

	shutdown() {
		this.overlay.remove();
	}
}