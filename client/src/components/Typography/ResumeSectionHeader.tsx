import { Typography } from "@mui/material";

type Props = {
  text: string;
};

export default function ResumeSectionTitle({ text }: Props) {
  return (
    <Typography
      flexGrow={0}
      fontSize={11}
      fontWeight={700}
      variant="subtitle2"
      sx={{
        "@media print": {
          fontSize: "14px",
        },
      }}
    >
      {text}
    </Typography>
  );
}
