import React, { createContext, useReducer } from "react";
import appReducer from './AppReducer';


// Initial State
const InitialState = {
    transactions: [
        {id: 1, text: "Flower", amount: -24.20},
        {id: 2, text: "Salary", amount: 300.00},
        {id: 3, text: "Income", amount: 700.12},
        {id: 4, text: "Books", amount: -77.30}
    ]
}

// Create Context
export const GlobalContext = createContext(InitialState);

// Provider component
export const GlobalProvider = ( { children } ) => {
    const [ state, dispatch ] = useReducer(appReducer, InitialState);

  // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    
    return (<GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
        {   children}
        </GlobalContext.Provider>
    );
}