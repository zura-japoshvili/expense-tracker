import React, { createContext, useReducer } from "react";
import appReducer from './AppReducer';


// Initial State
const InitialState = {
    transactions: [
        {id: 1, text: "Flower", amount: -24.20},
        {id: 2, text: "Salary", amount: 300.00}
    ]
}

// Create Context
export const GlobalContext = createContext(InitialState);

// Provider component
export const GlobalProvider = ( { children } ) => {
    const [ state, dispatch ] = useReducer(appReducer, InitialState);

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions }}>
            { children }
        </GlobalContext.Provider>
    )
}