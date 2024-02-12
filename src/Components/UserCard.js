import {
  Avatar,
  Box,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function UserCard() {
  return (
    <Paper elevation={3}>
      <Stack direction="row" padding={2} alignItems={"flex-end"}>
        <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></Avatar>
        <Box paddingX={2} justifyContent={"flex-end"}>
          <Typography variant="h6">Welcome</Typography>
          <Typography variant="h8" textAlign={"left"}>
            Chase
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}

export default UserCard;
