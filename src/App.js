import Expenses from "./Components/Expenses/Expenses";
import ExpensesFilter from "./Components/Expenses/ExpensesFilter/ExpensesFilter";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";

const Dummy__expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expensesArr, setExpensesArr] = useState(Dummy__expenses);

  function expenseReceiverHandler(expenseObject) {
    setExpensesArr((prevState) => {
      return [expenseObject, ...prevState];
    });
    // console.log(expenseObject);
    // console.log(expensesArr);
  }

  return (
    <div>
      <NewExpense onSaveExpense={expenseReceiverHandler} />
      <Expenses expensesArr={expensesArr} />
    </div>
  );
}

export default App;
