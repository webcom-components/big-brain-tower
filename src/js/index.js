require("../assets/images/tower3.png");
require("../assets/images/logo.png");
require("../assets/images/towerFilter1.png");
require("../assets/images/onelife.png");
require("../assets/images/nolife.png");
require("../assets/images/cloud1.png");
require("../assets/images/cloud2.png");
require("../assets/images/arrow1.png");
require("../assets/styles/index.css");


var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

// ------------------------- PRELOAD --------------------------- //

function preload() {

    game.load.image('tower', 'assets/images/tower3.png');
    game.load.image('logo', 'assets/images/logo.png');
    game.load.image('towerFilter', 'assets/images/towerFilter1.png');
    game.load.image('onelife', 'assets/images/onelife.png');
    game.load.image('nolife', 'assets/images/nolife.png');
    game.load.image('cloud1', 'assets/images/cloud1.png');
    game.load.image('cloud2', 'assets/images/cloud2.png');
    game.load.image('arrow', 'assets/images/arrow1.png');
}

////>variables

var lives;
var background;
var gameplay;
var gui;
var score = 0;
var scoreText;
var scoreString = '';
var cloud;
var timerClouds = 0;
var timer = 0;
var chrono;
var filter;
var level;
var levelString = '';
var levelText;
var questionBloc;
var answerBloc;
var cloudSwitch = true;


// ------------------------------------------------------------- //

// ------------------------- CREATE --------------------------- //

function create() {

    game.time.events.duration;

    //  Background ----------------

    background = game.add.physicsGroup();

    ////>sky
    background.stage.backgroundColor = "#4ab4e6";

    ////>clouds
    cloud = background.game.add.physicsGroup();

    for (var i= 0; i<5; i++){
        var y =  game.rnd.between(0,800);
        var x =  game.rnd.between(0,600);
        var cloud1 = cloud.create(x, y, i%2 === 0 ? 'cloud1' :'cloud2');
        cloud1.body.velocity.x = game.rnd.between(2, 10);
    }
    // --------------------

    //  Gameplay ----------------

    gameplay = game.add.physicsGroup();

    ////>tower
    var tower= gameplay.game.add.sprite(0, 0, 'tower');
    tower.tint = 0xFF99CC;

    ////>logo
    gameplay.game.add.sprite(680, 0, 'logo');

    ////>question


    // --------------------

    //  Gui ----------------

    gui = game.add.physicsGroup();

    ////>lives
    lives = game.add.group();
    gui.game.add.sprite(500, 4, 'nolife');
    gui.game.add.sprite(450, 4, 'onelife');
    var life= gui.game.add.sprite(400, 4, 'onelife');

    ////>score
    scoreString = 'score : ';
    scoreText = gui.game.add.text(130, 4, scoreString + score, { font: '26px Helvetica Neue', fill: '#fff' });

    ////>filter tour
    gui.game.add.sprite(0, 438, 'towerFilter');

    ////>arrow
    level = game.add.physicsGroup();
    level.game.add.sprite(100, 424, 'arrow');
    levelString = 'floor2';
    levelText = gui.game.add.text(145, 435, levelString, { font: '18px Helvetica Neue', fill: '#fff' });



// --------------------

}

// ------------------------------------------------------------- //

// ------------------------- UPDATE --------------------------- //

function update() {
    createCloud();
    cloud.forEach(checkPos, this);
}

function createCloud() {
    if (game.time.time > timerClouds){
        var y =  game.rnd.between(-50,600);
        var c = cloud.create(-100, y, cloudSwitch ? 'cloud1' :'cloud2');
        c.body.velocity.x = game.rnd.between(2, 10);
        timerClouds = game.time.time + 20000;
        cloudSwitch = !cloudSwitch;

    }
}

// checkPos
function checkPos (cloud) {
    if (cloud.y > 900) {
        cloud.kill();
    }
}

// ------------------------------------------------------------- //

// ------------------------- RENDER --------------------------- //

function render () {
    chrono = gui.game.time.events.duration;
}