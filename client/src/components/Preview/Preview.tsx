import { Box } from "@mui/material";
import styled from "styled-components";
import Education from "./Education/";
import Personal from "./Personal/";
import Skill from "./Skill";

export default function Preview() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        border: "1px solid #202530",
        bgcolor: "#f9f9f9",
        color: "#000",
        padding: "1rem",
        overflow: "auto",
        height: "100%",
      }}
    >
      <Personal />
      {/* <Experience /> */}
      <Education />
      <Skill />
    </Box>
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
  width: 30%;
  @media print {
    display: block;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
