import { Box } from "@mui/material";
import { useState } from "react";
import BottomNav from "../components/Navigation/BottomNav";
import Sidebar from "../components/Navigation/Sidebar";
import Tool from "../components/Navigation/Tool";
import Form from "../components/Resume/Form";
import Template from "../components/Resume/Template/";

export default function Create() {
  const [count, setCount] = useState(20);

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
        <Form count={count} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
          }}
        >
          <Tool setCount={setCount} />
          <Template />
        </Box>
      </Box>
      <BottomNav count={count} setCount={setCount} />
    </>
  );
}
