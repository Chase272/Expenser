import styled from "@emotion/styled";
import {
  FoodBank,
  Group,
  Flight,
  Dining,
  DiningOutlined,
  LocalDining,
  AddToQueue,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  LinearProgress,
  Stack,
  Typography,
  linearProgressClasses,
} from "@mui/material";
import React from "react";

function CategorySpendCard({ categoryName, Amount, Percentage }) {
  if (categoryName === "") {
    categoryName = "Others";
  }

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#414141",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#5c85e7",
    },
  }));

  const IconDesignObj = {
    fontSize: 50,
    backgroundColor: "#f7f7f5",
    borderRadius: "10px",
    padding: "11px",
    marginBottom: "5px",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
    color: "#000000",
  };

  return (
    <Card
      sx={{
        width: 180,
        marginX: 1,
        backgroundColor: "#181818",
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Stack>
          {categoryName === "Person" && <Group sx={IconDesignObj} />}
          {categoryName === "Travel" && <Flight sx={IconDesignObj} />}
          {categoryName === "Food" && <LocalDining sx={IconDesignObj} />}
          {categoryName === "Others" && <AddToQueue sx={IconDesignObj} />}
          <Typography
            variant="h8"
            textAlign={"left"}
            paddingTop={1}
            sx={{ fontSize: "14px" }}
          >
            {categoryName}
          </Typography>
        </Stack>
      </CardContent>
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          backgroundColor: "black",
          height: 63,
          borderRadius: 2,
          paddingTop: 2,
          paddingX: 1,
        }}
      >
        <BorderLinearProgress
          variant="determinate"
          value={Math.round(Percentage)}
        />
        <Stack direction={"row"} justifyContent={"space-between"} paddingY={1}>
          <Typography color={"white"} sx={{ fontSize: "13px" }}>
            {Math.round(Percentage)}%
          </Typography>
          <Typography color={"white"} sx={{ fontSize: "13px" }}>
            {Amount}Rs
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
}

export default CategorySpendCard;
