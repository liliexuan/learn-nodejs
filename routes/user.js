var express = require('express');
var router = express.Router();

// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

/* GET  listing. */
router.get('/', function(req, res, next) {
  res.render('index', {main: 'hello world' ,title: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh' });
});

module.exports = router;
