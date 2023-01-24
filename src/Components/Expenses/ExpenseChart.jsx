import React from "react";
import Chart from "../Chart/Chart";

function ExpenseChart(props) {
  let dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.filteredArray) {
    let expenseMonth = expense.date.getMonth();
    console.log(expenseMonth);
    dataPoints[expenseMonth].value += expense.amount;
    // console.log(expense.amount);
    console.log(dataPoints[dataPoints.length - 1]);
  }

  return (
    <>
      <Chart dataPoints={dataPoints} />
    </>
  );
}

export default ExpenseChart;
