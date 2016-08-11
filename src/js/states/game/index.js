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
    getCalcul,
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
        this.ui;
        this.lives;
        this.background;
        this.gameplay;
        this.gui;
        this.score = 0;
        this.scoreText;
        this.scoreString = 'score : ';
        this.cloud;
        this.timerClouds = 0;
        this.timer = 0;
        this.chrono;
        this.filter;
        this.level=0;
        this.levelString = '';
        this.levelText;
        this.levelNumber='';
        this.questionBloc;
        this.answerBloc;
        this.cloudSwitch = true;
        this.timerBloc;
        this.currentCalcul;
        this.checkResponse;
        this.iteration = 0;
        this.iterationString = 'good answers : ';
        this.iterationText;
        this.nbreLife = 3;
        this.question;
        this.questionText='';
        this.floorSprite;

        this.bloc1;
        this.bloc2;
        this.bloc3;

        //this.initPause();

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

        this.ui = $(`
			<div id="blocQuizz">
			 <div id="quizz">
			  <div class="wrapper">
					 <div class="questionBloc"></div>
					<div class="timerBloc">
                        <div class="timeElapsed"></div>
                    </div>
			  </div>
			  <div class="answerBloc">
					<div class="bloc1"></div>
					<div class="bloc2"></div>
					<div class="bloc3"></div>
			  </div>
			 </div>
			 </div>			  
		`).appendTo('body');

        /////>timer
        this.timerBloc = document.getElementsByClassName("timerBloc");
        this.timerBloc.tint = 0xFF99CC;

        ////>answer
        this.answerBloc = document.getElementsByClassName("answerBloc");

        // --------------------

        //  Gui ----------------

        this.gui = this.game.add.physicsGroup();

        ////>lives
        this.lives = this.game.add.group();
        this.refreshLives();

        ////>score
        this.scoreText = this.gui.game.add.text(130, 4, this.scoreString + this.score, { font: '26px Helvetica Neue', fill: '#fff' });

        ////>iteration / question
        this.iterationText = this.gui.game.add.text(130, 40, this.iterationString + this.iteration + " / 10", { font: '16px Helvetica Neue', fill: 'grey' });

        ////>filter tour
        this.gui.game.add.sprite(0, 438, 'towerFilter');

        ////>arrow (floor)
        this.floorSprite = this.game.add.physicsGroup();
        this.floorSprite.game.add.sprite(110, 424, 'arrow');

        this.levelString = 'level ';
        this.levelText = this.gui.game.add.text(145, 435, this.levelString, { font: '18px Helvetica Neue', fill: '#fff' });
        this.levelNumber ='';
        this.levelNumber = this.gui.game.add.text(185, 435, this.level, { font: '18px Helvetica Neue', fill: '#fff' });

        this.bloc1 = document.getElementsByClassName("bloc1")[0];
        this.bloc2 = document.getElementsByClassName("bloc2")[0];
        this.bloc3 = document.getElementsByClassName("bloc3")[0];

        this.bloc1.addEventListener("click",  this.clickResponse.bind(this));
        this.bloc2.addEventListener("click",  this.clickResponse.bind(this));
        this.bloc3.addEventListener("click",  this.clickResponse.bind(this));

        this.initNewCalcul();
    }

    getCurrentTime() {
        return new Date().getTime() / 1000;
    }

    initTimerBar() {
        this.startTime = this.getCurrentTime();
        this.timeElapsedBloc = document.getElementsByClassName("timeElapsed")[0];
        clearInterval(this.TimerBarHandler);
        this.TimerBarHandler = setInterval(() => {
            const width = ((this.getCurrentTime() - this.startTime) / this.currentCalcul.timer) * 100;
            if (width >= 100) {
                this.checkAnswer();
            }
            this.timeElapsedBloc.style.width = `${width >= 100 ? 100: width}%`;
        }, 30);
    }

    initNewCalcul() {
        this.currentCalcul = getCalcul(this.level);

        /////>question
        this.questionBloc = document.getElementsByClassName("questionBloc")[0];
        this.questionBloc.innerHTML = this.currentCalcul.calculString;

        ////>blocs
        this.bloc1.innerHTML = this.currentCalcul.responseArray[0];
        var a = this.currentCalcul.responseArray[0];
        if (a % 1 !== 0) {
            this.bloc1.innerHTML = this.currentCalcul.responseArray[0].toFixed(2);
        }

        this.bloc2.innerHTML = this.currentCalcul.responseArray[1];
        var b = this.currentCalcul.responseArray[1];
        if (b % 1 !== 0) {
            this.bloc2.innerHTML = this.currentCalcul.responseArray[1].toFixed(2);
        }

        this.bloc3.innerHTML = this.currentCalcul.responseArray[2];
        var c = this.currentCalcul.responseArray[2];
        if (c % 1 !== 0) {
            this.bloc3.innerHTML = this.currentCalcul.responseArray[2].toFixed(2);
        }

        this.initTimerBar();

    }

    clickResponse(e){
        var r = Number(e.target.innerText);
        this.checkAnswer(r);
    }

    checkAnswer(r){
        if (r === this.currentCalcul.responseNumber || r === this.currentCalcul.responseNumber.toFixed(2) ){
            this.iteration ++;
            this.iterationText.setText(this.iterationString + this.iteration + " / 10");
            this.score = this.score + (22 * (this.level+1));
            this.scoreText.setText(this.scoreString + this.score);
            this.floorUp();
        }
        else {
            this.nbreLife = this.nbreLife  - 1; // this.nbreLife --;
            this.refreshLives();
        }
        this.initNewCalcul();
    }

    floorUp(){
        if(this.iteration === 10){
            this.iteration = 0;
            this.level ++;
            this.levelText.setText(this.levelString);
            this.levelNumber.setText(this.level);
            this.score = this.score + (44 * (this.level+1));
        }
    }

    refreshLives(){
        var life1, life2, life3;

        if(this.nbreLife === 3){
            life1 = this.gui.game.add.sprite(400, 4, 'onelife');
            life2 = this.gui.game.add.sprite(450, 4, 'onelife');
            life3 = this.gui.game.add.sprite(500, 4, 'onelife');
        }
        else if(this.nbreLife === 2){
            life1 = this.gui.game.add.sprite(400, 4, 'nolife');
            life2 = this.gui.game.add.sprite(450, 4, 'onelife');
            life3 = this.gui.game.add.sprite(500, 4, 'onelife');
        }
        else if(this.nbreLife === 1){
            life1 = this.gui.game.add.sprite(400, 4, 'nolife');
            life2 = this.gui.game.add.sprite(450, 4, 'nolife');
            life3 = this.gui.game.add.sprite(500, 4, 'onelife');
        }
        else if(this.nbreLife === 0){
            life1 = this.gui.game.add.sprite(400, 4, 'nolife');
            life2 = this.gui.game.add.sprite(450, 4, 'nolife');
            life3 = this.gui.game.add.sprite(500, 4, 'nolife');

            window.score = this.score;
            this.game.state.start('Game Over');
        }
    }
   
    shutdown() {
        this.ui.remove();
        clearInterval(this.TimerBarHandler);
    }
}