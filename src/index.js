import React from "react";
import { render } from "react-dom";
import App from "../src/container/App";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./container/GlobalState";

render(
    <GlobalState>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GlobalState>,
    document.getElementById('root')
)