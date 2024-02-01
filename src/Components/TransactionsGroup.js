import { Container, Typography } from "@mui/material";
import React from "react";
import TransactionCard from "./TransactionCard";

function TransactionsGroup() {
  return (
    <Container>
      <Typography>Transcations</Typography>
      <TransactionCard />
      <TransactionCard />
      <TransactionCard />
      <TransactionCard />
      <TransactionCard />
    </Container>
  );
}

export default TransactionsGroup;
