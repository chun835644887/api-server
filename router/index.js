const login = require('../controller/login');

const router = require('koa-router')();

router.get('/login', login.login);
router.post('/loginPost', login.loginPost);

module.exports = router;