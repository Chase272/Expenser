import { Button, Card, Paper, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

function BalanceCard() {
  return (
    <Paper
      sx={{ paddingTop: 1, color: "White", backgroundColor: "#121212" }}
      elevation={3}
    >
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Typography variant="h8">Total Balance</Typography>

        <Typography variant="h5">₹4000</Typography>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ backgroundColor: "#5c85e7" }}
        borderRadius={0}
      >
        <Button
          sx={{
            backgroundColor: "#5c85e7",
            color: "white",
            paddingX: 10,
            borderRadius: 0,
          }}
        >
          Income
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            backgroundColor: "#5c85e7",
            color: "white",
            paddingX: 10,
            borderRadius: 0,
          }}
        >
          Expense
        </Button>
      </Stack>
    </Paper>
  );
}

export default BalanceCard;
