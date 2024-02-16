import React from "react";
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

function ExpensesPage() {
  // Sample data
  const expenses = [
    {
      id: 1,
      name: "Expense 1",
      date: "2022-01-01",
      category: "Category 1",
      amount: 100,
    },
    {
      id: 2,
      name: "Expense 2",
      date: "2022-01-02",
      category: "Category 2",
      amount: 200,
    },
    // Add more expenses here
  ];

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
              {expenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell>{expense.id}</TableCell>
                  <TableCell>{expense.name}</TableCell>
                  <TableCell>{expense.date}</TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell>{expense.amount}</TableCell>
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
