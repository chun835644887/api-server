const connect = require('../utils/mysql').connect;
const query = require('../utils/mysql').query;

const login = async function(ctx){
	const resultPromise =  query("select * from user where id=1");
	resultPromise.then();
	var result = await resultPromise;
	ctx.body = JSON.stringify(result);
}
const loginPost = function(ctx){
	console.log('2222');
	ctx.body = 'this is post login';
}
module.exports = {
	login,
	loginPost
};