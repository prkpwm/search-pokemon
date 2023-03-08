import * as data from "../data";

export const getPokemon = async (name: string) => {
  const res = await data.getPokemon(name);
  return res;

};
