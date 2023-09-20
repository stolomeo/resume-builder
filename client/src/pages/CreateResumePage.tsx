import { Box } from "@mui/material";
import { useState } from "react";
import PaginationBar from "../components/Navigation/PaginationBar";
import SideNavigationMenu from "../components/Navigation/SideNavigationMenu";
import AppToolBar from "../components/Navigation/AppToolBar";
import Form from "../components/Resume/Form";
import Template from "../components/Resume/Template";

export default function CreateResumePage() {
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
        <SideNavigationMenu count={count} setCount={setCount} />
        <Form count={count} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
          }}
        >
          <AppToolBar setCount={setCount} />
          <Template />
        </Box>
      </Box>
      <PaginationBar count={count} setCount={setCount} />
    </>
  );
}
