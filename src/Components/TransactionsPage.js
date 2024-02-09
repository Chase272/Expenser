import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TransactionCard from "./TransactionCard";
import SearchBar from "./SearchBar";
import { Tab, Tabs } from "@mui/material";

function TransactionsPage() {
  return (
    <Grid container direction="column" width={"65%"}>
      <Grid item width={"65%"}>
        <SearchBar />
      </Grid>
      <Grid item>
        <Tabs
          // onChange={handleChange}
          // value={value}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Grid>
      <Grid item>
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        {/* Add more TransactionCard components as needed */}
      </Grid>
    </Grid>
  );
}

export default TransactionsPage;
