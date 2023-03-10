import { Pokemon } from "../../model";
import * as data from "../data";

export const getPokemon = async (name: string): Promise<Pokemon> => {
  const res = await data.getPokemon(name);
  return res;
};
