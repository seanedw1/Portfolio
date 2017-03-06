const db = require('./db');
const slog = require('slogs');
const colors = require('colors');

// create
exports.add = (payload, err, success) => {
  db.beta.create(payload).then(success).catch(err);
  slog.debug(colors.green('CREATE ') + 'Beta app Route hit');
};

// read all
exports.all = (err, success) => {
  db.beta.findAll().then(success).catch(err);
  slog.debug(colors.cyan('READ ') + 'Beta app Route hit');
};

// read by id
exports.one = (payload, err, success) => {
  db.beta.find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  slog.debug(colors.cyan('READ BY ID ') + 'Beta app Route hit');
};

// update
exports.update = (payload, err, success) => {
  db.beta.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  slog.debug(colors.green('UPDATE ') + 'Beta app Route hit');
};

// delete
exports.remove = (payload, err, success) => {
  db.beta.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  slog.debug(colors.red('DELETE ') + 'Beta app Route hit');
};
