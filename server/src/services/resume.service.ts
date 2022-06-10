import { getDb } from "../gateway/mongo";
import { ResumeType } from "../types";

export const getEmptyResumeCol = async () => {
  const db = await getDb();
  return db.collection<ResumeType>("resumeEmpty");
};

export const getEmptyResume = async () => {
  const col = await getEmptyResumeCol();
  const resume: any[] = await col.find().toArray();
  return resume[0];
};

export const getExampleResumeCol = async () => {
  const db = await getDb();
  return db.collection<ResumeType>("resumeExample");
};

export const getExampleResume = async () => {
  const col = await getExampleResumeCol();
  const resume: any[] = await col.find().toArray();
  return resume[0]; // front end requires single object
};
