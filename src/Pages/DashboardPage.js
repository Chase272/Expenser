import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import ChartGroup from "../Components/ChartGroup";
import TransactionsGroup from "../Components/TransactionsGroup";

function DashboardPage() {
  console.log("ese");

  return (
    <Grid
      container
      direction={"row"}
      // justifyContent={"space-between"}
      alignItems={"flex-start"}
    >
      <Grid item padding={3} sx={{ backgroundColor: "#f7f7f5" }}>
        <ChartGroup />
      </Grid>

      <Grid item width={"30%"} padding={3}>
        <TransactionsGroup />
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
