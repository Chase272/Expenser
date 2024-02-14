import { Button, Card, Paper, Stack, Typography } from "@mui/material";
import React from "react";

function BalanceCard() {
  return (
    <Paper>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Typography variant="h8">Total Balance</Typography>

        <Typography variant="h6">Amount</Typography>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button>Income</Button>
          <Button>Expense</Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default BalanceCard;
