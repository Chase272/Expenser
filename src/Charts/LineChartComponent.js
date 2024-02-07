import React from "react";
import { LineChart, Line, XAxis, YAxis, Area, Tooltip } from "recharts";

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
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <Area type="monotone" dataKey="value" fill="#8884d8" fillOpacity={0.5} />
    </LineChart>
  );
}

export default LineChartComponent;
