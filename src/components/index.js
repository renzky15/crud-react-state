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
        console.log(selectedCart)
        setSelectedItem(selectedCart)

        console.log(selectedItem)
    }
    const updateItem = (item) => {
        const itemsCopy = [...items]
        console.log(item)
        const index = items.findIndex(data => data.id === item.id)
        console.log(index)
        itemsCopy[index].text = item.text
        itemsCopy[index].amount = item.amount
        setItems(itemsCopy)
        setSelectedItem('')
        window.alert('Updated Successfully')
    }

    const addItem = (item) => {
        let itemsCopy = [...items, item]
        setItems(itemsCopy)

    }
    return (
        <div className="container">
            <h2>Shopping List</h2>

            <AddItem
                addItem={addItem}
                selectedItem={selectedItem}
                items={items}
                updateItem={updateItem}
            />

            <Cart items={items} deleteItem={deleteItem} editItem={editItem} />
        </div>
    )
}
