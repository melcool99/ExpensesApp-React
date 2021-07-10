import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isActive, setIsActive] = useState("false");
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsActive(false);
  };

  const addNewExpense = () => {
    setIsActive(true);
  };

  const cancelAddExpense = () => {
    setIsActive(false);
  };

  return (
    <div className="new-expense">
      {!isActive ? (
        <button onClick={addNewExpense}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancelExpense={cancelAddExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
