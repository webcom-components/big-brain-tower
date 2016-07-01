export default class {
	constructor(game) {
		
	}

	create() {
		const game = this.game;

		this.overlay = $(`<div class="overlay content-center">
			<div style="color:#FFF; width:50%">
				<h1>Meilleurs joueurs</h1>
				<table style="width:100%">
					<tr>
						<td>Joueur 1</td>
						<td>100</td>
					</tr>
					<tr>
						<td>Joueur 2</td>
						<td>50</td>
					</tr>
					<tr>
						<td>Joueur 3</td>
						<td>10</td>
					</tr>
				</table>
			</div>
		</div>`);

		this.overlay.appendTo(document.body);

		this.game.input.keyboard.onDownCallback = function() {
			this.game.state.start("Menu");
		};
/*
		$('body').keypress(function() {
		}, this);
		*/
	}

	update() {

	}

	shutdown() {
		this.overlay.remove();
	}
}