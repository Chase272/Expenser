import styled from "@emotion/styled";
import { FoodBank, LocalDining } from "@mui/icons-material";
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

function CategorySpendCard() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#414141",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#fefefe",
    },
  }));

  return (
    <Card sx={{ width: 180 }}>
      <CardContent>
        <Stack>
          <LocalDining
            sx={{
              fontSize: 50,
              backgroundColor: "#f7f7f5",
              borderRadius: "10px",
              padding: "11px",
              marginBottom: "5px",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
              color: "blue",
            }}
          />

          <Typography
            variant="h8"
            textAlign={"left"}
            paddingTop={1}
            sx={{ fontSize: "14px" }}
          >
            Food and Drinks
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
        <BorderLinearProgress variant="determinate" value={50} />
        <Stack direction={"row"} justifyContent={"space-between"} paddingY={1}>
          <Typography color={"white"} sx={{ fontSize: "13px" }}>
            50%
          </Typography>
          <Typography color={"white"} sx={{ fontSize: "13px" }}>
            200Rs
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
}

export default CategorySpendCard;
