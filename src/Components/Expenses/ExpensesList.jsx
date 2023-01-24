import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

function ExpensesList(props) {
  if (props.items.length == 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.items.map((ele) => {
          return (
            <ExpenseItem
              title={ele.title}
              amount={ele.amount}
              date={ele.date}
              key={ele.id}
            />
          );
        })}
      </ul>
    );
  }
}

export default ExpensesList;
