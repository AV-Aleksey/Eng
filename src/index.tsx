import React from "react";
import ReactDOM from "react-dom";
import './main.css'
import {Main} from "./modules/main";

const App = () => (
    <>
        <Main />
    </>
);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
