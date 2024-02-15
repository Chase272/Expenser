import {
  Avatar,
  Box,
  Button,
  Chip,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";

function TransactionCard() {
  return (
    <Link component="div" underline="none">
      <ListItem component={Button} divider={true} alignItems="center">
        <ListItemAvatar>
          <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fburger_5787016&psig=AOvVaw2E21_MuaJLnXgmTPDi5HLN&ust=1706894031307000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPC794jSioQDFQAAAAAdAAAAABAE" />
        </ListItemAvatar>
        <ListItemText
          primary="Transaction Name"
          secondary="Time"
          primaryTypographyProps={{
            style: {
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            },
          }}
        />
        <Chip
          label="Travel"
          sx={{ color: "white", backgroundColor: "green" }}
        />
        <ListItemText
          primary={
            <Typography align="right" color={"black"}>
              $22
            </Typography>
          }
        />
      </ListItem>
    </Link>
  );
}

export default TransactionCard;
