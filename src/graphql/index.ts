import { ApolloServer } from "@apollo/server";
import { User } from "./user";
async function createApolloGraphqlServer() {
  // Create GraphQL Server
  const Graphqlserver = new ApolloServer({
    typeDefs: `
      type Query {
        hello:String
    
      }
      type Mutation {
            ${User.mutations}
      }
    `,
    //Schema
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
      Mutation: {
        ...User.resolvers.mutation,
      },
    },
  });

  // Start the GraphQL Server
  await Graphqlserver.start();
  return Graphqlserver;
}
export default createApolloGraphqlServer;
