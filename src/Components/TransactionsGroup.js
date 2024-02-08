import { Card, Container, List, Stack, Typography } from "@mui/material";
import React from "react";
import TransactionCard from "./TransactionCard";

function TransactionsGroup() {
  return (
    <Container
      disableGutters
      style={{ display: "inline-block", width: "160%" }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        paddingX={2}
        alignItems={"flex-end"}
      >
        <Typography variant="h5">Top Transcations</Typography>
        <Typography variant="h7">See All</Typography>
      </Stack>
      <List>
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
