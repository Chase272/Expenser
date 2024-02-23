import TransactionCard from "./TransactionCard";
import { Box, Card, Container, List, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function TransactionsGroup() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/top-transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
        borderBottom={2}
      >
        <Typography variant="h5">Top Transactions</Typography>
        <Typography variant="h7">See All</Typography>
      </Stack>
      <List>
        {transactions.map((transaction) => (
          <TransactionCard
            Name={transaction.Name}
            Date={transaction.Date}
            Category={transaction.Category}
            Debit={transaction.Debit}
            Credit={transaction.Credit}
          />
        ))}
      </List>
    </Box>
  );
}

export default TransactionsGroup;
