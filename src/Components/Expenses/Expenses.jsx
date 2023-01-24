import React, { useEffect, useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2019");

  function onSelectHandler(year) {
    setSelectedYear(year);
  }

  const filteredArrayAsperYear = props.expensesArr.filter((ele) => {
    return ele.date.getFullYear().toString() === selectedYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          onSelect={onSelectHandler}
          selectedYear={selectedYear}
        />
    <ExpenseChart filteredArray={filteredArrayAsperYear}/>
        <ExpensesList items={filteredArrayAsperYear} />
      </Card>
    </>
  );
}

export default Expenses;
