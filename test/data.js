import { expect } from 'chai';
import {
    getHighestScores,
} from '../src/js/util/data.js';

/* --------------------------------------------------------- LEVEL ZERO */

describe('data', function() {
	it('get highest scores', done => {
		getHighestScores().then(scores => {
			expect(scores).to.be.a('array');
			done();
		}).catch(err => {
			done(err);
		});
	});
});