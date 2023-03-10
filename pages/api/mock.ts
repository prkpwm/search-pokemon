export const mock = <T extends {}, K extends keyof T>(
  object: T,
  property: K,
  value: T[K]
): void => {
  Object.defineProperty(object, property, { get: () => value });
};
