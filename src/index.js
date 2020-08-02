import { GraphQLServer, PubSub } from "graphql-yoga";
import Query from "./resolvers/Query";
import Post from "./resolvers/Post";
import User from "./resolvers/User";

import db from "./db";

const pubsub = new PubSub();

const resolvers = {
  Query,
  Post, //FieldResolver for posts relationships (eg: author)... all relationship fields will receive the post found.
  User, //FieldResolvers for User type
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { db, pubsub },
});

server.start(() => console.log("Server Up..."));
