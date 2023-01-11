import React, { useState } from "react";
import ItemCount from "./ItemCount";

function Cart(props) {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const totalQuantityHandler = (quantity) => {
        setTotalQuantity(totalQuantity + quantity);
    };

    const totalPriceHandler = (price) => {
        setTotalPrice(totalPrice + price);
    };

    return (
        <div>
            <table className="table">
                <thead>
                <tr className="bg-success">
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                {props.cartList.map((cart) => (
                    <ItemCount
                        key={cart.id}
                        name={cart.name}
                        price={cart.price}
                        min={cart.min}
                        max={cart.max}
                        onTotalQuantity={totalQuantityHandler}
                        onTotalPrice={totalPriceHandler}
                    />
                ))}
                </tbody>
                <tfoot>
                <tr className="bg-primary">
                    <th>Totals</th>
                    <th></th>
                    <th>{totalQuantity}</th>
                    <th>{totalPrice}</th>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Cart;