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

		this.overlay = $(`<div class="overlay content-center">
			<div style="color:#FFF; width:50%">
			
			<h1>Ton score : </h1>
			
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