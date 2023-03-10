import { getPokemon } from "./index";
import * as data from "../data";
import { mock } from "../mock";
import "@testing-library/jest-dom";

jest.mock("../data");

const pokemon_list = ["bulbasaur", "charmander", "squirtle"];

describe("getPokemon", () => {
  it("should be success", async () => {
    const mock1 = {
      name: "pikachu",
    };

    mock(data, "getPokemon", jest.fn().mockReturnValue(mock1));
    const pokemon = await getPokemon("pikachu");
    expect(data.getPokemon).toBeCalled();
    const res = {
      name: "pikachu",
    };

    expect(res).toEqual(pokemon);
  });

  it("should be fail", async () => {
    const mock1 = undefined;
    mock(data, "getPokemon", jest.fn().mockReturnValue(mock1));
    const pokemon = await getPokemon("pikachu");
    expect(data.getPokemon).toBeCalled();
    expect(pokemon).toEqual(null);
  });
});
