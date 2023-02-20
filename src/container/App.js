import React, { Fragment } from "react";
import Paginition from "./Paginition";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    return (
        <Fragment>
            <ToastContainer />
            <Paginition />
        </Fragment>
    )

}

export default App;