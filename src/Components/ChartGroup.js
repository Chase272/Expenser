import { Box, Typography } from "@mui/material";
import LineChartComponent from "../Charts/LineChartComponent";

function ChartGroup() {
  return (
    <Box>
      <Typography>Line Chart</Typography>
      <LineChartComponent />
    </Box>
  );
}

export default ChartGroup;
