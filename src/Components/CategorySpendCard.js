import styled from "@emotion/styled";
import { FoodBank } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
  linearProgressClasses,
} from "@mui/material";
import React from "react";

function CategorySpendCard() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  return (
    <Card>
      <CardContent>
        <FoodBank />
        <Typography>Food and Drinks</Typography>
      </CardContent>

      <Box
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ backgroundColor: "black", height: 30, borderRadius: 2 }}
      >
        <BorderLinearProgress variant="determinate" value={20} />
      </Box>
    </Card>
  );
}

export default CategorySpendCard;
