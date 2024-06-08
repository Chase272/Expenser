import { Apple, Flight, Padding, Person } from "@mui/icons-material";
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
  const IconDesignObj = {
    backgroundColor: "grey",
    borderRadius: "10px",
  };
  const TypeOfTransaction = Credit ? "Credit" : "Debit";
  const chipColor = "#5c85e7";

  const newAmount = Debit ? "-" + Amount : "" + Amount;
  let avatarIcon;
  if (Category === "Person") {
    avatarIcon = <Person />;
  } else if (Category === "Travel") {
    avatarIcon = <Flight />;
  } else {
    avatarIcon = <Apple />;
  }

  return (
    <Link component="div" underline="none" onClick={onClickFuntion}>
      <ListItem component={Button} divider={true} alignItems="center">
        {/* <ListItemAvatar>{avatarIcon}</ListItemAvatar> */}
        <ListItemText
          primary={Name}
          secondary={Date}
          primaryTypographyProps={{
            style: {
              fontFamily: "sans-serif",
              fontSize: "14px",
              fontWeight: "light",
            },
          }}
        />
        <Chip
          label={TypeOfTransaction}
          sx={{ color: "white", backgroundColor: chipColor }}
        />

        <ListItemText
          primary={
            <Typography align="right" color={"white"}>
              {newAmount + "₹"}
            </Typography>
          }
        />
      </ListItem>
    </Link>
  );
}

export default TransactionCard;
