module.exports = (app) => {
  const notes = require('./controller');

  app.post('/notes', notes.create);
}