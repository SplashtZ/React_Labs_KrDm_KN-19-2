import React, { useState } from "react";

import ResultList from "./ResultList";

let count = 10;

function Game() {
    const [playing, setPlaying] = useState(false);
    const [number, setNumber] = useState();
    const [userInput, setUserInput] = useState();
    const [resultList, setResultList] = useState([]);
    const [gameResult, setGameResult] = useState("");

    const randomNumber = () => {
        playing || setNumber(Math.floor(Math.random() * 1000));
        setPlaying(true);
    };

    const userInputHandler = (event) => {
        setUserInput(event.target.value);
    };

    const addResultHandler = () => {
        if (playing && count > 0) {
            setResultList((prevResultList) => {
                return [
                    ...prevResultList,
                    {
                        id: Math.random().toString(),
                        userNumber: userInput,
                        searchNumber: number,
                    },
                ];
            });
            count--;

            if (userInput === number.toString()) {
                setGameResult("YOU WIN");
                count = 0;
            } else if (count === 0) {
                setGameResult("YOU LOST");
            }
        }
    };

    return (
        <div>
            <button className="btn btn-outline-dark" onClick={randomNumber}>
                New Game
            </button>
            <input className="user-input" type="number" onChange={userInputHandler} />
            <button className="btn btn-outline-dark" onClick={addResultHandler}>
                Check
            </button>
            {number}
            <ResultList results={resultList} />
            <p>Attempts: {count}</p>
            Result:
            <h3>{gameResult}</h3>
        </div>
    );
}

export default Game;