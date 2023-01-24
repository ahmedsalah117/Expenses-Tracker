import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function onSaveHandler(expenseData) {
    let expenseObject = {
      ...expenseData,
    };
    // console.log(expenseObject);
    props.onSaveExpense(expenseObject);
    setIsEditing(false);
  }

  function isEditingHandler() {
    setIsEditing(true);
  }

  function onCancelHandler() {
    setIsEditing(false);
  }
  return (
    <>
      <div className="new-expense">
        {!isEditing && (
          <button onClick={isEditingHandler}>Add New Expense</button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={onSaveHandler}
            onCancel={onCancelHandler}
          />
        )}
      </div>
    </>
  );
}

export default NewExpense;
