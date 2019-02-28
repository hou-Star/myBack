var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//自己写的注册路由
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var uploadRouter = require('./routes/upload');
var getProductsRouter = require('./routes/getProducts');

var app = express();

//------------连接数据库---------------------
var mongoose  = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/smallMarket");
//------------连接数据库---------------------
//---------express-session-----------------------
app.use(session({
    name: "kerwinNodeSessID",
    secret:"dw3243dw",
    cookie: {maxAge: 1000*3600 }, //1小时
    resave: true,
    saveUninitialized: true
}));  

//----------------------------------
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
//自己写的注册路由
app.use('/register',registerRouter);
app.use('/login',loginRouter);
app.use('/upload',uploadRouter);
app.use('/getProducts',getProductsRouter);

//session配置
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
