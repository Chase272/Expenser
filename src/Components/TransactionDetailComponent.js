import {
  Avatar,
  Button,
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
import { useEffect } from "react";

function TransactionDetailComponent({ name, description, balance, category }) {
  // console.log(category);

  const [value, setValue] = useState("");
  const [editable, setEditable] = useState(false);
  const [detailCardCategory, setDetailCardCategory] = useState(category);

  useEffect(() => {
    setDetailCardCategory(category);
  }, [category]);
  const changeSingleTransactionbuttonHandler = () => {
    setValue("");
    setEditable(!editable);
    fetch("http://localhost:3001/details/single/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, detailCardCategory }),
    });
  };

  const changeMultipleTransactionbuttonHandler = () => {
    console.log(detailCardCategory);
    setValue("");
    setEditable(!editable);
    fetch("http://localhost:3001/details/multiple/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, detailCardCategory }),
    });
  };
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
            {editable ? (
              <Stack>
                <TextField
                  value={value}
                  size="small"
                  onChange={(event) => {
                    setDetailCardCategory(event.target.value);
                    setValue(event.target.value);
                  }}
                  // helperText="Press Enter To Finish"
                  // onKeyDown={(event) => {
                  //   if (event.key === "Enter") {
                  //     setEditable(!editable);
                  //   }
                  // }}
                />

                <Button
                  size="small"
                  onClick={changeSingleTransactionbuttonHandler}
                >
                  Change For This Transaction
                </Button>
                <Button
                  size="small"
                  onClick={changeMultipleTransactionbuttonHandler}
                >
                  Change For All Transactions with same person
                </Button>
              </Stack>
            ) : (
              <Chip
                label={detailCardCategory}
                clickable
                sx={{ padding: 2, marginTop: 2, marginBottom: -2 }}
                onClick={() => {
                  setEditable(!editable);
                }}
              />
            )}
          </Stack>
        </Stack>
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
            primary={description.split("/")[4]}
            secondary="Bank Name"
          ></ListItemText>
        </ListItem>
      </Stack>
    </Paper>
  );
}

export default TransactionDetailComponent;
