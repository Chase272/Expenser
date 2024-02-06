import React from "react";
import {
  LineChart,
  ChartsAxis,
  Series,
  useTheme,
  MarkElement,
} from "@mui/x-charts";

const data = [
  { month: "Jan", value: 1200 },
  { month: "Feb", value: 1500 },
  { month: "Mar", value: 1800 },
  { month: "Apr", value: 2000 },
  { month: "May", value: 1700 },
  { month: "Jun", value: 1900 },
];
function LineChartComponent() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      width={500}
      height={300}
    />
  );
}

export default LineChartComponent;
