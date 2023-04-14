import React from "react";
import { faChartBar, faHome } from "@fortawesome/fontawesome-free-solid";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Sidebarleft = () => {

    return (
        <div className="sticky top-0 pt-4">
            <NavLink to="/">
                <h1 className="text-2xl text-bluepro font-bold">LiMusic</h1>
            </NavLink>
            <div className="mt-10">
                <h2 className="text-1xl text-white">Browser Music</h2>
                <div className="mt-7" id="menu">
                    <ul>
                        <NavLink to='/'>
                            <li className="flex items-center content-center border-graypro rounded-lg pr-5 font-bold-none text-grayprolight transition-all hover:border-b-1 hover:pl-1 hover:pb-1 hover:text-white">
                                <FontAwesomeIcon icon={faHome} className="mr-2" style={{ width: "19px", height: "15px" }}></FontAwesomeIcon>
                                <p className="text-sm">Home</p>
                            </li>
                        </NavLink>
                        <NavLink to='/charts'>
                            <li className="flex items-center content-cente border-graypro rounded-lg pr-5 font-bold-none text-grayprolight transition-all hover:border-b-1  hover:pl-1 hover:pb-1 mt-6 hover:text-white">
                                <FontAwesomeIcon icon={faChartBar} className="mr-2" style={{ width: "19px", height: "15px" }}></FontAwesomeIcon>
                                <p className="text-sm">Charts</p>
                            </li>
                        </NavLink>
                        <NavLink to='/favourite'>
                            <li className="flex items-center content-center border-graypro rounded-lg pr-5 font-bold-none text-grayprolight transition-all hover:border-b-1  hover:pl-1 hover:pb-1 mt-6 hover:text-white">
                                <FontAwesomeIcon icon={faHeart} className="mr-2" style={{ width: "19px", height: "15px" }}></FontAwesomeIcon>
                                <p className="text-sm">Favourites</p>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Sidebarleft