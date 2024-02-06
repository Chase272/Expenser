import "./App.css";
import UserCard from "./Components/UserCard";
import SpendingsCard from "./Components/SpendingsCard";
import TransactionsGroup from "./Components/TransactionsGroup";
import Grid from "@mui/material/Unstable_Grid2";
import Dashboard from "./Components/Dashboard";
import ChartGroup from "./Components/ChartGroup";

function App() {
  return (
    <div className="App">
      <UserCard />
      <SpendingsCard />
      <Grid
        container
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        <Grid item>
          <Dashboard />
        </Grid>

        <Grid item>
          <ChartGroup />
        </Grid>
        <Grid item width={"25%"}>
          <TransactionsGroup />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
