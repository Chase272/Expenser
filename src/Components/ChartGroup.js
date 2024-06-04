import { Box, Stack, Typography } from "@mui/material";
import LineChartComponent from "../Charts/SpendingsChart";
import BalanceCard from "./BalanceCard";
import CategorySpendCard from "./CategorySpendCard";

function ChartGroup() {
  return (
    <Box>
      <Box>
        <Typography variant="h5" textAlign={"left"} paddingBottom={4}>
          Analysis
        </Typography>
        <LineChartComponent />
      </Box>
      <Box>
        <Typography
          variant="h6"
          fontSize={"14px"}
          textAlign={"left"}
          paddingY={2}
          color={"grey"}
        >
          <b> Where you spend your money ? </b>
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
