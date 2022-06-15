import { ResumeType } from "../types";
import { getClient } from "./client";

export const getEmptyResume = async () => {
  const client = getClient();
  const response = await client.get("/emptyResume");
  return response.data;
};

export const getExampleResume = async () => {
  const client = getClient();
  const response = await client.get("/exampleResume");
  return response.data;
};

export const createResume = async (resume: ResumeType) => {
  const client = getClient();
  await client.post("/exampleResume", resume);
};
