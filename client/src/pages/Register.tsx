import { Avatar, Box, Container, Grid, Link, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../components/Buttons/LoginButton";
import LoginCheckbox from "../components/Inputs/Checkboxes/";
import EmailInput from "../components/Inputs/TextFields/EmailInput";
import FirstnameInput from "../components/Inputs/TextFields/FirstnameInput";
import LastnameInput from "../components/Inputs/TextFields/LastnameInput";
import PasswordInput from "../components/Inputs/TextFields/PasswordInput";
import Footer from "../components/Navigation/Footer";
import { createUser } from "../services/user";
import { avatar, userForm } from "../styles";
import emptyDevResume from "../utils/emptyDevResume";

export default function Register() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createUser({
      firstName,
      lastName,
      email,
      password,
      resume: emptyDevResume,
    });
    navigate("/");
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={userForm}>
        <Avatar sx={avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FirstnameInput setFirstname={setFirstname} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LastnameInput setLastname={setLastname} />
            </Grid>
            <Grid item xs={12}>
              <EmailInput setEmail={setEmail} />
            </Grid>
            <Grid item xs={12}>
              <PasswordInput margin="none" />
            </Grid>
            <Grid item xs={12}>
              <LoginCheckbox
                value="allowExtraEmails"
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <LoginButton text="Sign up" />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
}
