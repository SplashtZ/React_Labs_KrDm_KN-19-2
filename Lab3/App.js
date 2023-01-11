import React from "react";

import Data from "./components/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const dataUrl = "https://jsonplaceholder.typicode.com/photos";

function App() {
    return (
        <div className="App">
            <Data dataUrl={dataUrl} />
        </div>
    );
}

export default App;