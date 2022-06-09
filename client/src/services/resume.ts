import { getClient } from "./client";

export const getEmptyResume = async () => {
  const client = getClient();
  const data = await client.get("/emptyResume");
  return data;
};
