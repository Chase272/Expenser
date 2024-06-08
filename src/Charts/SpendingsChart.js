import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Area, Tooltip } from "recharts";
import { BarChart } from "@mui/x-charts/BarChart";

function SpendingsChart() {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const incomeArray = [];
  const expenseArray = [];
  const monthsArray = [];

  const monthsObj = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  useEffect(() => {
    fetch("http://localhost:3001/charts/transactions")
      .then((response) => response.json())
      .then((data) => {
        setChartData(data);
        setIsLoading(false); // Set loading state to false after data is loaded
      })
      .catch((error) => console.log(error));
  }, []);

  for (let transactions of chartData) {
    incomeArray.push(transactions.income);
    expenseArray.push(transactions.expense);
    monthsArray.push(monthsObj[transactions.month]);
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div> // Display loading message while data is being fetched
      ) : (
        <BarChart
          xAxis={[{ scaleType: "band", data: ["January", "Febuary"] }]}
          series={[{ data: incomeArray }, { data: expenseArray }]}
          width={600}
          height={350}
        />
      )}
    </>
  );
}

export default SpendingsChart;
