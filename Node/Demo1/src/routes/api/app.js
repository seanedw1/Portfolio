const app = require('../../models/app');
const slog = require('slogs');
const colors = require('colors');

// Set module.exports to a function that excepts express as a paramater of express.
module.exports = (express) => {
// Sets constant of router to express.Router() function
  const router = express.Router();

// read - respond with apps json when a GET request is made to the apps route
  router.get('/apps', (req, res) => {
    app.all((err) => {
      res.status(500).json(err);
      slog.debug(colors.red('Fail ') + 'READ App Route');
    }, (data) => {
      res.status(200).json(data);
      slog.debug(colors.green('Success ') + 'READ App Route hit');
    });
  });

// create
  router.post('/apps', (req, res) => {
    app.add(req.body, (err) => {
      res.status(500).json(err);
      slog.debug(colors.red('Fail ') + 'CREATE App Route');
    }, (data) => {
      res.status(200).json(data);
      slog.debug(colors.green('Success ') + 'CREATE App Route hit');
    });
  });

// update
  router.post('/apps/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
// respond with this json data
    app.update(req.body, (err) => {
      res.status(500).json(err);
      slog.debug(colors.red('Fail ') + 'UPDATE App Route');
    }, (data) => {
      res.status(200).json(data);
      slog.debug(colors.green('Success ') + 'UPDATE App Route hit');
    });
  });

// delete
  router.delete('/apps/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
// respond with this json data
    app.remove(req.body, (err) => {
      res.status(500).json(err);
      slog.debug(colors.red('Fail ') + 'DELETE App Route');
    }, (data) => {
      res.status(200).json(data);
      slog.debug(colors.green('Success ') + 'DELETE App Route hit');
    });
  });

  // respond with apps by id when a GET request is made to the courses by id route
  router.get('/apps/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
  // respond with this json data
    app.one(req.body, (err) => {
      res.status(500).json(err);
      slog.debug(colors.red('Fail ') + 'READ BY ID App Route');
    }, (data) => {
      res.status(200).json(data);
      slog.debug(colors.green('Success ') + 'READ BY ID App Route hit');
    });
  });
// returns router with correct data
  return router;
};
