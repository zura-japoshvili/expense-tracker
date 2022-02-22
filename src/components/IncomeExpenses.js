import React from 'react'

export const IncomeExpenses = () => {
  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p id='money-plus' className='money plus'></p>
        </div>
        <div>
            <h4>Expenses</h4>
            <p id='money-minus' className='money minus'></p>
        </div>
    </div>
  )
}
