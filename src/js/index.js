import '../assets/styles/index.css';

import MenuState from './states/menu';
import GameState from './states/game';
import GameoverState from './states/gameover';

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game');

game.state.add('Menu', MenuState);
game.state.add('Game', GameState);
game.state.add('Game Over', GameoverState);

game.state.start('Menu');