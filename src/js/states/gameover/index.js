import {
	escapeForWebcom,
	isEmail
} from '../../util/other';

import {
	getBestScore,
	saveScore
} from '../../util/data';

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
				<form class="login">
					<h1>game over</h1>
					<p style="padding-bottom: 1em;">your score is ${window.score}</p>
				</form>
			</div>
		</div>`);

		this.overlay.appendTo(document.body);
	   
		this.saveBestScore(window.score);
	}

	displayLoginForm() {
		return new Promise(resolve => {
			 const form = $(`
			 	<div id="saveBlock" style="display:flex; width: 100%">
					<input id="username" type="text" placeholder="your email" style="flex:1; width: 100%" />
					<input id="loginBtn" type="submit" value="Save your score" disabled style="margin-left:1em" />
				</div>
			`).on('keyup', 'input[type=text]', function(e) {
				const loginBtn = document.getElementById('loginBtn');
				loginBtn.disabled = !(isEmail($(this).val()));
			}).on('click', 'input[type=submit]', e => {
				e.preventDefault();
				const username = $('#username').val();
				if (username) {
					localStorage.setItem('login', username);
					return resolve(username);
				}
			});

			form.appendTo('.overlay .login');
			const cachedLogin = localStorage.getItem('login');
			if (cachedLogin) {
				$('#username').val(cachedLogin);
				$('#loginBtn').attr('disabled', !isEmail(cachedLogin));
			}
		});
	}

	saveBestScore(score) {
		let login;
		this.displayLoginForm()
			.then(l => {
				login = l;
				return getBestScore(login);
			})
			.then(bestScore => {
				if (score > bestScore) {
					return saveScore(login, score)
						.then(() => {
							this.game.state.start('Menu')
						});
				}
				this.game.state.start('Menu');
			});
	}

	update() {

	}

	shutdown() {
		this.overlay.remove();
	}
}