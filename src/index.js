import React from "react";
import { render } from "react-dom";
import App from "./containers/App";
import './index.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "swiper/css/bundle"
import { BrowserRouter } from "react-router-dom";

render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </ BrowserRouter>,
    document.getElementById('root')
)