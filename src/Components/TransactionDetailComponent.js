import {
  Avatar,
  Chip,
  InputAdornment,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { Balance, Close, Create, List, Wallet } from "@mui/icons-material";

function TransactionDetailComponent({ name, description, balance, category }) {
  const [value, setValue] = useState("Food");
  const [editable, setEditable] = useState(false);
  return (
    <Paper elevation={2} style={{ marginLeft: 30, marginTop: 10 }}>
      <Stack margin={3} paddingX={1}>
        <Stack
          alignItems={"center"}
          // style={{ backgroundColor: "red" }}
          width={"100%"}
          paddingY={5}
        >
          <Avatar
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fburger_5787016&psig=AOvVaw2E21_MuaJLnXgmTPDi5HLN&ust=1706894031307000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPC794jSioQDFQAAAAAdAAAAABAE"
            sx={{ width: 56, height: 56, margin: 5, padding: 2 }}
          />
          <Typography variant="h6">{name}</Typography>
          <Typography
            variant="h8"
            style={{
              maxWidth: "400px",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {description}
          </Typography>
          <Stack direction={"row"}>
            <Chip label={value} />

            <Chip
              icon={editable ? <Close /> : <Create sx={{ fontSize: 15 }} />}
              clickable
              sx={{ paddingLeft: 2 }}
              onClick={() => {
                setEditable(!editable);
              }}
            />
          </Stack>
          {editable && (
            <TextField
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          )}
        </Stack>
        <ListItem></ListItem>
        <ListItem>
          <ListItemAvatar>
            <Wallet />
          </ListItemAvatar>
          <ListItemText
            primary={balance}
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
