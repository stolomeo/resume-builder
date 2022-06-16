import { UserType } from "../types";
import { getClient } from "./client";

export const createUser = async (user: UserType) => {
  const client = getClient();
  await client.post("/user", user);
};
