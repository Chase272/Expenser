import TransactionCard from "./TransactionCardComponent";
import { Box, Card, Container, List, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function TransactionsGroup() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/top-transactions")
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
        {transactions.map((transaction) => {
          const dateObject = new Date(transaction.Date);
          const newDateString = dateObject.toString().slice(0, 15);
          return (
            <TransactionCard
              Name={transaction.Name}
              Date={newDateString}
              Category={transaction.Category}
              Debit={transaction.Debit}
              Credit={transaction.Credit}
            />
          );
        })}
      </List>
    </Box>
  );
}

export default TransactionsGroup;
