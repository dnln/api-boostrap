import { GraphQLServer } from "graphql-yoga";

import * as Query from "./resolvers/Query";
import * as Mutation from "./resolvers/Mutation";
import { Context } from "graphql-yoga/dist/types";
import { verifyAuthToken } from "./utils/auth";

const resolvers = {
  Query,
  Mutation
};

const server = new GraphQLServer({
  typeDefs: __dirname + "/schema.graphql",
  resolvers,
  context: (req): Context => {
    try {
      // get the auth token from the headers
      const rawAuthHeader = req.request.headers.authorization || "";

      const token = rawAuthHeader.replace("Bearer ", "");

      const verifiedToken: any = verifyAuthToken(token);

      if (!verifiedToken || !verifiedToken.userId) {
        throw new Error("Invalid token!");
      }

      // add the token to the context
      return {
        user: verifiedToken
      };
    } catch (err) {
      return {
        user: undefined
      };
    }
  }
});

server.start({ port: 4020 }, () =>
  console.log(`Server is running on http://localhost:4020`)
);
