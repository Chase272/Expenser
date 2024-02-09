import { Search } from "@mui/icons-material";
import { Box, Container, Grid, TextField } from "@mui/material";
import React from "react";
import SortButton from "./SortButton";

const SearchBar = () => {
  return (
    <Container maxWidth="md">
      <Grid container alignItems="flex-end" spacing={2}>
        <Grid item>
          <Search sx={{ color: "action.active" }} />
        </Grid>
        <Grid item xs>
          <TextField
            id="input-with-sx"
            label="Search"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item>
          <SortButton />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchBar;
