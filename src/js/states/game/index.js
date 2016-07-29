require("../../../assets/images/tower3.png");
require("../../../assets/images/logo.png");
require("../../../assets/images/towerFilter1.png");
require("../../../assets/images/onelife.png");
require("../../../assets/images/nolife.png");
require("../../../assets/images/cloud1.png");
require("../../../assets/images/cloud2.png");
require("../../../assets/images/arrow1.png");
require("../../../assets/styles/index.css");

import {
	getCalcul
} from './calculLevels';

import {
	verifyCalcul
} from './calculLevels';



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

	create() {
		this.lives;
		this.background;
		this.gameplay;
		this.gui;
		this.score = 0;
		this.scoreText;
		this.scoreString = '';
		this.cloud;
		this.timerClouds = 0;
		this.timer = 0;
		this.chrono;
		this.filter;
		this.level=0;
		this.levelString = '';
		this.levelText;
		this.questionBloc;
		this.answerBloc;
		this.cloudSwitch = true;
		this.timerBloc;
		this.currentCalcul;
		this.checkResponse;
		this.iteration = 0;
		this.nbreLife = 3;
		this.floor = 0;
		this.question;
		this.questionText='';

		this.initPause();

		this.game.time.events.duration;

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
		// --------------------

		//  Gameplay ----------------


		this.gameplay = this.game.add.physicsGroup();

		////>tower
		var tower= this.gameplay.game.add.sprite(0, 0, 'tower');
		tower.tint = 0xFF99CC;

		////>logo
		this.gameplay.game.add.sprite(680, 0, 'logo');

		var elements = $(`
			<div id="blocQuizz">
			 <div id="quizz">
			  <div class="wrapper">
					 <div class="questionBloc"></div>
					<div class="timerBloc"></div>
			  </div>
			  <div class="answerBloc">
					<div class="bloc1"></div>
					<div class="bloc2"></div>
					<div class="bloc3"></div>
			  </div>
			 </div>
			 </div>			  
		`).appendTo('body');

		this.initNewCalcul();

		/////>timer
		this.timerBloc = document.getElementsByClassName("timerBloc");
		this.timerBloc.tint = 0xFF99CC;

		////>answer
		this.answerBloc = document.getElementsByClassName("answerBloc");


		//currentCalcul.responseArray[]

		// --------------------

		//  Gui ----------------

		this.gui = this.game.add.physicsGroup();

		////>lives
		this.lives = this.game.add.group();
		this.livesCount();

		////>score
		this.scoreString = 'score : ';
		this.scoreText = this.gui.game.add.text(130, 4, this.scoreString + this.score, { font: '26px Helvetica Neue', fill: '#fff' });

		////>iteration / question
		this.question ='iteration: ' + this.iteration;
		this.questionText = this.gui.game.add.text(130, 40, this.question, { font: '16px Helvetica Neue', fill: 'grey' });

		////>filter tour
		this.gui.game.add.sprite(0, 438, 'towerFilter');

		////>arrow (floor)
		this.level = this.game.add.physicsGroup();
		this.level.game.add.sprite(110, 424, 'arrow');
		this.levelString = 'floor '+ this.iteration;
		this.levelText = this.gui.game.add.text(145, 435, this.levelString, { font: '18px Helvetica Neue', fill: '#fff' });
	}

	initNewCalcul() {
		this.currentCalcul = getCalcul(this.level);
		this.checkResponse = verifyCalcul();

		/////>question
		this.questionBloc = document.getElementsByClassName("questionBloc")[0];
		this.questionBloc.innerHTML = this.currentCalcul.calculString;

		////>blocs
		var bloc1 = document.getElementsByClassName("bloc1")[0];
		var bloc2 = document.getElementsByClassName("bloc2")[0];
		var bloc3 = document.getElementsByClassName("bloc3")[0];

		bloc1.innerHTML = this.currentCalcul.responseArray[0];
		bloc2.innerHTML = this.currentCalcul.responseArray[1];
		bloc3.innerHTML = this.currentCalcul.responseArray[2];
	}

	checkAnswer(){
		bloc1.addEventListener("click",  this.checkResponse);
		bloc2.addEventListener("click",  this.checkResponse);
		bloc3.addEventListener("click",  this.checkResponse);

		if (this.checkResponse === true){
			this.iteration ++;
			this.score + (22 * level);
		}
		else {
			this.nbreLife --;
		}
		initNewCalcul();
	}

	floorUp(){
		if(this.iteration = 10){
			this.iteration = 0;
			this.floor ++;
			this.score + (44 * level);
		}
		return this.iteration;
	}

	livesCount(){
		var life1, life2, life3;

		if(this.nbreLife = 3){
			life1 = this.gui.game.add.sprite(400, 4, 'onelife');
			life2 = this.gui.game.add.sprite(450, 4, 'onelife');
			life3 = this.gui.game.add.sprite(500, 4, 'onelife');
		}
		else if(this.nbreLife = 2){
			life1 = this.gui.game.add.sprite(400, 4, 'nolife');
			life2 = this.gui.game.add.sprite(450, 4, 'onelife');
			life3 = this.gui.game.add.sprite(500, 4, 'onelife');
		}
		else if(this.nbreLife = 1){
			life1 = this.gui.game.add.sprite(400, 4, 'nolife');
			life2 = this.gui.game.add.sprite(450, 4, 'nolife');
			life3 = this.gui.game.add.sprite(500, 4, 'onelife');
		}
		else if(this.nbreLife = 0){
			life1 = this.gui.game.add.sprite(400, 4, 'nolife');
			life2 = this.gui.game.add.sprite(450, 4, 'nolife');
			life3 = this.gui.game.add.sprite(500, 4, 'nolife');
			game.state.start('Score');
		}
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
}