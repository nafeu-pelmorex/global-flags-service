const express = require('express');
const log = require('fancy-log');
const graphqlHTTP = require('express-graphql');
const rootValue = require('./components/resolvers');
const schema = require('./components/schema');
const {
  name: NAME,
  version: VERSION
} = require('./package.json');

const PORT = process.env.PORT || 8080;
const ENVIRONMENT = process.env.ENVIRONMENT || 'development';
const graphiql = (ENVIRONMENT === 'development');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql
}));

app.listen(PORT);

log(`\n
  ${NAME} - v${VERSION}
  running in ${ENVIRONMENT} mode at http://localhost:${PORT}
  ${graphiql ? `graphiql enabled at http://localhost:${PORT}/graphql` : ''}
`);