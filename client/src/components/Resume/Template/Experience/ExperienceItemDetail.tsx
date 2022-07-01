import { Typography } from "@mui/material";
import { print12px } from "../../../../styles";

type Props = {
  experiencePoint: string;
};

export default function ExperienceItemDetail({ experiencePoint }: Props) {
  return (
    <Typography variant="body2" px={5} fontSize={9} sx={print12px}>
      • {experiencePoint}
    </Typography>
  );
}
