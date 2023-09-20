import { Typography } from "@mui/material";
import { getPrintStyle } from "@utils/customStyles";

type Props = {
  projectPoint: string;
};

export default function ProjectItemsDetails({ projectPoint }: Props) {
  return (
    <Typography variant="body2" px={5} fontSize={9} sx={getPrintStyle("12px")}>
      • {projectPoint}
    </Typography>
  );
}
