import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "./Sidebar";
import TransactionsPage from "../Pages/TransactionsPage";
import SettingsPage from "../Pages/SettingsPage";
import DashboardPage from "../Pages/DashboardPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import ExpensesPage from "../Pages/ExpensesPage";
import IncomePage from "../Pages/IncomePage";

function Dashboard() {
  return (
    <Grid container direction={"row"}>
      <Grid width={"25%"} style={{ backgroundColor: "" }}>
        <Sidebar />
      </Grid>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Grid>
  );
}

export default Dashboard;
