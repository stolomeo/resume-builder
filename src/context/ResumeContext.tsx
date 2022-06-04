import { createContext } from "react";
import { ResumeType } from "../types";
import { emptyResume } from "../utils";

type ResumeContextType = {
  resume: ResumeType;
  setResume: (resume: ResumeType) => void;
};

const ResumeContext = createContext<ResumeContextType>({
  resume: emptyResume,
  setResume: () => {},
});

export default ResumeContext;
