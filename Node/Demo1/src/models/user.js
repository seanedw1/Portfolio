const db = require('./db');
const slog = require('slogs');
const colors = require('colors');

// create
exports.add = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
  slog.debug(colors.green('CREATE ') + 'User Route hit');
};

// read all
exports.all = (err, success) => {
  db.user.findAll().then(success).catch(err);
  slog.debug(colors.cyan('READ ') + 'User Route hit');
};

// read by id
exports.one = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  slog.debug(colors.cyan('READ BY ID ') + 'User Route hit');
};

// update
exports.update = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  slog.debug(colors.green('UPDATE ') + 'User Route hit');
};

// delete
exports.remove = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  slog.debug(colors.red('DELETE ') + 'User Route hit');
};
