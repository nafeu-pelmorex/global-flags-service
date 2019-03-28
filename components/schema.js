const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Query {
    flags(search: String): [Flag]
  }

  type Flag {
    key: String
    label: String
    changes: [String]
    env: [Env]
  }

  type Env {
    name: String
    enabled: Boolean
    stable: Boolean
    released: String
  }
`);
