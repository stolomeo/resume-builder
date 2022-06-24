import GitHubIcon from "@mui/icons-material/GitHub";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import styled from "styled-components";

export default function Footer() {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        bgcolor: "rgba(18, 18, 18,0.7)",
        maxHeight: "6vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">Copyright © 2022 stolomeo</Typography>
        <IconButton href="https://github.com/stolomeo" color="inherit">
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.roboto};
  width: 100%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  position: fixed;
  bottom: 0;
  left: 0;
`;

const GithubLink = styled.a`
  display: flex;
  padding-bottom: 0.3rem;
  margin-left: 0.7rem;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.8rem;
  &:hover {
    color: ${({ theme }) => theme.colors.darkHover};
  }
  &:active {
    color: ${({ theme }) => theme.colors.darkActive};
  }
`;
