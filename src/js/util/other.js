const htmlMap = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': '&quot;',
	"'": '&#39;',
	"/": '&#x2F;'
};

const webcomMap = {
	'/': '%SL%',
	'.': '%D%'
}

export const escapeHtml = string => String(string).replace(/[&<>"'\/]/g, s => htmlMap[s]);
export const escapeForWebcom = string => String(string).replace(/[\/\.]/g, s => webcomMap[s]);
export const unescapeForWebcom = string => String(string).replace(/(%SL%)|(%D%)/g, s => 
	Object.keys(webcomMap).reduce((a, k) => ({ ...a, [webcomMap[k]]: k}), {})[s]);
export const isEmail = string => /.+@.+\..{2,10}/.test(string);