import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Area, Tooltip } from "recharts";
import { BarChart } from "@mui/x-charts/BarChart";

function SpendingsChart() {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch("http://localhost:3001/charts/transactions")
      .then((response) => response.json())
      .then((data) => {
        setChartData(data);
        setIsLoading(false); // Set loading state to false after data is loaded
      })
      .catch((error) => console.log(error));
  }, []);

  const incomeArray = [];
  const expenseArray = [];
  for (let transactions of chartData) {
    incomeArray.push(transactions.income);
    expenseArray.push(transactions.expense);
  }

  console.log(expenseArray);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div> // Display loading message while data is being fetched
      ) : (
        <BarChart
          xAxis={[{ scaleType: "band", data: ["January", "Febuary"] }]}
          series={[{ data: incomeArray }, { data: expenseArray }]}
          width={500}
          height={300}
        />
      )}
    </>
  );
}

export default SpendingsChart;
