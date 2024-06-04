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

import React, { useEffect } from "react";

function TransactionCard({
  Name,
  Date,
  Category,
  Credit,
  Debit,
  onClickFuntion,
}) {
  const Amount = Credit ? Credit : Debit;

  const TypeOfTransaction = Credit ? "Credit" : "Debit";
  const chipColor = Credit ? "green" : "red";
  return (
    <Link component="div" underline="none" onClick={onClickFuntion}>
      <ListItem component={Button} divider={true} alignItems="center">
        <ListItemAvatar>
          <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fburger_5787016&psig=AOvVaw2E21_MuaJLnXgmTPDi5HLN&ust=1706894031307000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPC794jSioQDFQAAAAAdAAAAABAE" />
        </ListItemAvatar>
        <ListItemText
          primary={Name}
          secondary={Date}
          primaryTypographyProps={{
            style: {
              fontFamily: "sans-serif",
              fontSize: "14px",
              color: "black",
            },
          }}
        />
        <Chip
          label={TypeOfTransaction}
          sx={{ color: "white", backgroundColor: chipColor  }}
        />

        <ListItemText
          primary={
            <Typography align="right" color={"black"}>
              {Amount}
            </Typography>
          }
        />
      </ListItem>
    </Link>
  );
}

export default TransactionCard;
