import { UserType } from "../types";
import { getClient } from "./client";

export const createUser = async (user: UserType) => {
  const client = getClient();
  await client.post("/users", user);
};

export const getUser = async (email: string) => {
  const client = getClient();
  const returnedUser: UserType = await client.get(`/users/${email}`);
  return returnedUser;
};
