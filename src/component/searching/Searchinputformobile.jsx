import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializedetailssearched } from "../../redux/actions/search";
import { getdailstextsearch } from "../../services/useGetdetailssearch";
import "../../index.css"
import { useRef } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import ReactLoading from 'react-loading';
import Showresultsearchformobile from "./Showresultsearchformobile";

const Searchinputformobile = () => {

    const dispatch = useDispatch()
    const [textsearch, settextsearch] = useState()
    const getdetailsfortextsearch = useSelector(state => state.detailssearch)
    const forloadingsearch = useSelector(state => state.forloadingsearch)
    
    const changetextsearch = (e) => {
        settextsearch(e.target.value)
        dispatch(initializedetailssearched(""))
    }

    const clickiconsearch = () => {
        getdailstextsearch(dispatch, textsearch)
    }

    const clickbuttonclear = () => {
        settextsearch("")
        dispatch(initializedetailssearched(""))
        document.getElementById("searchinputheadermobile").value = ""
    }

    const searchtext = useRef()

    return (
        <div className="mt-7 w-full mb-5 justify-center px-5">
            <h5 className="text-base text-grayprosearch">Experience new</h5>
            <h5 className="text-xl text-white font-bold mt-3">Ready to explore?</h5>
            <div className="flex justify-between w-full border-b-1 border-white mt-4 pb-1">
                <button className="p-2" onClick={clickiconsearch}>
                    <FontAwesomeIcon icon={faSearch} className="text-bluepro cursor-pointer"></FontAwesomeIcon>
                </button>
                <input type="text" name="searchinappmobile" id="searchinputheadermobile" className="p-2 rounded-3xl text-white border-0 w-full bg-transparent" placeholder="Type your seach here" onChange={e => changetextsearch(e)} ref={searchtext} />
                {textsearch !== undefined && textsearch !== "" ?
                    <div className="flex items-center">
                        {forloadingsearch === true ?
                            <div className="flex items-center px-2 mr-2">
                                <ReactLoading type={"spin"} color="White" height={26} width={26} />
                            </div>
                            : ""}
                        <button className="px-2 border-1 border-bluepro rounded-xl" onClick={clickbuttonclear}>
                            <FontAwesomeIcon icon={faClose} className="text-white cursor-pointer"></FontAwesomeIcon>
                        </button>
                    </div>
                    : ""}
            </div>
            {getdetailsfortextsearch.length !== 0 && getdetailsfortextsearch !== undefined ? <Showresultsearchformobile></Showresultsearchformobile> : ""}
        </div>
    )
}

export default Searchinputformobile