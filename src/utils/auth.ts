import * as jwt from "jsonwebtoken";

import config from "../config";

export function issueAuthToken(userId: string, expiresIn?: string) {
  if (!config.jwt.secret) {
    throw new Error("No JWT secret defined");
  }

  return jwt.sign(
    {
      userId
    },
    config.jwt.secret,
    {
      expiresIn: expiresIn || config.jwt.expiry
    }
  );
}

export function verifyAuthToken(token: string) {
  if (!config.jwt.secret) {
    throw new Error("No JWT secret defined");
  }

  return jwt.verify(token, config.jwt.secret);
}
