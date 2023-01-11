import React from "react";

import MyCounter from "./MyCounter";

function CounterList(props) {
    return (
        <ul>
            {props.countersList.map((counter) => (
                <li key={counter.id}>
                    <MyCounter
                        startValue={counter.initial}
                        min={counter.min}
                        max={counter.max}
                    ></MyCounter>
                </li>
            ))}
        </ul>
    );
}

export default CounterList;