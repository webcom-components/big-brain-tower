import '../assets/styles/index.css';

import LoginState from './states/login';
import MenuState from './states/menu';
import GameState from './states/game';
import ScoresState from './states/score';

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game');

game.state.add('Login', LoginState);
game.state.add('Menu', MenuState);
game.state.add('Game', GameState);
game.state.add('Score', ScoresState);
game.state.add('Game Over', GameoverState);

game.state.start('Login');