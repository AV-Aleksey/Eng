import React from "react";
import ReactDOM from "react-dom";
import { TestComponent } from "./TestComponent";

const App = () => (
    <>
        <h1>My React and TS App!!</h1>
        <TestComponent />
    </>
);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
