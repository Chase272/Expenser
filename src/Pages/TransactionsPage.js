import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TransactionCard from "../Components/TransactionCardComponent";
import SearchBar from "../Components/SearchBar";
import { Pagination, Stack, Tab, Tabs, Typography } from "@mui/material";
import TransactionDetailComponent from "../Components/TransactionDetailComponent";
import { useState } from "react";
import { useEffect } from "react";

function TransactionsPage() {
  const [transactionData, setTransactionData] = useState([]);

  const [selectedTransction, setSelectedTransction] = useState();
  const [page, setPage] = useState(1);
  const DatesPerPage = 1;

  // console.log(selectedTransction.Category);

  useEffect(() => {
    fetch("http://localhost:3001/transactions/ByDate")
      .then((response) => response.json())
      .then((data) => {
        setTransactionData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const onClickHandler = (transaction) => {
    setSelectedTransction(transaction);
  };

  const startIndex = (page - 1) * DatesPerPage;
  const endIndex = startIndex + DatesPerPage;
  const displayedTransactions = transactionData.slice(startIndex, endIndex);

  return (
    <Stack width={"75%"} direction="row">
      <Grid container direction="column" width={"65%"}>
        <Grid item width={"75%"}>
          <SearchBar />
        </Grid>
        <Grid item>
          <Tabs
            // onChange={handleChange}
            value={1}
            aria-label="Tabs where selection follows focus"
            selectionFollowsFocus
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Grid>

        {displayedTransactions.map((data) => {
          const dateObject = new Date(data._id);
          const newDateString = dateObject.toString().slice(0, 15);

          return (
            <Grid item padding={4}>
              <Typography textAlign={"left"} color={"gray"}>
                {newDateString}
              </Typography>
              {data.transactions.map((transaction, index) => {
                return (
                  <TransactionCard
                    Name={transaction.Name}
                    Date={data._id}
                    Category={transaction.Category}
                    Debit={transaction.Debit}
                    Credit={transaction.Credit}
                    onClickFuntion={() => onClickHandler(transaction)}
                  />
                );
              })}
            </Grid>
          );
        })}
        <Grid item paddingLeft={20}>
          <Pagination
            count={Math.ceil(transactionData.length / DatesPerPage)}
            page={page}
            onChange={handlePageChange}
          />
        </Grid>
      </Grid>
      <Grid container width={"50%"}>
        {selectedTransction && (
          <TransactionDetailComponent
            name={selectedTransction.Name}
            description={selectedTransction.Description}
            balance={selectedTransction.Balance}
            category={selectedTransction.Category}
          />
        )}
      </Grid>
    </Stack>
  );
}

export default TransactionsPage;
