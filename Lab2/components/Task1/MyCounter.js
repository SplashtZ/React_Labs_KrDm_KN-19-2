import React, { useState } from "react";

function MyCounter(props) {
    const { startValue = 0, min = -10, max = 10 } = props;
    const [currentValue, setCurrentValue] = useState(startValue);

    const addition = () => {
        setCurrentValue(currentValue < max ? currentValue + 1 : max);
    };

    const subtraction = () => {
        setCurrentValue(currentValue > min ? currentValue - 1 : min);
    };

    const reset = () => {
        setCurrentValue(currentValue - currentValue);
    };

    return (
        <div>
            Поточний рахунок: {currentValue}
            <button className="btn btn-outline-dark btn1" onClick={addition}>
                +
            </button>
            <button className="btn btn-outline-dark btn2" onClick={subtraction}>
                -
            </button>
            <button className="btn btn-outline-dark btn3" onClick={reset}>
                Reset
            </button>
            <hr />
        </div>
    );
}

export default MyCounter;