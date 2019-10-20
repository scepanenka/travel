var createError = require('http-errors');
var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testApiRouter = require("./routes/testApi");

var app = express();
var jsonParser = bodyParser.json();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testApi", testApiRouter);

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
app.use(express.static(__dirname + "/public"));

// get countries
app.get("/api/countries", function(req, res){

  var content = fs.readFileSync("./data/countries.json", "utf8");
  var countries = JSON.parse(content);
  res.send(countries);
});
// get country by id
app.get("/api/countries/:id", function(req, res){

  var id = req.params.id; // get id
  var content = fs.readFileSync("./data/countries.json", "utf8");
  var countries = JSON.parse(content);
  var country = null;
  // find country by id
  for(var i=0; i<countries.length; i++){
    if(countries[i].id==id){
      user = countries[i];
      break;
    }
  }
  // send country in response
  if(country){
    res.send(country);
  }
  else{
    res.status(404).send();
  }
});


module.exports = app;
