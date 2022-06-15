import { BarChart, Person, School, WorkHistory } from "@mui/icons-material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Dispatch, SetStateAction } from "react";

type Props = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export default function Sidebar({ count, setCount }: Props) {
  return (
    <Box
      sx={{
        width: "15vw",
        height: "84vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #202530",
        position: "fixed",
        top: "25",
        left: "0",
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setCount((count = 25))}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setCount((count = 50))}>
            <ListItemIcon>
              <WorkHistory />
            </ListItemIcon>
            <ListItemText primary="Experience" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setCount((count = 75))}>
            <ListItemIcon>
              <School />
            </ListItemIcon>
            <ListItemText primary="Education" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setCount((count = 100))}>
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            <ListItemText primary="Skills" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
