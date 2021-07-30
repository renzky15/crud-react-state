import React, { useState } from "react"
import { v4 as uuid } from "uuid"
export const AddItem = ({ selectedItem, addItem }) => {
    const [text, setText] = useState(selectedItem ? selectedItem.text : "")
    const [amount, setAmount] = useState(
        selectedItem ? selectedItem.amount : ""
    )

    const handleAddTransaction = (e) => {
        e.preventDefault()

        addItem({
            id: uuid(),
            text,
            amount: amount,
        })

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
                        value={selectedItem ? selectedItem.text : text}
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
                        value={selectedItem ? selectedItem.amount : amount}
                        id="amount"
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn">Add to Cart</button>
            </form>
        </>
    )
}
