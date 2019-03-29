const express = require('express');
const http = require('http');
const log = require('fancy-log');
const graphqlHTTP = require('express-graphql');
const rootValue = require('./components/resolvers');
const schema = require('./components/schema');
const morgan = require('morgan');
const {
  name: NAME,
  version: VERSION
} = require('./package.json');

const ENVIRONMENT = process.env.ENVIRONMENT || 'development';

const graphiql = (ENVIRONMENT === 'development');

const app = express();
const server = http.Server(app);

app.use(morgan('short'))

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql
}));

app.use(express.static(__dirname + '/public'));

server.listen(process.env.PORT || 8080, function(){
  log(`\n
    ${NAME} - v${VERSION}
    running in ${ENVIRONMENT} mode at http://localhost:${server.address().port}
    ${graphiql ? `graphiql enabled at http://localhost:${server.address().port}/graphql` : ''}
  `);
});
