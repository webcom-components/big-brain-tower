import { expect } from 'chai';
import {
	getCalcul,
	calculString,
	resultatCalcul,
	verifyCalcul,
	propReponses
} from '../src/js/states/game/calculLevels';

describe('calculString', function() {
    it ('checks it is a + operator', function() {
        var cas = calculString(0);
        expect(cas).to.contain('+');
    });
});

describe('getCalcul', function() {
	it('should return correct result', function() {
		var gc = getCalcul(0);
		expect(gc.calculString).to.be.defined;
	});
    it('should return an object with 4 properties', function() {
        var gc = getCalcul(0);
        expect(gc).to.have.property('calculString').that.is.a('string');
        expect(gc).to.have.property('responseNumber').that.is.a('number');
        expect(gc).to.have.property('responseArray').that.is.a('array');
        expect(gc).to.have.property('timer').that.is.a('string');

    });
});

describe('resultatCalcul', function() {
	it('checks the result is the same as getCalcul', function() {
		var cs = calculString();
		var rc = resultatCalcul(cs);
		expect(eval(cs)).to.be.eql(rc);
	});
});

describe('propReponses', function() {
	it('should contain resultatCalcul', function() {
        var cs = calculString(0);
        var reponse = eval(calculString(0));
		var pr = propReponses(reponse);
        
		expect(pr).to.contain(eval(reponse));
	});
});

describe('verifyCalcul', function() {
    it('checks it is a boolean', function() {
        var vf = verifyCalcul();
        expect(vf).to.be.a ('boolean');
    });
});
