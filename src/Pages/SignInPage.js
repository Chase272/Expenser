import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FileUploader from "../Components/FileUploader";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Add your sign-up logic here
    console.log("Sign up button clicked");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        width: "100%",
      }}
    >
      <Paper sx={{ padding: 10, backgroundColor: "#181818" }}>
        <Stack gap={3}>
          <h1>Sign In</h1>
          <TextField
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <Link to="/dashboard/">
            <Button variant="contained" color="primary" onClick={handleSignUp}>
              Sign In
            </Button>
          </Link>
          <Typography>
            <Link>Don't have a account?</Link>
          </Typography>
        </Stack>
      </Paper>
      <FileUploader />
    </Stack>
  );
};

export default SignUpPage;
