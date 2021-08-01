import React, { useState, useEffect } from "react"
import { v4 as uuid } from "uuid"
export const AddItem = ({ selectedItem, addItem, items, updateItem }) => {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(
        ''
    )
    useEffect(() => {
        setText(selectedItem ? selectedItem[0].text : '')
        setAmount(selectedItem ? selectedItem[0].amount : '')
    }, [selectedItem])

    const handleAddTransaction = (e) => {
        e.preventDefault()
        if (selectedItem) {

            updateItem({
                id: selectedItem ? selectedItem[0].id : uuid(),
                text,
                amount
            })
            console.log('UPDAAATEE')
        } else {
            addItem({
                id: uuid(),
                text,
                amount: amount,
            })
        }




        setText("")
        setAmount(0)
    }
    return (
        <>
            <h3>Add new Item</h3>
            <form onSubmit={handleAddTransaction} id="form">
                <div className="form-control">
                    <label htmlFor="text">
                        Item Name <br />
                    </label>
                    <input
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        type="text"
                        placeholder="Enter text..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Price <br />
                    </label>
                    <input
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        id="amount"
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn">Add to Cart</button>
            </form>
        </>
    )
}
