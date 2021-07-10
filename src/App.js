import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense"
import {useState} from "react"


const initialExpenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 290,
    date: new Date(2021, 6, 8),
  },
  { id: "e2", title: "Dentist", amount: 500.25, date: new Date(2021, 7, 15) },
  { id: "e3", title: "Bills", amount: 199.75, date: new Date(2022, 7, 22) },
  {
    id: "e4",
    title: "Gym Membership",
    amount: 19.75,
    date: new Date(2021, 7, 28),
  },
];

function App() {
  const [expenses, setExpanses] = useState(initialExpenses)

  const addExpenseHandler = expense => {
    setExpanses(prevExpenses => { return [expense, ...prevExpenses]})
  }

  


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/> 
    </div>
  );
  
}

export default App;
