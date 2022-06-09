import { getClient } from "./client";

type User = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export const createUser = async (user: User) => {
  const client = getClient();
  await client.post("/user", user);
};
