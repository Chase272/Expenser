import { Avatar, Paper, Stack, Typography } from "@mui/material";
import React from "react";

function TransactionDetailComponent() {
  return (
    <Stack
      alignItems={"center"}
    //   style={{ backgroundColor: "red" }}
      width={"100%"}
      paddingY={5}
    >
      <Avatar
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fburger_5787016&psig=AOvVaw2E21_MuaJLnXgmTPDi5HLN&ust=1706894031307000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPC794jSioQDFQAAAAAdAAAAABAE"
        sx={{ width: 56, height: 56, margin: 5, padding: 2 }}
      />
      <Typography variant="h6">Amazon Support</Typography>
      <Typography variant="h8">Date</Typography>
    </Stack>
  );
}

export default TransactionDetailComponent;
