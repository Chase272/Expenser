import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "./Sidebar";
import TransactionsPage from "./TransactionsPage";
import SettingsPage from "./SettingsPage";
import DashboardGroup from "./DashboardGroup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function Dashboard() {
  return (
    <Grid container direction={"row"}>
      <Grid width={"30%"} style={{ backgroundColor: "" }}>
        <Sidebar />
      </Grid>
      <Routes>
        <Route path="/" element={<DashboardGroup />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Grid>
  );
}

export default Dashboard;
