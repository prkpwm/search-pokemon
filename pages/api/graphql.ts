import { ApolloServer, gql } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { getPokemon } from "./services";

const typeDefs = gql`
  type Pokemon {
    number: String
    name: String
    weight: Weight
    height: Height
    classification: String
    types: [String]
    resistant: [String]
    attacks: Attacks
    weaknesses: [String]
    fleeRate: Float
    maxCP: Int
    evolutions: [Pokemon]
  }
  type Weight {
    minimum: String
    maximum: String
  }

  type Height {
    minimum: String
    maximum: String
  }

  type Attacks {
    fast: [Fast]
    special: [Special]
  }

  type Fast {
    name: String
    type: String
    damage: Int
  }

  type Special {
    name: String
    type: String
    damage: Int
  }

  type Query {
    getPokemon(name: String!): Pokemon
  }
`;

export const graphQLHandler =
  ({ handler, validator }) =>
  async (root: any, args: any, context: any) => {
    try {
      const returnValue = await handler(root, args, context);
      const validate = await validator(returnValue);
      return validate;
    } catch (err) {
      graphQLErrorHandler(err);
    }
  };

export function graphQLErrorHandler(err) {
  const errType = err.name;
  switch (errType) {
    case "TypeError":
      throw new Error(`[${errType}]Message: ${err.message}`);
    default:
      throw new Error(
        `[Unexpected Internal Error]Message: ${err.message ? err.message : ""}`
      );
  }
}

const resolvers = {
  Query: {
    getPokemon: graphQLHandler({
      handler: async (root, args, context) => await getPokemon(args.name),
      validator: (res) => {
        if (!res) throw new Error("No data returned");
        return res;
      },
    }),
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}
