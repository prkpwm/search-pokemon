import { gql } from "apollo-server-micro";

export const typeDefs = gql`
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
