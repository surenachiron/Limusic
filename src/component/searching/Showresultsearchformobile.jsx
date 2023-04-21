import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Mapforartistinmobile from "./Mapforartistinmobile";
import Mapforsonginmobile from "./Mapforsonginmobile";
import { changeshowsongorartistinsearching } from "../../redux/actions/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

const Showresultsearchformobile = ({ emptytext, textsearch }) => {

    const dispatch = useDispatch()
    const showsongorartist = useSelector(state => state.showsongorartistinsearching)
    const forloadingsearch = useSelector(state => state.forloadingsearch)

    let colorbordersong = ''
    let colorborderartist = ''
    if (showsongorartist === false) {
        colorbordersong = "border-bluepro"
        colorborderartist = "border-white"
    } else {
        colorborderartist = "border-bluepro"
        colorbordersong = "border-white"
    }
    const getdetailsfortextsearch = useSelector(state => state.detailssearch)

    return (
        <>
            {emptytext === 1 && forloadingsearch === false ?
                <>
                    {getdetailsfortextsearch.tracks !== undefined && getdetailsfortextsearch.artists !== undefined ?
                        <>
                            <div className="flex mt-16 mb-10">
                                <h2 className={`text-lg border-b-1 mr-7 px-5 cursor-pointer ${colorbordersong}`} onClick={() => dispatch(changeshowsongorartistinsearching(false))}>Songs</h2>
                                <h2 className={`text-lg border-b-1 mr-7 px-5 cursor-pointer ${colorborderartist}`} onClick={() => dispatch(changeshowsongorartistinsearching(true))}>Artists</h2>
                            </div>
                            {showsongorartist === false ? <Mapforsonginmobile></Mapforsonginmobile> : <Mapforartistinmobile></Mapforartistinmobile>}
                        </>
                        :
                        <div className="text-white h-fit py-5 overflow-y-auto mt-11 rounded-lg z-50 text-center">
                            <FontAwesomeIcon icon={faSearchengin} color="gray" className="text-lg"></FontAwesomeIcon>
                            <h3 className="font-bold text-base my-2">We couldn't find any results matching "{textsearch}"</h3>
                            <p className="text-sm text-grayprolight">Please make sure your words are spelled correctly, or try using different keywords
                            </p>
                        </div>}
                </>
                : ""}
        </>
    )
}

export default Showresultsearchformobile