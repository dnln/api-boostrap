import { GraphQLServer } from "graphql-yoga";

import * as Query from "./resolvers/Query";
import * as Mutation from "./resolvers/Mutation";

const resolvers = {
  Query,
  Mutation
};

const server = new GraphQLServer({
  typeDefs: __dirname + "/schema.graphql",
  resolvers
});

server.start({ port: 4020 }, () =>
  console.log(`Server is running on http://localhost:4020`)
);
