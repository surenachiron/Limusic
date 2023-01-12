import React from "react";
import {render} from "react-dom";
import Globalstate from "./containers/Globalstate";
import App from "./containers/App";
import {BrowserRouter} from "react-router-dom";

render(
    <Globalstate>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Globalstate>,
    document.getElementById('root')
)