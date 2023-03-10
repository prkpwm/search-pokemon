import axios from "axios";
import { Pokemon } from "./model";

export async function getPokemon(name: string): Promise<Pokemon> {
  const res = `
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
        }`;
  const response = await requestPokemon(res);
  return response;
}

export async function requestPokemon(query: string): Promise<Pokemon> {
  const res = await axios({
    method: "POST",
    url: "/api/graphql",
    data: { query: query },
  })
    .then((res) => {
      const data = res.data.data.getPokemon;
      return data;
    })
    .catch((err) => console.log(err));
  return res;
}

export async function responseHandler<T>(request: Promise<T>): Promise<T> {
  const response = await request;
  if (!response) alert("No data returned");
  return response;
}
