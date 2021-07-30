import React, { useEffect, useState } from "react"

import { AddItem } from "./AddItem"
import { Cart } from "./Cart"

export default function Shopping() {
    const [items, setItems] = useState([{ text: "tide", amount: 19 }])
    const [selectedItem, setSelectedItem] = useState()

    const deleteItem = (id) => {
        const updatedCart = items.filter((item) => item.id !== id)

        setItems(updatedCart)
    }
    const editItem = (id) => {
        const selectedCart = items.filter((item) => item.id === id)

        setSelectedItem(selectedCart)
    }

    const addItem = (item) => {
        let itemsCopy = [...items, item]
        setItems(itemsCopy)
        console.log(items)
    }
    return (
        <div className="container">
            <h2>Shopping List</h2>

            <AddItem
                addItem={addItem}
                selectedItem={selectedItem}
                items={items}
            />

            <Cart items={items} deleteItem={deleteItem} editItem={editItem} />
        </div>
    )
}
