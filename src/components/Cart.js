import React from "react"

import { Item } from "./Item"
export const Cart = (props) => {
    return (
        <div>
            <h3>Cart</h3>
            <ul id="list" className="list">
                {props.items.length < 0 && <span>Empty Cart</span>}
                {props.items.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        deleteItem={props.deleteItem}
                        editItem={props.editItem}
                    />
                ))}
            </ul>
        </div>
    )
}
