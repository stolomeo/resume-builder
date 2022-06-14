import { Box } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { handleComponentSelection } from "../../utils/handleComponentSelection";

type Props = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export default function Form({ count, setCount }: Props) {
  const formComponent = handleComponentSelection(count);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "40%",
        padding: "0 0 0 3rem",
        borderRight: "1px solid black",
      }}
    >
      {formComponent}
    </Box>
  );
}
