import { Box, Link, Typography } from "@mui/material";
import { useContext } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import UserContext from "@context/UserContext";
import { getPrintStyle } from "@utils/customStyles";

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
      <Typography sx={getPrintStyle("18px")} fontSize={13}>
        {fullName}
      </Typography>
      <Typography fontSize={11} sx={getPrintStyle("12px")}>
        {phone} | {email}
      </Typography>
      <Typography variant="caption" fontSize={8} sx={getPrintStyle("10px")}>
        <Link href={githubLink} sx={getPrintStyle(null, "#1976d2")}>
          <FaGithubSquare />
          github
        </Link>{" "}
        |{" "}
        <Link href={linkedinLink} sx={getPrintStyle(null, "#1976d2")}>
          <FaLinkedin />
          linkedin
        </Link>
      </Typography>
    </Box>
  );
}
