import { useState } from "react";
import styled from "styled-components";
import ResumeContext from "../context/";
import { ResumeType } from "../types/";
import { emptyResume } from "../utils/";
import Form from "./Form";
import Preview from "./Preview";

export default function Main() {
  const [resume, setResume] = useState<ResumeType>(emptyResume);

  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      <MainWrapper>
        <Form />
        <Preview />
      </MainWrapper>
    </ResumeContext.Provider>
  );
}

const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1800px;
  padding: 4rem 8rem;
  margin: 0 auto;
  margin-bottom: 4rem;

  gap: 4rem;
  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
`;
