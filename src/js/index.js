// To be packaged, all ressources like images, sounds or styles must be "required" like below
require('../assets/styles/index.css'); // require stylesheet
require('../assets/shaders/bacteria.frag'); // require shader for water effect

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
var filter;

function preload() {
    game.load.shader('bacteria', 'assets/shaders/bacteria.frag');
}

function create() {
    filter = new Phaser.Filter(game, null, game.cache.getShader('bacteria'));
    filter.addToWorld(0, 0, 800, 600);

	// example of user interface with HTML and CSS
	const overlay = $('<div class="overlay content-center"></div>');
	const btn = $('<button class="btn">Start</button>');
	btn.appendTo(overlay);
	overlay.appendTo(document.body);
}

function update() {
    filter.update();
}