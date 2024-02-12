import { Box, Typography } from "@mui/material";
import LineChartComponent from "../Charts/SpendingsChart";

function ChartGroup() {
  return (
    <Box style={{ backgroundColor: "" }} paddingY={4}>
      <Typography>Line Chart</Typography>
      <LineChartComponent />
    </Box>
  );
}

export default ChartGroup;
