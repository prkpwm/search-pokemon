export const graphQLHandler =
  ({ handler, validator }) =>
  async (root: any, args: any, context: any) => {
    try {
      const returnValue = await handler(root, args, context);
      const validate = await validator(returnValue);
      return validate;
    } catch (err) {
      graphQLErrorHandler(err);
    }
  };

export function graphQLErrorHandler(err) {
  const errType = err.name;
  switch (errType) {
    case "TypeError":
      throw new Error(`[${errType}]Message: ${err.message}`);
    default:
      throw new Error(
        `[Unexpected Internal Error]Message: ${err.message ? err.message : ""}`
      );
  }
}
