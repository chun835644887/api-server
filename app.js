var Koa = require('koa');
var KoaRouter = require('koa-router')();//需要通过npm来添加此依赖
var app = new Koa();
const logger = require('./utils/log4js').getLogger('default');
var router = require('./router/index').routes();

// app.use(function *(){
// 	this.body = 'hello world!';
// });
KoaRouter.use('/api', router);
app.use(KoaRouter.routes());
app.listen(3001, () => {
	logger.info('server start at', 3001);

});
console.log('Koa server is started');