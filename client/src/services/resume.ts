import { UserType } from "../types/user.type";
import { getClient } from "./client";

export const getExampleResume = async () => {
  const client = getClient();
  const response = await client.get("/exampleResume");
  return response.data;
};

export const createResume = async (user: UserType) => {
  const client = getClient();
  await client.post("/users", user);
};
