var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Importació de rutes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Inicialització Express
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// TODO això no ha d'existir de moment (més tard podem decidir servir arxius estàtics)
app.use(express.static(path.join(__dirname, 'public')));

// TODO Rutes s'haurien d'importar i separar-les
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

// Express 4 no usa el app.js per arrencar, usa l'script que hi ha a ./bin/www
// Per arrencar el server amb node app.js igual que en Express 3, cal afegir el codi d'aquí sota:

// app.set('port', process.env.PORT || 3000)

// app.listen(app.get('port'), () => {
//   console.log(`Express server listening on port ${app.get('port')}`);
// })