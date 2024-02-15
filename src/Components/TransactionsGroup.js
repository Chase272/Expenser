import { Box, Card, Container, List, Stack, Typography } from "@mui/material";
import React from "react";
import TransactionCard from "./TransactionCard";

function TransactionsGroup() {
  return (
    // <Container
    //   disableGutters
    //   style={{
    //     backgroundColor: "blue",
    //   }}
    // >

    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
        borderBottom={2}
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
    </Box>
    // </Container>
  );
}

export default TransactionsGroup;
