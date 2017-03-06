const auth = require('../../models/auth');
const jwt = require('express-jwt');
const blacklist = require('express-jwt-blacklist');
const config = require('../../../config');
const slog = require('slogs');
const colors = require('colors');

module.exports = (express) => {
  const router = express.Router();

  const jwtCheck = jwt({
    secret: config.secret,
    blacklist: blacklist.isRevoked,
  });

  router.use('/api/v1/revoke', jwtCheck);

  // mock form post
  router.post('/revoke', (req, res) => {
    auth.check(req.body, (err) => {
      res.status(500).json(err);
      slog.debug(colors.red('Fail ') + 'REVOKE JWT Route');
    }, (data) => {
      if (!data) {
        res.status(500).send({ message: 'User not found.' });
      } else if (data) {
        // check password
        if (data.password !== req.body.password) {
          res.status(500).send({ message: 'Wrong password.' });
        } else {
          // sets specifs fields of object required to sign
          const User = { username: req.body.username, password: req.body.password };
          // create a token
          blacklist.revoke(User);
          // return the information including token as JSON
          res.status(200).send({
            message: 'token revoked!',
          });
        }
      }
      slog.debug(colors.green('Success ') + 'REVOKE Route hit');
    });
  });
    // returns router with correct data
  return router;
    // closing module
};
