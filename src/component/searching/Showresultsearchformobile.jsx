import { faBullseye } from "@fortawesome/fontawesome-free-solid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeshowsongorartistinsearching } from "../../redux/actions/truefalse";
import Mapforartistinmobile from "./Mapforartistinmobile";
import Mapforsonginmobile from "./Mapforsonginmobile";

const Showresultsearchformobile = () => {

    const dispatch = useDispatch()
    const showsongorartist = useSelector(state => state.showsongorartistinsearching)

    let colorbordersong = ''
    let colorborderartist = ''
    if (showsongorartist === false) {
        colorbordersong = "border-bluepro"
        colorborderartist = "border-white"
    } else {
        colorborderartist = "border-bluepro"
        colorbordersong = "border-white"
    }

    return (
        <>
            <div className="flex mt-16 mb-10">
                <h2 className={`text-lg border-b-1 mr-7 px-5 cursor-pointer ${colorbordersong}`} onClick={() => dispatch(changeshowsongorartistinsearching(false))}>Song</h2>
                <h2 className={`text-lg border-b-1 mr-7 px-5 cursor-pointer ${colorborderartist}`} onClick={() => dispatch(changeshowsongorartistinsearching(true))}>Artist</h2>
            </div>
            {showsongorartist == false ? <Mapforsonginmobile></Mapforsonginmobile> : <Mapforartistinmobile></Mapforartistinmobile>}
        </>
    )
}

export default Showresultsearchformobile