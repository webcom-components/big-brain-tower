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

xdescribe("calculString", function() {
    it ("checks it is a string", function() {
        var caS = calculString(0);
        expect(caS).to.contain('+');


    });
});

xdescribe("getCalcul", function() {
	it("should return correct result", function() {
		var gc = getCalcul(0);
		expect(gc.calculString).to.be.defined;
	});
});

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
