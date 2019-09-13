import { issueAuthToken } from "../utils/auth";

function signUp(parent: null, args: any) {
  try {
    const jwt = issueAuthToken("1");

    return {
      jwt,
      user: {
        name: "Dan"
      },
      error: ""
    };
  } catch (err) {
    console.log(err);
    return {
      error: "Unable to issue auth token"
    };
  }
}

function signIn(parent: null, args: any) {
  try {
    const jwt = issueAuthToken("1");

    return {
      jwt,
      user: {
        name: "Dan"
      },
      error: ""
    };
  } catch (err) {
    console.log(err);
    return {
      error: "Unable to issue auth token"
    };
  }
}

export { signUp, signIn };
