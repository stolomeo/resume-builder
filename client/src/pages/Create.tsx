import { Box, Button, LinearProgress } from "@mui/material";
import { useState } from "react";
import Form from "../components/Form";
import Preview from "../components/Preview";
import Sidebar from "../components/Sidebar";
import Tool from "../components/Tool";
import ResumeContext from "../context";
import { ResumeType } from "../types";
import { emptyResume } from "../utils";

export default function Create() {
  const [resume, setResume] = useState<ResumeType>(emptyResume);
  const [count, setCount] = useState(25);

  const handleNext = () => {
    if (count === 100) return;
    setCount(count + 25);
  };
  const handlePrev = () => {
    if (count === 25) return;
    setCount(count - 25);
  };

  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      <Box
        sx={{
          display: "flex",
          marginLeft: "15vw",
          height: "84vh",
        }}
      >
        <Sidebar count={count} setCount={setCount} />
        <Form count={count} setCount={setCount} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
          }}
        >
          <Tool setCount={setCount} />
          <Preview />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "8vh",
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5rem",
        }}
      >
        <Button variant="outlined" onClick={handlePrev}>
          Prev
        </Button>
        <Box sx={{ width: "25%" }}>
          <LinearProgress variant="determinate" value={count} />
        </Box>
        <Button variant="outlined" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </ResumeContext.Provider>
  );
}
