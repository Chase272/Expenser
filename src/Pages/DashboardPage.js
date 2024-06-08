import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import ChartGroup from "../Components/ChartGroup";
import TransactionsGroup from "../Components/TopTransactionsGroup";
import { Stack } from "@mui/material";
import BalanceCard from "../Components/BalanceCard";

function DashboardPage() {
  return (
    <Grid
      container
      direction={"row"}
      // justifyContent={"space-between"} "#f7f7f5"
      // alignItems={"flex-start"}
      columnGap={3}
      width={"75%"}
    >
      <Grid item padding={2} zIndex={-1}>
        <ChartGroup />
      </Grid>

      <Grid container width={"40%"} padding={3} justifyContent={"center"}>
        <Grid item width={"100%"}>
          <TransactionsGroup />
        </Grid>
        <Grid item width={"100%"}>
          <BalanceCard />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
