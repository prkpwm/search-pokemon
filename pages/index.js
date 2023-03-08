import axios from 'axios'
import { useState } from 'react'
import React from 'react'


export default function Home() {
    const [data, setData] = useState('')

    async function getData() {
        const name = document.getElementById('search').value
        await axios({
            method: 'POST',
            url: '/api/graphql',
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
                `
            }
        })
            .then(res => {
                const data = res.data.data.getPokemon
                setData(JSON.stringify(data))

            })
            .catch(err => console.log(err))
    }

    
    return <div>
        <h1>Home</h1>
        <input type="text"  id='search'/>
        <button onClick={getData}>Search</button>
        <div >
            <h1>Search Results</h1>
            <p >{data}</p>
        </div>
    </div>
}
