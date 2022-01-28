import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'

function AddTransaction() {
    const [text, setText] = useState('')
    const [amount,setAmount] = useState(0)
    const {addTransaction} = useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const randomId = (Math.random() * 10000).toFixed(0)
        const newTransaction = {
            id:randomId,
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input onChange={(e) => {setText(e.target.value)}} type="text" value={text} placeholder='Enter text...'/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount 
                        <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" placeholder='Enter amount...' onChange={(e) => {setAmount(e.target.value)}} value={amount}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
