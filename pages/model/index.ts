export interface Pokemon {
  name: string;
  number: string;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  classification: string;
  types: string[];
  resistant: string[];
  attacks: {
    fast: {
      name: string;

      type: string;
      damage: number;
    }[];

    special: {
      name: string;
      type: string;
      damage: number;
    }[];
  };
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  evolutions: Pokemon;
}
