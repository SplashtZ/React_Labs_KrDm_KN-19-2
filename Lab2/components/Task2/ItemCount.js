import React, { useState } from "react";

function ItemCount(props) {
    const { name, price, startValue = 0, min = 0, max = 10 } = props;
    const [quantity, setQuantity] = useState(startValue);

    const addition = () => {
        setQuantity(quantity < max ? quantity + 1 : max);
        if (quantity < max) {
            props.onTotalQuantity(1);
            props.onTotalPrice(price);
        }
    };

    const subtraction = () => {
        setQuantity(quantity > min ? quantity - 1 : min);
        if (quantity > min) {
            props.onTotalQuantity(-1);
            props.onTotalPrice(-price);
        }
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <button className="btn btn-outline-dark" onClick={addition}>
                    +
                </button>
                {quantity}
                <button className="btn btn-outline-dark" onClick={subtraction}>
                    -
                </button>
            </td>
            <td>{price * quantity}</td>
        </tr>
    );
}

export default ItemCount;