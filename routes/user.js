var express = require('express');
var router = express.Router();

// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

var obj = {
  title: 'user',
  object: {

  }
}

/* GET  listing. */
router.get('/', function(req, res, next) {
  obj.object.main='node.js world';
  res.render('index', obj);
});

module.exports = router;
