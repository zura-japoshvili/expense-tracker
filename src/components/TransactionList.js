import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalStates';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  
  return (
    <>
        <h4>History</h4>
        <ul id='list' className='list'>
          {
            transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))
          }
        </ul>
    </>
  )
}
