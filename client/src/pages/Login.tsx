import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Link as MaterialLink,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import SignInButton from "../components/Buttons/SignInButton";
import RememberMeCheckbox from "../components/Inputs/Checkboxes/RememberMeCheckbox";
import EmailInput from "../components/Inputs/TextFields/EmailInput";
import PasswordInput from "../components/Inputs/TextFields/PasswordInput";
import Footer from "../components/Navigation/Footer";
import UserContext from "../context";
import { getUser } from "../services/user";
import { avatar, userForm } from "../styles";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pulledUser = await getUser(email);
    //if invalid alert not
    setUser(pulledUser);
    navigate("/create");
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={userForm}>
        <Avatar sx={avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleLogin}>
          <EmailInput setEmail={setEmail} />
          <PasswordInput />
          <RememberMeCheckbox />
          <SignInButton />
          <Grid container>
            <Grid item xs>
              <MaterialLink component={RouterLink} to="#" variant="body2">
                Forgot password?
              </MaterialLink>
            </Grid>
            <Grid item>
              <MaterialLink
                component={RouterLink}
                to="/register"
                variant="body2"
              >
                {"Don't have an account? Sign Up"}
              </MaterialLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
}
