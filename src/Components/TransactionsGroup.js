import { Card, Container, List, Stack, Typography } from "@mui/material";
import React from "react";
import TransactionCard from "./TransactionCard";

function TransactionsGroup() {
  return (
    <Container disableGutters>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        paddingX={2}
        alignItems={"center"}
      >
        <Typography variant="h5">Transcations</Typography>
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
