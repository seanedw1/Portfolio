const db = require('./db');
const slog = require('slogs');
const colors = require('colors');

// read user db table
exports.check = (payload, err, sucess) => {
  db.user.find({
    where: {
      username: payload.username,
      password: payload.password,
    },
  }).then(sucess).catch(err);
  slog.debug(colors.green('Create ') + 'token hit');
  // closes exports
};

// read user db table
exports.remove = (payload, err, sucess) => {
  db.user.find({
    where: {
      username: payload.username,
      password: payload.password,
    },
  }).then(sucess).catch(err);
  slog.debug(colors.green('Delete ') + 'token hit');
  // closes exports
};
