var context = require.context('./test', true, /.+\.js$/)

console.log(context);

context.keys().forEach(context)

module.exports = context