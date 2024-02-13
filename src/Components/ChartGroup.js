import { Box, Stack, Typography } from "@mui/material";
import LineChartComponent from "../Charts/SpendingsChart";
import SpendingsCard from "./SpendingsCard";
import CategorySpendCard from "./CategorySpendCard";

function ChartGroup() {
  return (
    <Box>
      <Box>
        <Typography variant="h5" textAlign={"left"} paddingBottom={4}>
          Line Chart
        </Typography>
        <LineChartComponent />
      </Box>
      <Box>
        <Typography variant="h8" textAlign={"left"} paddingTop={4}>
          Where you spend your money
        </Typography>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <CategorySpendCard />
          <CategorySpendCard />
          <CategorySpendCard />
        </Stack>
      </Box>
    </Box>
  );
}

export default ChartGroup;
