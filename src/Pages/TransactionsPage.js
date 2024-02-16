import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TransactionCard from "../Components/TransactionCard";
import SearchBar from "../Components/SearchBar";
import { Pagination, Stack, Tab, Tabs, Typography } from "@mui/material";
import TransactionDetailComponent from "../Components/TransactionDetailComponent";

function TransactionsPage() {
  return (
    <Stack width={"75%"} direction="row">
      <Grid container direction="column" width={"65%"}>
        <Grid item width={"75%"}>
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
        <Grid item padding={4}>
          <Typography textAlign={"left"} color={"gray"}>
            17th Jan,2024
          </Typography>
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          {/* Add more TransactionCard components as needed */}
        </Grid>
        <Grid item padding={4}>
          <Typography textAlign={"left"} color={"gray"}>
            18th Jan,2024
          </Typography>
          <TransactionCard />
          <TransactionCard />
          {/* Add more TransactionCard components as needed */}
        </Grid>
        <Grid item paddingLeft={20}>
          <Pagination count={10} />
        </Grid>
      </Grid>
      <Grid container width={"50%"}>
        <TransactionDetailComponent />
      </Grid>
    </Stack>
  );
}

export default TransactionsPage;
