import { createContext } from "react";
import { ResumeType } from "../types";
import { exampleResume } from "../utils";

type ResumeContextType = {
  resume: ResumeType;
  setResume: (resume: ResumeType) => void;
};

const ResumeContext = createContext<ResumeContextType>({
  resume: exampleResume,
  setResume: () => {},
});

export default ResumeContext;
