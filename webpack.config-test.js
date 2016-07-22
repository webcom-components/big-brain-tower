var config = require('./webpack.config.js');
var path = require('path');

config.devServer = {
	host: 'localhost',
	port: '8081'
};

var index = path.resolve(__dirname, './testsInBrowser.js');

config.entry = {
	test: ['mocha!' + index]
};

config.output.publicPath = 'http://localhost:8081/'

module.exports = config;