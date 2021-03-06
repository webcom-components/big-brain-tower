import { expect } from 'chai';
import {
    getCalcul,
    calculString,
    resultatCalcul,
    verifyCalcul,
    propReponses
} from '../src/js/states/game/calculLevels';

/* --------------------------------------------------------- LEVEL ZERO */

describe('level 0', function() {
    describe('calculString', function () {
        it('level 0 : checks it is a + operator', function () {
            var cas = calculString(0);
            expect(cas).to.contain('+');
        });
    });

    describe('getCalcul', function () {
        it('level 0 : should return correct result', function () {
            var gc = getCalcul(0);
            expect(gc.calculString).to.be.defined;
        });
        it('level 0 : should return an object with 4 properties', function () {
            var gc = getCalcul(0);
            expect(gc).to.have.property('calculString').that.is.a('string');
            expect(gc).to.have.property('responseNumber').that.is.a('number');
            expect(gc).to.have.property('responseArray').that.is.a('array');
            expect(gc).to.have.property('timer').that.is.a('number');

        });
    });

    describe('resultatCalcul', function () {
        it('level 0 : checks the result is the same as getCalcul', function () {
            var cs = calculString();
            var rc = resultatCalcul(cs);
            expect(eval(cs)).to.be.eql(rc);
        });
    });

    describe('propReponses', function () {
        it('level 0 : should contain resultatCalcul', function () {
            var cs = calculString(0);
            var reponse = eval(calculString(0));
            var pr = propReponses(reponse);

            expect(pr).to.contain(eval(reponse));
        });
    });

    describe('verifyCalcul', function () {
        it('level 0 : checks it is a boolean', function () {
            var vf = verifyCalcul();
            expect(vf).to.be.a('boolean');
        });
    });
});

/* --------------------------------------------------------- LEVEL 1 */

describe('level 1', function() {
    describe('calculString', function () {
        it('level 1 : checks it is string', function () {
            var cas = calculString(1);
            expect(cas).to.be.a('string');
        });
        it('level 1 : checks it has + or -', function () {
            var cas = calculString(1);
            expect(cas).match(/^[0-9]\+|\-[0-9]$/);
        });
    });

    describe('getCalcul', function () {
        it('level 1 : should return correct result', function () {
            var gc = getCalcul(1);
            expect(gc.calculString).to.be.defined;
        });
        it('level 1 : should return an object with 4 properties', function () {
            var gc = getCalcul(1);
            expect(gc).to.have.property('calculString').that.is.a('string');
            expect(gc).to.have.property('responseNumber').that.is.a('number');
            expect(gc).to.have.property('responseArray').that.is.a('array');
            expect(gc).to.have.property('timer').that.is.a('number');

        });
    });

    describe('resultatCalcul', function () {
        it('level 1 : checks the result is the same as getCalcul', function () {
            var cs = calculString();
            var rc = resultatCalcul(cs);
            expect(eval(cs)).to.be.eql(rc);
        });
    });

    describe('propReponses', function () {
        it('level 1 : should contain resultatCalcul', function () {
            var cs = calculString(1);
            var reponse = eval(calculString(1));
            var pr = propReponses(reponse);

            expect(pr).to.contain(eval(reponse));
        });
    });

    describe('verifyCalcul', function () {
        it('level 1 : checks it is a boolean', function () {
            var vf = verifyCalcul();
            expect(vf).to.be.a('boolean');
        });
    });
});

/* --------------------------------------------------------- LEVEL 2 */

describe('level 2', function() {
    describe('calculString', function () {
        it('level 2 : checks it is string', function () {
            var cas = calculString(2);
            expect(cas).to.be.a('string');
        });
        it('level 2 : checks it has + or - or *', function () {
            var cas = calculString(2);
            expect(cas).match(/^[0-9]\+|\-|\*[0-9]$/);
        });
    });

    describe('getCalcul', function () {
        it('level 2 : should return correct result', function () {
            var gc = getCalcul(2);
            expect(gc.calculString).to.be.defined;
        });
        it('level 2 : should return an object with 4 properties', function () {
            var gc = getCalcul(2);
            expect(gc).to.have.property('calculString').that.is.a('string');
            expect(gc).to.have.property('responseNumber').that.is.a('number');
            expect(gc).to.have.property('responseArray').that.is.a('array');
            expect(gc).to.have.property('timer').that.is.a('number');

        });
    });

    describe('resultatCalcul', function () {
        it('level 2 : checks the result is the same as getCalcul', function () {
            var cs = calculString();
            var rc = resultatCalcul(cs);
            expect(eval(cs)).to.be.eql(rc);
        });
    });

    describe('propReponses', function () {
        it('level 2 : should contain resultatCalcul', function () {
            var cs = calculString(2);
            var reponse = eval(calculString(2));
            var pr = propReponses(reponse);

            expect(pr).to.contain(eval(reponse));
        });
    });

    describe('verifyCalcul', function () {
        it('level 2 : checks it is a boolean', function () {
            var vf = verifyCalcul();
            expect(vf).to.be.a('boolean');
        });
    });
});

/* --------------------------------------------------------- LEVEL 3 to 9 */

describe('level 4 to 9', function() {
    describe('calculString', function() {
        it ('level 5 : checks it is string', function() {
            var cas = calculString(5);
            expect(cas).to.be.a('string');
        });
        it ('level 5 : checks it has + or - or * or /', function() {
            var cas = calculString(5);
            expect(cas).match(/^[1-9]|1[0-9]\+|\-|\*\/[1-9]|1[0-9]$/);
        });
    });

    describe('getCalcul', function() {
        it('level 5 : should return correct result', function() {
            var gc = getCalcul(5);
            expect(gc.calculString).to.be.defined;
        });
        it('level 5 : should return an object with 4 properties', function() {
            var gc = getCalcul(5);
            expect(gc).to.have.property('calculString').that.is.a('string');
            expect(gc).to.have.property('responseNumber').that.is.a('number');
            expect(gc).to.have.property('responseArray').that.is.a('array');
            expect(gc).to.have.property('timer').that.is.a('number');

        });
    });

    describe('resultatCalcul', function() {
        it('level 5 : checks the result is the same as getCalcul', function() {
            var cs = calculString();
            var rc = resultatCalcul(cs);
            expect(eval(cs)).to.be.eql(rc);
        });
    });
    describe('propReponses', function() {
        it('level 5 : should contain resultatCalcul', function() {
            var cs = calculString(5);
            var reponse = eval(calculString(5));
            var pr = propReponses(reponse);

            expect(pr).to.contain(eval(reponse));
        });
    });

    describe('verifyCalcul', function() {
        it('level 5 : checks it is a boolean', function() {
            var vf = verifyCalcul();
            expect(vf).to.be.a ('boolean');
        });
    });
});

/* --------------------------------------------------------- LEVEL >=10 */


describe('level >= 10', function() {
    describe('calculString', function() {
        it ('level 27 : checks it is string', function() {
            var cas = calculString(27);
            expect(cas).to.be.a('string');
        });
        it ('level 27 : checks it has + or - or * or /', function() {
            var cas = calculString(27);
            expect(cas).match(/^[1-9]|1[0-9]{3,}\+|\-|\*\/[1-9]|1[0-9]{3,}$/); //(/^[1-9]|1[0-9]{3,}\+|\-|\*\/[1-9]|1[0-9]{3,}$/)
        });
    });

    describe('getCalcul', function() {
        it('level 27 : should return correct result', function() {
            var gc = getCalcul(27);
            expect(gc.calculString).to.be.defined;
        });
        it('level 27 : should return an object with 4 properties', function() {
            var gc = getCalcul(27);
            expect(gc).to.have.property('calculString').that.is.a('string');
            expect(gc).to.have.property('responseNumber').that.is.a('number');
            expect(gc).to.have.property('responseArray').that.is.a('array');
            expect(gc).to.have.property('timer').that.is.a('number');

        });
    });

    describe('resultatCalcul', function() {
        it('level 27 : checks the result is the same as getCalcul', function() {
            var cs = calculString();
            var rc = resultatCalcul(cs);
            expect(eval(cs)).to.be.eql(rc);
        });
    });

    describe('propReponses', function() {
        it('level 27 : should contain resultatCalcul', function() {
            var cs = calculString(27);
            var reponse = eval(calculString(27));
            var pr = propReponses(reponse);

            expect(pr).to.contain(eval(reponse));
        });
    });

    describe('verifyCalcul', function() {
        it('level 27 : checks it is a boolean', function() {
            var vf = verifyCalcul();
            expect(vf).to.be.a ('boolean');
        });
    });
});
