import React from "react"
import { numberWithCommas } from "../utils/format"

export const Item = ({ item, deleteItem, editItem }) => {
    return (
        <li>
            {item.text}
            <span>P {numberWithCommas(Math.abs(item.amount))}</span>
            <button onClick={() => deleteItem(item.id)} className="delete-btn">
                x
            </button>
            <button onClick={() => editItem(item.id)} className="edit-btn">
                e
            </button>
        </li>
    )
}
