import React from "react";

function ResultList(props) {
    return (
        <div>
            <p>Information:</p>
            <ul>
                {props.results.map((res) => (
                    <li key={res.id}>
                        {res.userNumber > res.searchNumber && (
                            <h3>N is less than {res.userNumber} </h3>
                        )}
                        {res.userNumber < res.searchNumber && (
                            <h3>N is more than {res.userNumber} </h3>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ResultList;