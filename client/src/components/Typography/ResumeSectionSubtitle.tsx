import { Typography } from "@mui/material";

type Props = {
  text: string;
};

export default function ResumeSectionSubtitle({ text }: Props) {
  return (
    <Typography
      fontWeight={700}
      variant="subtitle2"
      fontSize={9}
      sx={{
        "@media print": {
          fontSize: "12px",
        },
      }}
    >
      {text}
    </Typography>
  );
}
