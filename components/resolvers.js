const { Flag } = require('./types');
const flags = require('../flags');

module.exports = {
  flags: () => [...flags.map(flag => new Flag(flag))],
};
