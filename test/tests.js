import { expect } from 'chai';
import {
	getCalcul,
	calculString,
	resultatCalcul,
	verifyCalcul,
	propReponses
} from '../src/js/states/game/calculLevels';

describe('test example', () => {
	it('should be ok', () => {
	  expect(true).to.be.eql(true);
	});
});

xdescribe("getCalcul", function() {
	it("should return correct result", function() {
		var gc = getCalcul();
		expect(gc.calculString).to.be.defined;
	});
});

/*xdescribe("verifyCalcul", function() {
	it("The 'toBeTruthy' matcher is for boolean casting testing", function() => {
		vc = verifyCalcul();
		expect(vc).to.be.true;
	});
});*/

xdescribe("resultatCalcul", function() {
	it("checks the result is the same as getCalcul", function() {
		var cs = calculString();
		var rc = resultatCalcul(cs);
		expect(eval(cs)).to.equal(rc);
	});
});

xdescribe("propReponses", function() {
	it("should contain resultatCalcul", function() {
		var pr = propReponses();
		var rc = resultatCalcul();

		expect(pr.propReponses).to.contain(rc.resultatCalcul);
	});
});
