import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import ChartGroup from "./ChartGroup";
import TransactionsGroup from "./TransactionsGroup";

function DashboardGroup() {
  console.log("ese");

  return (
    <Grid
      container
      direction={"row"}
      // justifyContent={"space-between"}
      alignItems={"flex-start"}
    >
      <Grid item>
        <ChartGroup />
      </Grid>
      <Grid item width={"25%"}>
        <TransactionsGroup />
      </Grid>
    </Grid>
  );
}

export default DashboardGroup;
