import { Box, Link, Typography } from "@mui/material";
import { useContext } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import UserContext from "../../../../context";
import {
  print10px,
  print12px,
  print18px,
  printBlue,
} from "../../../../styles/Resume/print.style";

export default function Personal() {
  const { user } = useContext(UserContext);
  const { fullName, email, phone, githubLink, linkedinLink } =
    user.resume.personalItems;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={print18px} fontSize={13}>
        {fullName}
      </Typography>
      <Typography fontSize={11} sx={print12px}>
        {phone} | {email}
      </Typography>
      <Typography variant="caption" fontSize={8} sx={print10px}>
        <Link href={githubLink} sx={printBlue}>
          <FaGithubSquare />
          github
        </Link>{" "}
        |{" "}
        <Link href={linkedinLink} sx={printBlue}>
          <FaLinkedin />
          linkedin
        </Link>
      </Typography>
    </Box>
  );
}
