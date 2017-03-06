const user = require('../../models/user');
const slog = require('slogs');
const colors = require('colors');
const config = require('../../../config');
const jwt = require('express-jwt');


// Set module.exports to a function that excepts express as a paramater of express.
module.exports = (express) => {
// Sets constant of router to express.Router() function
  const router = express.Router();

  const jwtCheck = jwt({
    secret: config.secret,
  });

  router.use('/api/v1/user', jwtCheck);

// respond with users json when a GET request is made to the users route
  router.get('/users', (req, res) => {
    user.all((err) => {
      res.status(500).json(err);
      slog.debug(colors.red('Fail ') + 'READ user Route');
    }, (data) => {
      res.status(200).json(data);

      slog.debug(colors.green('Success ') + 'READ user Route hit');
    });
  });

// create
  router.post('/users', (req, res) => {
    user.add(req.body, (err) => {
      res.status(500).json(err);
      slog.debug(colors.red('Fail ') + 'CREATE user Route');
    }, (data) => {
      res.status(200).json(data);
      slog.debug(colors.green('Success ') + 'CREATE user Route');
    });
  });

// update
  router.post('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
// respond with this json data
    user.update(req.body, (err) => {
      res.status(500).json(err);
      slog.debug(colors.red('Fail ') + 'UPDATE user Route');
    }, (data) => {
      res.status(200).json(data);
      slog.debug(colors.green('Success ') + 'UPDATE user Route hit');
    });
  });

// delete
  router.delete('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
// respond with this json data
    user.remove(req.body, (err) => {
      res.status(500).json(err);
      slog.debug(colors.red('Fail ') + 'DELETE user Route');
    }, (data) => {
      res.status(200).json(data);
      slog.debug(colors.green('Success ') + 'DELETE user Route hit');
    });
  });

// respond with user by id when a GET request is made to the users by id route
  router.get('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
// respond with this json data
    user.one(req.body, (err) => {
      res.status(500).json(err);
      slog.debug(colors.red('Fail ') + 'READ BY ID user Route');
    }, (data) => {
      res.status(200).json(data);
      slog.debug(colors.green('Success ') + 'READ BY ID user Route hit');
    });
  });

// returns router with correct data
  return router;
};
