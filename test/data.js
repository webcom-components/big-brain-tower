import { expect } from 'chai';
import {
    getBestScores,
} from '../src/js/util/data.js';


describe('data', function() {
	it('get best scores', done => {
		getBestScores().then(scores => {
			expect(scores).to.be.a('array');
			done();
		}).catch(err => {
			done(err);
		});
	});
});