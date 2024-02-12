import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";

function TransactionCard() {
  return (
    <ListItem divider={true} alignItems="center">
      <ListItemAvatar>
        <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fburger_5787016&psig=AOvVaw2E21_MuaJLnXgmTPDi5HLN&ust=1706894031307000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPC794jSioQDFQAAAAAdAAAAABAE" />
      </ListItemAvatar>
      <ListItemText
        primary="Transcation Name"
        secondary="Time"
        primaryTypographyProps={{ style: { fontWeight: "bold" } }}
      />
      <ListItemText primary={<Typography align="right">$22</Typography>} />
    </ListItem>
  );
}

export default TransactionCard;
