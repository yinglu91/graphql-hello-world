const { ApolloServer, gql } = require('apollo-server');

// 1st step
const typeDefs = gql`
  schema {
    query: Query
  }

  type Query {
    greeting: String
  }
`;

// 2nd step
const resolvers = {
  Query: {
    greeting: () => {
      return 'Hello GraphQL World!';
    }
  }
};

// 3rd step
const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.listen({ port: 9000 }).then(({ url }) => {
  console.log(`Server running at ${url}`);
});

// Server running at http://localhost:9000/

// parse string using gql tag, parse string into object -- graphql AST-- Abstract Sentecx Tree
// use type, no class, no need to know gql

// console.log(typeDefs);
/*  no
{ kind: 'Document',
  definitions:
   [ { kind: 'ObjectTypeDefinition',
       description: undefined,
       name: [Object],
       interfaces: [],
       directives: [],
       fields: [Array] } ],
  loc: { start: 0, end: 41 } }
  */
