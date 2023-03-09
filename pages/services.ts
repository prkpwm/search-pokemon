import axios from "axios";
import { Pokemon } from "./model";

export async function getPokemon(name: string): Promise<Pokemon> {
  const res = await axios({
    method: "POST",
    url: "/api/graphql",
    data: {
      query: `
            query Query {
                getPokemon(name: "${name}") {
                    name
                    number
                    weight {
                        minimum
                        maximum
                    }
                    height {
                        minimum
                        maximum
                    }
                    classification
                    types
                    resistant
                    attacks {
                        fast {
                            name
                            type
                            damage

                        }
                        special {
                            name
                            type
                            damage
                        }
                    }
                      weaknesses
                      fleeRate
                      maxCP
                      evolutions {
                          name
                          number
                          weight {
                              minimum
                              maximum
                          }
                          height {
                              minimum
                              maximum
                          }
                          classification
                          types
                          resistant
                          attacks {
                              fast {
                                  name
                                  type
                                  damage
    
                              }
                              special {
                                  name
                                  type
                                  damage
                              }
                          }
                      }
                }
            }
            `,
    },
  })
    .then((res) => {
      const data = res.data.data.getPokemon;
      return data;
    })
    .catch((err) => console.log(err));
  return res;
}
