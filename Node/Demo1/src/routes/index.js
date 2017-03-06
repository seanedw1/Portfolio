const slog = require('slogs');
const colors = require('colors');

module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    res.json({ healthy: true });
    slog.debug(colors.green('Success ') + 'Index hit');
  });
  return router;
};
