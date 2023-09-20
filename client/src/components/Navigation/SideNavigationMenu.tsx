import {
  BarChart,
  FolderShared,
  Person,
  School,
  WorkHistory,
} from "@mui/icons-material";
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

const menuItems = [
  { count: 20, icon: <Person />, text: "Profile" },
  { count: 40, icon: <School />, text: "Education" },
  { count: 60, icon: <BarChart />, text: "Skills" },
  { count: 80, icon: <FolderShared />, text: "Projects" },
  { count: 100, icon: <WorkHistory />, text: "Experience" },
];

export default function SideNavigationMenu({ setCount }: Props) {
  return (
    <Box
      sx={{
        width: "15vw",
        height: "84vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        position: "fixed",
        top: "25",
        left: "0",
        "@media print": {
          display: "none",
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem disablePadding key={item.count}>
            <ListItemButton onClick={() => setCount(item.count)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
