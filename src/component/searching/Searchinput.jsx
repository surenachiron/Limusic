import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { getdailstextsearch } from "../../services/useGetdetailssearch.js";
import { useDispatch, useSelector } from "react-redux";
import Showresultsearch from "./Showresultsearch";
import { changefocusinputsearch } from "../../redux/actions/truefalse";
import { useRef } from "react";
import { initializedetailssearched } from "../../redux/actions/search";
import ReactLoading from 'react-loading';
import { useLocation } from "react-router";

const Searchinput = () => {

    const inputsearchref = useRef()
    const dispatch = useDispatch()
    const [emptytext, setemptytext] = useState(2)
    const [textsearch, settextsearch] = useState()
    const focusinputsearch = useSelector(state => state.focusinputsearch)
    const forloadingsearch = useSelector(state => state.forloadingsearch)

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (inputsearchref.current && !inputsearchref.current.contains(e.target)) {
                dispatch(changefocusinputsearch(false))
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [inputsearchref])

    const changetextsearch = (e) => {
        settextsearch(e.target.value)
        dispatch(initializedetailssearched(""))
        if (e.target.value.length !== 0) setemptytext(3)
        else setemptytext(2)
        dispatch(changefocusinputsearch(true))
    }

    const clickiconsearch = () => {
        if (textsearch.length !== 0) {
            getdailstextsearch(dispatch, textsearch)
            setemptytext(1)
        }
        else setemptytext(2)
        dispatch(changefocusinputsearch(true))
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && textsearch.length !== 0) {
            getdailstextsearch(dispatch, textsearch)
            setemptytext(1)
        } else {
            setemptytext(2)
        }
        dispatch(changefocusinputsearch(true))
    }

    const location = useLocation()
    useEffect(() => {
        dispatch(changefocusinputsearch(false))
    }, [location])

    return (
        <>
            {focusinputsearch === true ? <div className="bg-gray-800 fixed inset-0 opacity-25"></div> : ""}
            <div className="relative bg-white flex justify-between w-full rounded-2xl pr-3" ref={inputsearchref}>
                {forloadingsearch === true ?
                    <div className="flex items-center pl-3">
                        <ReactLoading type={"spin"} color="#0085ff" height={20} width={20} />
                    </div>
                    : ""}
                <input type="text" name="searchinapp" id="searchinputheader" className="p-2 rounded-3xl text-black border-0 w-full text-center" placeholder="Type your seach here" onChange={e => changetextsearch(e)} onFocus={() => dispatch(changefocusinputsearch(true))} onKeyPress={(event) => handleKeyPress(event)} />
                <button className="p-2" onClick={clickiconsearch}>
                    <FontAwesomeIcon icon={faSearch} className="text-blacklight cursor-pointer"></FontAwesomeIcon>
                </button>
                {focusinputsearch === true ? <Showresultsearch emptytext={emptytext} textsearch={textsearch}></Showresultsearch> : ""}
            </div>
        </>
    )
}

export default Searchinput