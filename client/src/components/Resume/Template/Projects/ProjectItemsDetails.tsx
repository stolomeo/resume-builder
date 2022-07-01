import { Typography } from "@mui/material";
import { print12px } from "../../../../styles";

type Props = {
  projectPoint: string;
};

export default function ProjectItemsDetails({ projectPoint }: Props) {
  return (
    <Typography variant="body2" px={5} fontSize={9} sx={print12px}>
      • {projectPoint}
    </Typography>
  );
}
