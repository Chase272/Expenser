import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import ChartGroup from "../Components/ChartGroup";
import TransactionsGroup from "../Components/TransactionsGroup";
import { Stack } from "@mui/material";
import BalanceCard from "../Components/BalanceCard";

function DashboardPage() {
  console.log("ese");

  return (
    <Grid
      container
      direction={"row"}
      // justifyContent={"space-between"} "#f7f7f5"
      // alignItems={"flex-start"}
      columnGap={3}
    >
      <Grid item padding={2} zIndex={-1} sx={{ backgroundColor: "#f7f7f5" }}>
        <ChartGroup />
      </Grid>

      <Grid
        item
        width={"30%"}
        padding={3}
        // sx={{ backgroundColor: "red" }}
        justifyContent={"flex-start"}
      >
        <Grid item>
          <TransactionsGroup />
        </Grid>

        {/* <BalanceCard /> */}
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
