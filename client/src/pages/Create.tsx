import { AppBar, Box, Button, LinearProgress, Toolbar } from "@mui/material";
import { useState } from "react";
import DevTemplate from "../components/DevTemplate";
import Form from "../components/Form";
import Sidebar from "../components/Sidebar";
import Tool from "../components/Tool";

export default function Create() {
  const [count, setCount] = useState(20);

  const handleNext = () => {
    if (count === 100) return;
    setCount(count + 20);
  };
  const handlePrev = () => {
    if (count === 20) return;
    setCount(count - 20);
  };

  return (
    <>
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
          <DevTemplate />
        </Box>
      </Box>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          top: "auto",
          bottom: 0,
          "@media print": {
            display: "none",
          },
        }}
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: "center", gap: "2rem" }}
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
        </Toolbar>
        {/* </Box> */}
      </AppBar>
    </>
  );
}
