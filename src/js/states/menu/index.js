import {
	getBestScores
} from '../../util/data';

import {
	escapeHtml
} from '../../util/other'

require("../../../assets/images/logo.png");
require("../../../assets/images/cloud1.png");
require("../../../assets/images/cloud2.png");
require("../../../assets/styles/index.css");

export default class {

	preload() {
		this.game.load.image('tower', 'assets/images/tower3.png');
		this.game.load.image('logo', 'assets/images/logo.png');
		this.game.load.image('towerFilter', 'assets/images/towerFilter1.png');
		this.game.load.image('onelife', 'assets/images/onelife.png');
		this.game.load.image('nolife', 'assets/images/nolife.png');
		this.game.load.image('cloud1', 'assets/images/cloud1.png');
		this.game.load.image('cloud2', 'assets/images/cloud2.png');
		this.game.load.image('arrow', 'assets/images/arrow1.png');
	}

	constructor(game) {
		
	}

	create() {
		this.background;
		this.gameplay;
		this.gui;
		this.cloud;
		this.timerClouds = 0;
		this.game.time.events.duration;
		this.cloudSwitch = true;

		//  Background ----------------
		this.background = this.game.add.physicsGroup();

		////>sky
		this.background.stage.backgroundColor = "#4ab4e6";
		this.background.stage.position = 'absolute';

		////>clouds
		this.cloud = this.background.game.add.physicsGroup();
		for (var i= 0; i<5; i++){
			var y =  this.game.rnd.between(0,800);
			var x =  this.game.rnd.between(0,600);
			var cloud1 = this.cloud.create(x, y, i%2 === 0 ? 'cloud1' :'cloud2');
			cloud1.body.velocity.x = this.game.rnd.between(2, 10);
		}
		////>logo
		this.game.add.sprite(680, 0, 'logo');

		const game = this.game;

		this.overlay = $(`
		<div class="overlay content-center">
			<div style="margin-bottom: 1em;width:50%" class="scoreContent">
				<table id="scoreTable" class="scores">
				</table>
			</div>
			<form class="menu">
				<input type="submit" value="play" style="display:block; width: 100%; padding: 10px 3em"/>
			</form>
		</div>`)
		.on('click', 'input[type=submit]', function(e) {
			e.preventDefault();
			game.state.start('Game')
		});

		this.overlay.appendTo(document.body);

		this.initBestScores();
	}

	initBestScores() {
		getBestScores().then(scores => {
			if (scores.length) {
				$('<h1>Best players</h1>').prependTo('.scoreContent');
				const table = document.getElementById('scoreTable');
				const scoreRows = scores.map(p => $(`
					<tr>
						<td>${escapeHtml(p.name)}</td>
						<td>${p.val}</td>
					</tr>
				`));
				scoreRows.forEach(r => r.appendTo(table));
			}
		});
	}

	update() {

	}

	shutdown() {
		this.overlay.remove();
	}
}