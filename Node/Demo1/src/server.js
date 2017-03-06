// Sets constant express to 'express' module
const express = require('express');

// Sets constant 'body_parser' to module
const bodyParser = require('body-parser');

// sets constant 'app' to express functionality
const app = express();

// config sets what port to run on
const port = process.env.PORT || 3000;
// utility tool
const slog = require('slogs');

// JSON formatting
app.set('json spaces', 2);

// body_parser.json - Parses the text as JSON and exposes the resulting object on req.body.
app.use(bodyParser.json());

// bodyParser.urlencoded - Parses the text as URL encoded data and exposes the resulting object
app.use(bodyParser.urlencoded({
  extended: true,
}));

// const config = require('../config');
// const jwt = require('express-jwt');
// const jwtCheck = jwt({
//   secret: config.secret,
// });

// linking routes
app.use('/', require('./routes')(express));
app.use('/api/v1', require('./routes/api/api')(express));
app.use('/api/v1', require('./routes/api/app')(express));
app.use('/api/v1', require('./routes/api/user')(express));
app.use('/api/v1', require('./routes/api/auth')(express));
app.use('/api/v1', require('./routes/api/beta')(express));
app.use('/api/v1', require('./routes/api/revoke')(express));

// sets variable server to the listening action on port
const server = app.listen(port, () => {
//  console.log('server active on', port);
  slog.debug('server active on ' + port);
});
// exports server to be used elsewhere
module.exports = server;
