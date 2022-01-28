import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


function IncomeExpenses() {
    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts.filter(transaction => transaction > 0).reduce((acc,item) => (acc+=item),0).toFixed(2)

    const expense = amounts.filter(transactions => transactions < 0).reduce((acc, item) => (acc = acc + Math.abs(item)),0).toFixed(2)

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p id="money-plus" className='money-plus'>+${income}</p>
            </div>
            {console.log(income.length)}
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money-minus">-${expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
