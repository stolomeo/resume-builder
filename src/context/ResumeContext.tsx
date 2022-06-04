import { createContext } from "react";
import { ResumeType } from "../types";
import { emptyResume } from "../utils";

type ResumeContextType = {
  resume: ResumeType;
  setResume: (resume: ResumeType) => void;
};

export const ResumeContext = createContext<ResumeContextType>({
  resume: emptyResume,
  setResume: () => {},
});
