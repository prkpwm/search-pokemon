import axios from "axios";

export const getPokemon = async (name: string) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: "https://graphql-pokemon2.vercel.app/",
      data: {
        query: `
                query Query {
                    pokemon(name: "${name}") {
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
        resolve(res.data.data.pokemon);
      })
      .catch((err) => reject(err));
  });
};
