import styled from "styled-components";
import Education from "./Education/";
import Experience from "./Experience/";
import Personal from "./Personal/";
import Skill from "./Skill";

export default function Preview() {
  return (
    <PreviewWrapper>
      <Personal />
      <Experience />
      <Education />
      <Skill />
    </PreviewWrapper>
  );
}

const PreviewWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.garamound};
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  width: 210mm;
  @media print {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
