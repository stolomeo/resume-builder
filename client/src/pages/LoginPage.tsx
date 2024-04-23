import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link as MaterialLink,
  Typography,
} from "@mui/material";
import { avatar, userForm } from "@utils/customStyles";
import { useContext, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Footer from "../components/Navigation/Footer";
import EmailTextField from "../components/TextFields/EmailTextField";
import PasswordTextField from "../components/TextFields/PasswordTextField";
import UserContext from "../context";
import { getUser } from "../services/user";

export default function LoginPage() {
  const { setUser } = useContext(UserContext);
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
          <EmailTextField setEmail={setEmail} />
          <PasswordTextField setPassword={setPassword} margin="normal" />
          <FormControlLabel
            control={<Checkbox value={"remember"} />}
            label={"Remember me"}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>
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
