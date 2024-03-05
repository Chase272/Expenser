import TransactionCard from "./TransactionCardComponent";
import { Box, Card, Container, List, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchTopTransactions } from "../redux/TransactionActions";
import { useDispatch, useSelector } from "react-redux";

function TransactionsGroup() {
  const transactions = useSelector((state) => {
    return state.data;
  });
  const loading = useSelector((state) => {
    return state.loading;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopTransactions());
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
        {!loading &&
          transactions.map((transaction) => {
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
