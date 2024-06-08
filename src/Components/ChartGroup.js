import { Box, Stack, Typography } from "@mui/material";
import LineChartComponent from "../Charts/SpendingsChart";
import BalanceCard from "./BalanceCard";
import CategorySpendCard from "./CategorySpendCard";
import { useEffect, useState } from "react";

function ChartGroup() {
  const [topThreeCategories, setTopThreeCategories] = useState();
  useEffect(() => {
    fetch("http://localhost:3001/category/byGroup")
      .then((response) => response.json())
      .then((data) => {
        setTopThreeCategories(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching top three categories:", error);
      });
  }, []);
  return (
    <Box>
      <Box>
        <Typography variant="h4" textAlign={"left"}>
          Analysis
        </Typography>
        <LineChartComponent />
      </Box>
      <Box>
        <Typography
          variant="h6"
          fontSize={"14px"}
          textAlign={"left"}
          paddingY={1}
          color={"grey"}
        >
          <b> Where you spend your money ? </b>
        </Typography>
        {topThreeCategories ? (
          <Stack direction={"row"} justifyContent={"space-between"}>
            {topThreeCategories.slice(0, 3).map((category) => (
              <CategorySpendCard
                key={category.category}
                categoryName={category.category}
                Amount={category.totalDebit}
                Percentage={category.percentage}
              />
            ))}
          </Stack>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Box>
    </Box>
  );
}

export default ChartGroup;
