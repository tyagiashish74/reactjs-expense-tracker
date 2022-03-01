import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//Initial State

const initialState =  {
  transactions: [  ]
  //dummy transactions ,if you want to use put in square bracekets[]
  // { id: 1, text: "Flower", amount: -20 },
  // { id: 2, text: "Salary", amount: 300 },
  // { id: 3, text: "Book", amount: -10 },
  // { id: 4, text: "Camera", amount: 150 },
}

//Create Context
export const GlobalContext = createContext(initialState);

//Privider component
export const GlobalProvider = ({ children }) =>{
    const[state, dispatch] = useReducer(AppReducer, initialState);
 
 //Actions
 function deleteTransaction(id){
   dispatch({
     type:'DELETE_TRANSACTION',
     payload: id
   });
 }

 //addTransaction
 
 function addTransaction(transaction){
  dispatch({
    type:'ADD_TRANSACTION',
    payload: transaction
  });
}

 
 return(<GlobalContext.Provider 
        value={{
          transactions: state.transactions,
          deleteTransaction,
          addTransaction
          }}>
     {children}
    </GlobalContext.Provider>);
}
