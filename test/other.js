import { expect } from 'chai';
import {
    escapeHtml,
    escapeForWebcom,
    unescapeForWebcom,
    isEmail
} from '../src/js/util/other';

describe('utils other', function() {
	it('escapeHtml', () => {
		expect(escapeHtml('&<>"\'/')).to.be.eql('&amp;&lt;&gt;&quot;&#39;&#x2F;');
	});
	it('escapeForWebcom', () => {
		expect(escapeForWebcom('test/test')).to.be.eql('test%SL%test');
		expect(escapeForWebcom('test@test.com')).to.be.eql('test@test%D%com');
	});
	it('unescapeForWebcom', () => {
		expect(unescapeForWebcom('test%SL%test')).to.be.eql('test/test');
		expect(unescapeForWebcom('test@test%D%com')).to.be.eql('test@test.com');
	});
	it('isEmail', () => {
		expect(isEmail('a@a.com')).to.be.true;
		expect(isEmail('aa.com')).to.be.false;
		expect(isEmail('aacom')).to.be.false;
		expect(isEmail('a@a')).to.be.false;
		expect(isEmail('a@a.c')).to.be.false;
	});
});