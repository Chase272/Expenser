import React, { useState } from "react";
import {
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Stack,
} from "@mui/material";
import { useEffect } from "react";

function ExpensesPage() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/transactions/debit")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTransactions(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // Function to sort expenses by a specific column
  const sortExpenses = (column) => {
    // Implement sorting logic here
  };

  // Function to group expenses by transaction date
  const groupExpensesByDate = (groupBy) => {
    // Implement grouping logic here
  };

  return (
    <Grid container direction="column" width={"75%"} padding={1} paddingTop={2}>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID no</TableCell>
                <TableCell>Transaction Name</TableCell>
                <TableCell>Transaction Date</TableCell>
                <TableCell>Transaction Category</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction._id}>
                  <TableCell>{transaction._id}</TableCell>
                  <TableCell>{transaction.Name}</TableCell>
                  <TableCell>{transaction.Date}</TableCell>
                  <TableCell>{transaction.category}</TableCell>
                  <TableCell>{transaction.Balance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default ExpensesPage;
