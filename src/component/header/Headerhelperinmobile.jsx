import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChartBar } from "@fortawesome/fontawesome-free-solid";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { useEffect } from "react";

const Headerhelperinmobile = () => {

    const location = useLocation()
    useEffect(() => {
        if (location.pathname === "/") {
            document.getElementById("homeinheaderhelperplaermusic").style.backgroundColor = "#3369ff"
            document.getElementById("homeinheaderhelperplaermusic").style.color = "white"
        } else {
            document.getElementById("homeinheaderhelperplaermusic").style.backgroundColor = ""
            document.getElementById("homeinheaderhelperplaermusic").style.color = "#979797"
        }
        if (location.pathname === "/search") {
            document.getElementById("searchinheaderhelperplaermusic").style.backgroundColor = "#3369ff"
            document.getElementById("searchinheaderhelperplaermusic").style.color = "white"
        } else {
            document.getElementById("searchinheaderhelperplaermusic").style.backgroundColor = ""
            document.getElementById("searchinheaderhelperplaermusic").style.color = "#979797"
        }
        if (location.pathname === "/charts") {
            document.getElementById("playlistsinheaderhelperplaermusic").style.backgroundColor = "#3369ff"
            document.getElementById("playlistsinheaderhelperplaermusic").style.color = "white"
        } else {
            document.getElementById("playlistsinheaderhelperplaermusic").style.backgroundColor = ""
            document.getElementById("playlistsinheaderhelperplaermusic").style.color = "#979797"
        }
        if (location.pathname === "/favourites") {
            document.getElementById("favouritesinheaderhelperplaermusic").style.backgroundColor = "#3369ff"
            document.getElementById("favouritesinheaderhelperplaermusic").style.color = "white"
        } else {
            document.getElementById("favouritesinheaderhelperplaermusic").style.backgroundColor = ""
            document.getElementById("favouritesinheaderhelperplaermusic").style.color = "#979797"
        }
    }, [location.pathname])

    return (
        <Fragment>
            <div className="zero:block md:hidden backdrop-blur-sm">
                <div className="grid grid-cols-12 justify-center items-center bg-blackopacitylittle rounded-3xl border-grayprodark border-1 z-auto py-1 text-grayprolight">
                    <div className="col-span-3">
                        <NavLink id="homeinheaderhelperplaermusic" to="/" className="cursor-pointer flex flex-col justify-center items-center px-8 py-1 mx-2 rounded-2xl">
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                            <p className="text-sm">Home</p>
                        </NavLink>
                    </div>
                    <div className="col-span-3">
                        <NavLink id="searchinheaderhelperplaermusic" to="/search" className="cursor-pointer flex flex-col justify-center items-center px-8 py-1 mx-2 rounded-2xl">
                            <FontAwesomeIcon icon={faSearchengin}></FontAwesomeIcon>
                            <p className="text-sm">Search</p>
                        </NavLink>
                    </div>
                    <div className="col-span-3">
                        <NavLink id="playlistsinheaderhelperplaermusic" to="/charts" className="cursor-pointer flex flex-col justify-center items-center px-8 py-1 mx-2 rounded-2xl">
                            <FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon>
                            <p className="text-sm">Charts</p>
                        </NavLink>
                    </div>
                    <div className="col-span-3">
                        <NavLink id="favouritesinheaderhelperplaermusic" to="/favourites" className="cursor-pointer flex flex-col justify-center items-center px-8 py-1 mx-2 rounded-2xl">
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                            <p className="text-sm">Favourites</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Headerhelperinmobile