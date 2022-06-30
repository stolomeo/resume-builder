import { Box } from "@mui/material";
import { handleComponentSelection } from "../../utils/handleComponentSelection";

type Props = {
  count: number;
};

export default function ResumeForm({ count }: Props) {
  const formComponent = handleComponentSelection(count);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "40%",
        padding: "1rem 5rem",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        height: "100%",
        overflow: "auto",
        "@media print": {
          display: "none",
        },
      }}
    >
      {formComponent}
    </Box>
  );
}
