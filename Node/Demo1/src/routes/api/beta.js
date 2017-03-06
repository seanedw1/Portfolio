const beta = require('../../models/beta');
const slog = require('slogs');
const colors = require('colors');
const jwt = require('express-jwt');
const config = require('../../../config');

// Set module.exports to a function that excepts express as a paramater of express.
module.exports = (express) => {
// Sets constant of router to express.Router() function
  const router = express.Router();
// verify secret

  const jwtCheck = jwt({
    secret: config.secret,
  });

  router.use('./routes/api/beta', jwtCheck);

// read - respond with courses json when a GET request is made to the courses route
  router.get('/betas', (req, res) => {
    beta.all((err) => {
      res.status(500).json(err);
      slog.debug(colors.red('Fail ') + 'READ beta Route');
    }, (data) => {
      res.status(200).json(data);
      slog.debug(colors.green('Success ') + 'READ beta Route hit');
    });
  });

// create
  router.post('/betas', (req, res) => {
    beta.add(req.body, (err) => {
      res.status(500).json(err);
      slog.debug(colors.red('Fail ') + 'CREATE beta Route');
    }, (data) => {
      res.status(200).json(data);
      slog.debug(colors.green('Success ') + 'CREATE beta Route hit');
    });
  });

// update
  router.post('/betas/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
// respond with this json data
    beta.update(req.body, (err) => {
      res.status(500).json(err);
      slog.debug(colors.red('Fail ') + 'UPDATE beta Route');
    }, (data) => {
      res.status(200).json(data);
      slog.debug(colors.green('Success ') + 'UPDATE beta Route hit');
    });
  });

// delete
  router.delete('/betas/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
// respond with this json data
    beta.remove(req.body, (err) => {
      res.status(500).json(err);
      slog.debug(colors.red('Fail ') + 'DELETE beta Route');
    }, (data) => {
      res.status(200).json(data);
      slog.debug(colors.green('Success ') + 'DELETE beta Route hit');
    });
  });

// respond with course by id when a GET request is made to the courses by id route
  router.get('/betas/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
// respond with this json data
    beta.one(req.body, (err) => {
      res.status(500).json(err);
      slog.debug(colors.red('Fail ') + 'READ BY ID beta Route');
    }, (data) => {
      res.status(200).json(data);
      slog.debug(colors.green('Success ') + 'READ BY ID beta Route hit');
    });
  });

// returns router with correct data
  return router;
};
