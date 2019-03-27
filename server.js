const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const flags = require('./flags');

const PORT = process.env.PORT || 8080;

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    flags: [Flag]
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

class Flag {
  constructor({ key, label, changes, env }) {
    this.key = key;
    this.label = label;
    this.changes = changes;
    this.env = env.map(e => new Env(e));
  }
}

class Env {
  constructor({ name, enabled, stable, released }) {
    this.name = name,
    this.enabled = enabled,
    this.stable = stable,
    this.released = released
  }
}

// The root provides a resolver function for each API endpoint
const root = {
  flags: () => [...flags.map(flag => new Flag(flag))],
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(PORT);

console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
