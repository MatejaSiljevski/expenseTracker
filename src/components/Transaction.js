import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

function Transaction({transaction}) {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+'

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            <button onClick={() => deleteTransaction(transaction.id)}>x</button>
            <span className='text'>{transaction.text}</span>
            <div className="sum">                        
                <span>{sign}${Math.abs(transaction.amount)}</span>
            </div>
        </li>
    )
}

export default Transaction
