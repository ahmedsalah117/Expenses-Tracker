import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  // You can use multiple states like this

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [id, setID] = useState(4);
  // Or you can use a single state like this

  // const[userInput,setUserInput] = useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // })

  function titleChangeHandler(event) {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);

    //you can update the state this way  which is better because as you know that React schedules state update ,so if we have multiple scheduled state updates this might conflict in some scenarios , however if you update it this way with the anonymous function that always hold the previous state as an argument ,so this guarantees that you will always be using the most recent state version not an outdated one. However, I personally prefer to use multiple states in this situation.

    // setUserInput((prevState)=>{
    //   return {...prevState,enteredTitle:event.target.value}
    // })

    //Or you can update it this way ...

    // setUserInput({
    //   ...userInput,//This is to guarantee that the other 2 object props won't be lost.
    //   enteredTitle:event.target.value
    // })
  }

  function amountChangeHandler(event) {
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);
    // setUserInput((prevState)=>{
    //   return{...prevState,enteredAmount:event.target.value}
    // })
  }
  function dateChangeHandler(event) {
    // console.log(event.target.value);
    setEnteredDate(event.target.value);
    // setUserInput((prevState)=>{
    //   return{...prevState,enteredDate:event.target.value}
    // })
  }

  function submitHandler(event) {
    event.preventDefault();

    setID((prevState) => {
      return prevState + 1;
    });

    let expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      id: id,
    };

    props.onSaveExpenseData(expenseData);
    // console.log(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
              required
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
              required
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
              required
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button
            onClick={() => {
              props.onCancel();
            }}
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={(event) => {
              submitHandler(event);
            }}
            type="submit"
          >
            Add New Expense
          </button>
        </div>
      </form>
    </>
  );
}

export default ExpenseForm;
