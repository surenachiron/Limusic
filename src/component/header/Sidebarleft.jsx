import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faHome } from "@fortawesome/fontawesome-free-solid";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Sidebarleft = () => {

    return (
        <div className="sticky top-0 pt-4 px-2 h-screen flex flex-col justify-between">
            <div>
                <NavLink to="/">
                    <h1 className="text-2xl text-bluepro font-bold">LiMusic</h1>
                </NavLink>
                <div className="mt-10">
                    <div className="mt-16" id="menu">
                        <ul>
                            <NavLink to='/'>
                                <li className="flex items-center content-center border-graypro rounded-lg pr-5 font-bold-none text-grayprolight transition-all hover:border-b-1 hover:pb-1 hover:text-white">
                                    <FontAwesomeIcon icon={faHome} className="mr-2" style={{ width: "19px", height: "15px" }}></FontAwesomeIcon>
                                    <p className="text-sm">Home</p>
                                </li>
                            </NavLink>
                            <NavLink to='/charts'>
                                <li className="flex items-center content-cente border-graypro rounded-lg pr-5 font-bold-none text-grayprolight transition-all hover:border-b-1 hover:pb-1 my-8 hover:text-white">
                                    <FontAwesomeIcon icon={faChartBar} className="mr-2" style={{ width: "19px", height: "15px" }}></FontAwesomeIcon>
                                    <p className="text-sm">Charts</p>
                                </li>
                            </NavLink>
                            <NavLink to='/favourites'>
                                <li className="flex items-center content-center border-graypro rounded-lg pr-5 font-bold-none text-grayprolight transition-all hover:border-b-1 hover:pb-1 hover:text-white">
                                    <FontAwesomeIcon icon={faHeart} className="mr-2" style={{ width: "19px", height: "15px" }}></FontAwesomeIcon>
                                    <p className="text-sm">Favourites</p>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-10 mb-5">
                <a href='https://github.com/Suren-chiron' target="_blank" className="flex">
                    <FontAwesomeIcon icon={faGithub} className="text-lg rounded-full cursor-pointer mr-1" />
                    <h5 className="text-xs text-grayprolight text-normal">
                        moahmmad kairimi
                    </h5>
                </a>
            </div>
        </div >
    )
}

export default Sidebarleft