import React from "react";
import { NavLink } from "react-router-dom";

const Pagenotfound = () => {

    return (
        <>
            <div className="h-80/100 w-full flex flex-col items-center justify-center">
                <h2 className="zero:text-7xl md:text-9xl text-white text-bluepro mb-4">404</h2>
                <h2 className="text-3xl text-white">Page Not Found</h2>
                <NavLink to='/'>
                    <h2 className="mt-5 text-lg text-white text-bluepro">LiMusic</h2>
                </NavLink>
            </div>
        </>
    )
}

export default Pagenotfound