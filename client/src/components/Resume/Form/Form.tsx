import { Box } from "@mui/material";
import { formComponentBox } from "../../../styles";
import { handleComponentSelection } from "../../../utils/handleComponentSelection";

type Props = {
  count: number;
};

export default function Form({ count }: Props) {
  const formComponent = handleComponentSelection(count);

  return <Box sx={formComponentBox}>{formComponent}</Box>;
}
