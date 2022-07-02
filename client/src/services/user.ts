import { UserType } from "../types/user.type";
import { getClient } from "./client";

export const createUser = async (user: UserType) => {
  const client = getClient();
  await client.post("/users", user);
};

export const getUser = async (email: string) => {
  const client = getClient();
  const returnedUser = await client.get(`/users/${email}`);
  const data = returnedUser.data;
  return data;
};
