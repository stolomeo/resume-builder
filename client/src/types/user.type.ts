import { ResumeType } from "./resume.type";

export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  resume: ResumeType;
};
