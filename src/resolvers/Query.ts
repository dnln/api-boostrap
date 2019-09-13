import { Context } from "graphql-yoga/dist/types";

function user(parent: null, args: null, context: Context) {
  try {
    if (!context.user.userId) {
      return {
        error: "User not authenticated"
      };
    }

    return {
      error: "",
      name: "Dan"
    };
  } catch (err) {
    return {
      error: "Unable to issue token"
    };
  }
}

export { user };
