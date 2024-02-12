import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import { List, Wallet } from "@mui/icons-material";

function TransactionDetailComponent() {
  return (
    <Paper elevation={4} style={{ marginLeft: 60 }}>
      <Stack margin={3} paddingX={5}>
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

        <ListItem>
          <ListItemAvatar>
            <Wallet />
          </ListItemAvatar>
          <ListItemText
            primary="23004Rs"
            secondary="Available Amount"
          ></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <List />
          </ListItemAvatar>
          <ListItemText
            primary="BXXS-DAW353-S45SC"
            secondary="Invoice"
          ></ListItemText>
        </ListItem>
      </Stack>
    </Paper>
  );
}

export default TransactionDetailComponent;
