import { Card, Container, List, Typography } from "@mui/material";
import React from "react";
import TransactionCard from "./TransactionCard";

function TransactionsGroup() {
  return (
    <Container>
      <Typography>Transcations</Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </List>
    </Container>
  );
}

export default TransactionsGroup;
