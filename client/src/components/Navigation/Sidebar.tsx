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
import { sidebarBox } from "../../styles/Navigation/sidebar.style";

type Props = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export default function Sidebar({ count, setCount }: Props) {
  return (
    <Box sx={sidebarBox}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setCount((count = 20))}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setCount((count = 40))}>
            <ListItemIcon>
              <School />
            </ListItemIcon>
            <ListItemText primary="Education" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setCount((count = 60))}>
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            <ListItemText primary="Skills" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setCount((count = 80))}>
            <ListItemIcon>
              <FolderShared />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setCount((count = 100))}>
            <ListItemIcon>
              <WorkHistory />
            </ListItemIcon>
            <ListItemText primary="Experience" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
