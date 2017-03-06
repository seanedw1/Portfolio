const db = require('./db');
const slog = require('slogs');
const colors = require('colors');

// create
exports.add = (payload, err, success) => {
  db.app.create(payload).then(success).catch(err);
  slog.debug(colors.green('CREATE ') + 'App Route hit');
};

// read all
exports.all = (err, success) => {
  db.app.findAll().then(success).catch(err);
  slog.debug(colors.cyan('READ ') + 'App Route hit');
};

// read by id
exports.one = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  slog.debug(colors.cyan('READ BY ID ') + 'App Route hit');
};

// update
exports.update = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  slog.debug(colors.green('UPDATE ') + 'App Route hit');
};

// delete
exports.remove = (payload, err, success) => {
  db.app.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  slog.debug(colors.red('DELETE ') + 'App Route hit');
};
