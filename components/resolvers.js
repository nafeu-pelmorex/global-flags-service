const _ = require('lodash');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const { Flag } = require('./types');

const adapter = new FileSync('db.json');
const db = low(adapter);

module.exports = {
  flags: ({ search = '' }) => {
    const flags = db.get('flags');

    return _.filter(
      [
        ...flags.map(flag => new Flag(flag))
      ],
      flag => flag.key.toLowerCase().includes(search)
    );
  },
};
