import React, { Fragment, useEffect, useState } from "react";
import Main from "./main/Main";
import Musicplayer from "../header/Musicplayer";
import Sidebarleft from "./sidebarleft/Sidebarleft";
import Header from "../header/Header";
import { useDispatch } from "react-redux";
import { updatewidthplayermusic } from "../../redux/actions/another";

const Homelayout = () => {

    const dispatch = useDispatch()
    const [widthplayermusic, swidthplayermusic] = useState(window.innerWidth);
    const upadatewidthplayermusic = () => {
        swidthplayermusic(document.getElementById("mainhome").clientWidth);
        dispatch(updatewidthplayermusic(document.getElementById("mainhome").clientWidth))
    }
    useEffect(() => {
        window.addEventListener("resize", upadatewidthplayermusic);
        swidthplayermusic(document.getElementById("mainhome").clientWidth)
        dispatch(updatewidthplayermusic(document.getElementById("mainhome").clientWidth))
        return () => window.removeEventListener("resize", upadatewidthplayermusic);
    }, [<Homelayout />]);

    return (
        <Fragment>
            <div id="mainhome" className="mt-7 rounded-3xl flex flex-col w-full mb-5 justify-center px-5">
                <Main />
            </div>
        </Fragment>
    )
}

export default Homelayout