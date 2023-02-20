import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Page404 = () => {

    return (
        <Fragment>
            <div className="d-flex justify-content-center w-100 bg-warning text-black flex-column text-center" style={{ height: "87vh" }}>
                <h1 className="mb-3">404</h1>
                <h4 className="mb-3">Unfortunately, we did not find such a page</h4>
                <NavLink to='/'>go to home -></NavLink>
            </div>
        </Fragment>
    )

}

export default Page404;