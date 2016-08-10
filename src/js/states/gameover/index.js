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
				<h1>Game Over</h1>
                <p style="padding-bottom: 1em;">Ton score : ${window.score}</p>
                <p style="padding-bottom: 1em;">Ton meilleur score :
                    <span id="bestScore">0</span>
                </p>

				<table style="width:100%">
					<tr>
						<td>Press any key to try again</td>
					</tr>
				</table>
			</div>
		</div>`)
            .on('click', 'input[type=submit]', function(e) {
            e.preventDefault();
            game.state.start('Game')
        });

        this.overlay.appendTo(document.body);
       
        this.game.input.keyboard.addCallbacks(this, e => {
            this.game.input.keyboard.destroy();
            this.game.input.keyboard.start();
            this.game.state.start("Game");
        });

        const login = localStorage.getItem('login');
        this.displayBestScore(login);
        this.saveBestScore(login, window.score);
    }

    displayBestScore(login) {
        const ref = new Webcom(`https://io.datasync.orange.com/base/bigbraintower/scores/${login}`);
        ref.on('value', snap => {
            document.getElementById('bestScore').innerHTML = snap.val().score || 0;
        }); 
    }

    getBestScore(login) {
        return new Promise(resolve => {
            const ref = new Webcom(`https://io.datasync.orange.com/base/bigbraintower/scores/${login}`);
            ref.once('value', snap => {
                resolve(snap.val().score || 0);
            }); 
        })
    }

    saveBestScore(login, score) {
        return this.getBestScore(login).then(bestScore => {
            return new Promise(resolve => {
                bestScore = Number(bestScore);
                if (score > bestScore) {
                    const ref = new Webcom(`https://io.datasync.orange.com/base/bigbraintower/scores/${login}`);
                    ref.update({
                        score
                    }, () => resolve);
                }
                resolve();
            });            
        })
    }

    update() {

    }

    shutdown() {
        this.overlay.remove();
    }
}