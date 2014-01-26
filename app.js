
/**
 * Module dependencies.
 */

var express = require('express')
  , http    = require('http')
  , path    = require('path');

var app = express();

app.configure('development', function() {
  app.use(express.errorHandler());
});

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
