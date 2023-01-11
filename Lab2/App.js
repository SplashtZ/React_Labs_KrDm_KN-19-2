import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import CounterList from "./components/task1/CounterList";
import Cart from "./components/task2/Cart";
import Game from "./components/task3/Game";

const counters = [
    { id: 1, initial: 6, min: -5, max: 10 },
    { id: 2, initial: 5 },
    { id: 3 },
];

const cartList = [
    { id: 1, name: "Constructor LEGO", price: 300, min: 0, max: 5 },
    { id: 2, name: "Train Station", price: 200, min: 0, max: 4 },
    { id: 3, name: "Hot Wheels Track", price: 150, min: 0, max: 6 },
];

function App() {
    return (
        <div className="App">
            <CounterList countersList={counters} />
            <Cart cartList={cartList} />
            <Game />
        </div>
    );
}

export default App;