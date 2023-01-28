import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faListAlt } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-bootstrap";
import { useLocation } from "react-router";
import { useEffect } from "react";

const Headerhelperinmobile = () => {

    const location = useLocation()
    useEffect(() => {
        if (location.pathname === '/') {
            document.getElementById("homeinheaderhelperplaermusic").style.backgroundColor = "#3369ff"
            document.getElementById("homeinheaderhelperplaermusic").style.color = "white"
        } else {
            document.getElementById("homeinheaderhelperplaermusic").style.backgroundColor = ""
            document.getElementById("homeinheaderhelperplaermusic").style.color = "#979797"
        }
        if (location.pathname === '/search') {
            document.getElementById("searchinheaderhelperplaermusic").style.backgroundColor = "#3369ff"
            document.getElementById("searchinheaderhelperplaermusic").style.color = "white"
        } else {
            document.getElementById("searchinheaderhelperplaermusic").style.backgroundColor = ""
            document.getElementById("searchinheaderhelperplaermusic").style.color = "#979797"
        }
        if (location.pathname === '/playlists') {
            document.getElementById("playlistsinheaderhelperplaermusic").style.backgroundColor = "#3369ff"
            document.getElementById("playlistsinheaderhelperplaermusic").style.color = "white"
        } else {
            document.getElementById("playlistsinheaderhelperplaermusic").style.backgroundColor = ""
            document.getElementById("playlistsinheaderhelperplaermusic").style.color = "#979797"
        }
        if (location.pathname === '/favourites') {
            document.getElementById("favouritesinheaderhelperplaermusic").style.backgroundColor = "#3369ff"
            document.getElementById("favouritesinheaderhelperplaermusic").style.color = "white"
        } else {
            document.getElementById("favouritesinheaderhelperplaermusic").style.backgroundColor = ""
            document.getElementById("favouritesinheaderhelperplaermusic").style.color = "#979797"
        }
    }, [<Headerhelperinmobile />])


    return (
        <Fragment>
            <div className="zero:block md:hidden">
                <div className="grid grid-cols-12 justify-center items-center bg-blackopacitylittle rounded-3xl border-grayprodark border-1 z-auto py-1 text-grayprolight">
                    <div className="col-span-3">
                        <NavLink id="homeinheaderhelperplaermusic" to="/" className="cursor-pointer flex flex-col justify-center items-center mx-10 py-1">
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                            <p className="text-sm">Home</p>
                        </NavLink>
                    </div>
                    <div className="col-span-3">
                        <NavLink id="searchinheaderhelperplaermusic" to="/" className="cursor-pointer flex flex-col justify-center items-center px-8">
                            <FontAwesomeIcon icon={faSearchengin}></FontAwesomeIcon>
                            <p className="text-sm">Search</p>
                        </NavLink>
                    </div>
                    <div className="col-span-3">
                        <NavLink id="playlistsinheaderhelperplaermusic" to="/" className="cursor-pointer flex flex-col justify-center items-center px-8">
                            <FontAwesomeIcon icon={faListAlt}></FontAwesomeIcon>
                            <p className="text-sm">Playlists</p>
                        </NavLink>
                    </div>
                    <div className="col-span-3">
                        <NavLink id="favouritesinheaderhelperplaermusic" to="/" className="cursor-pointer flex flex-col justify-center items-center px-8">
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