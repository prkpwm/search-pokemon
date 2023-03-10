import { graphQLHandler } from "../handler";
import { getPokemon } from "../services";

export const resolvers = {
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
