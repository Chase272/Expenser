import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

function UserCard() {
  return (
    <Stack direction="row">
      <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></Avatar>
      <Box>
        <Typography variant="h6">Username</Typography>
        <Typography variant="h6">Welcome</Typography>
      </Box>
    </Stack>
  );
}

export default UserCard;
