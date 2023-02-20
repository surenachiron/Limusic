import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import './headdrcss.css'

const Mobilmenu = () => {

    return (
        <Fragment>
            <div className="w-100 vh-100 bg-white position-absolute">
                <ul className="mt-4">
                    <li className="listmenu">
                        <NavLink to='/' className="linkmenu">home</NavLink>
                    </li>
                    <li className="listmenu">
                        resturant
                    </li>
                    <li className="listmenu">
                        <NavLink to='/login' className="linkmenu">login</NavLink>
                    </li>
                    <li className="listmenu">
                        <NavLink to='/register' className="linkmenu">register</NavLink>
                    </li>
                    <li className="listmenu">
                        sellers
                    </li>
                </ul>
            </div>
        </Fragment>
    )

}

export default Mobilmenu;