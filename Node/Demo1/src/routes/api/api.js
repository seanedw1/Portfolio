const slog = require('slogs');
const colors = require('colors');

// Set module.exports to a function that excepts express as a paramater of express.
module.exports = (express) => {
// Sets constant of router to express.Router() function
  const router = express.Router();

// respond on index with json when a GET request is made to index route
  router.get('/', (req, res) => {
// respond with this json data
    res.json({ hello: 'world' });
    slog.debug(colors.green('Success ') + 'API Route hit');
  });

// respond on status with json when a GET request is made to status route
  router.get('/status', (req, res) => {
// respond with this json data
    res.json({ healthy: 'true' });
    slog.debug(colors.green('Success ') + 'Status Route hit');
  });
// returns router with correct data
  return router;
};
