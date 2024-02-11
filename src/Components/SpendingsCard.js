import { Button, Card, Stack, Typography } from "@mui/material";
import React from "react";

function SpendingsCard() {
  return (
    <Card>
      <Stack alignItems={"flex-start"}>
        <Typography variant="h8">Total Balance</Typography>

        <Typography variant="h6">Amount</Typography>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button>Income</Button>
          <Button>Expense</Button>
        </Stack>
      </Stack>
    </Card>
  );
}

export default SpendingsCard;
