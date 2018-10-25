// aqui se encontra a lógica da aplicação; é o coração da aplicação express

/*
Esses require estão carregando módulos, q são instalados no momento q vc faz o
npm install nesta pasta. Esses módulos são salvos no arquivo package.json na
sessão chamada dependencies, e são baixados do site do npm. Tb é possível criar
nossos próprios módulos, bastando criar um arquivo javascript qualquer e usar
o comando module.exports passando aquilo q quero tornar público para demais
arquivos
*/


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

/*
Fazendo a requisição do módulo calculadora criado em outro arquivo na raiz
[ Obs.: só consegui fazer funcionar aqui ]
*/
var calculadora = require('./calculadora');
console.log(calculadora.somar(1,2));

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
