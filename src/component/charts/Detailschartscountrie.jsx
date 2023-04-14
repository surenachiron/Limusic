import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/fontawesome-free-solid";
import { usegettrackschart } from "../../services/useCharts";
import ReactLoading from 'react-loading';
import { changedisableorallowtop100, initializeplaylisttrackschartforcountrie, playlisttrackscharttopmusicforcountrie } from "../../redux/actions/charts";
import { Helmet } from "react-helmet";

const Detailschartscountrie = () => {

    const dispatch = useDispatch()
    const listcountrieforcharts = useSelector(state => state.listcountrieforcharts)
    const listcountrieforchartssorted = useSelector(state => state.listcountrieforcharts[1])
    const disableorallowtop100 = useSelector(state => state.disableorallowtop100)
    const ismusicwaiting = useSelector(state => state.ismusicwaiting)
    const durationtimemusic = useSelector(state => state.durationtimemusic)
    const loadingtracktopcountrie = useSelector(state => state.loadingtracktopcountrie)

    const [selectedCountry, setSelectedCountry] = useState("");
    const [getdataselectedcountrie, setdataselectedcountrie] = useState([]);

    const reflistselectcountrie = useRef(null);

    useEffect(() => {
        if (listcountrieforcharts !== undefined && listcountrieforcharts.length !== 0) {
            if (localStorage.getItem("namecountrieselected") === null) {
                const findindexcountriesselected = listcountrieforchartssorted.findIndex(o => o.name === "Argentina")
                setdataselectedcountrie(listcountrieforchartssorted[findindexcountriesselected])
                if (localStorage.getItem("whatshowdataforcountrieselected") !== null) {
                    if (localStorage.getItem("whatshowdataforcountrieselected") === "top100") {
                        usegettrackschart(dispatch, listcountrieforchartssorted[findindexcountriesselected].id, listcountrieforchartssorted[findindexcountriesselected].listid)
                        dispatch(changedisableorallowtop100(true))
                    } else if (localStorage.getItem("whatnamepartfordataincountrieselected") === "cities") {
                        const whatnamepartfordataincountrieselectedfinindec = listcountrieforchartssorted[findindexcountriesselected].cities.findIndex(o => o.name === localStorage.getItem("whatshowdataforcountrieselected"))
                        usegettrackschart(dispatch, listcountrieforchartssorted[findindexcountriesselected].cities[whatnamepartfordataincountrieselectedfinindec].countryid, listcountrieforchartssorted[findindexcountriesselected].cities[whatnamepartfordataincountrieselectedfinindec].listid)
                        dispatch(changedisableorallowtop100(0))
                    }
                    else if (localStorage.getItem("whatnamepartfordataincountrieselected") === "genres") {
                        const whatnamepartfordataincountrieselectedfinindec = listcountrieforchartssorted[findindexcountriesselected].genres.findIndex(o => o.name === localStorage.getItem("whatshowdataforcountrieselected"))
                        usegettrackschart(dispatch, listcountrieforchartssorted[findindexcountriesselected].cities[whatnamepartfordataincountrieselectedfinindec].countryid, listcountrieforchartssorted[findindexcountriesselected].cities[whatnamepartfordataincountrieselectedfinindec].listid)
                        dispatch(changedisableorallowtop100(1))
                    }
                } else {
                    localStorage.setItem("whatshowdataforcountrieselected", "top100")
                    usegettrackschart(dispatch, listcountrieforchartssorted[findindexcountriesselected].id, listcountrieforchartssorted[findindexcountriesselected].listid)
                    dispatch(changedisableorallowtop100(true))
                }
            } else {
                const findindexcountriesselected = listcountrieforchartssorted.findIndex(o => o.name === localStorage.getItem("namecountrieselected"))
                setdataselectedcountrie(listcountrieforchartssorted[findindexcountriesselected])
                if (localStorage.getItem("whatshowdataforcountrieselected") !== null) {
                    if (localStorage.getItem("whatshowdataforcountrieselected") === "top100") {
                        usegettrackschart(dispatch, listcountrieforchartssorted[findindexcountriesselected].id, listcountrieforchartssorted[findindexcountriesselected].listid)
                        dispatch(changedisableorallowtop100(true))
                    } else if (localStorage.getItem("whatnamepartfordataincountrieselected") === "cities") {
                        const whatnamepartfordataincountrieselectedfinindec = listcountrieforchartssorted[findindexcountriesselected].cities.findIndex(o => o.name === localStorage.getItem("whatshowdataforcountrieselected"))
                        usegettrackschart(dispatch, listcountrieforchartssorted[findindexcountriesselected].cities[whatnamepartfordataincountrieselectedfinindec].countryid, listcountrieforchartssorted[findindexcountriesselected].cities[whatnamepartfordataincountrieselectedfinindec].listid)
                        dispatch(changedisableorallowtop100(0))
                    }
                    else if (localStorage.getItem("whatnamepartfordataincountrieselected") === "genres") {
                        const whatnamepartfordataincountrieselectedfinindec = listcountrieforchartssorted[findindexcountriesselected].genres.findIndex(o => o.name === localStorage.getItem("whatshowdataforcountrieselected"))
                        usegettrackschart(dispatch, listcountrieforchartssorted[findindexcountriesselected].cities[whatnamepartfordataincountrieselectedfinindec].countryid, listcountrieforchartssorted[findindexcountriesselected].cities[whatnamepartfordataincountrieselectedfinindec].listid)
                        dispatch(changedisableorallowtop100(1))
                    }
                } else {
                    localStorage.setItem("whatshowdataforcountrieselected", "top100")
                    usegettrackschart(dispatch, listcountrieforchartssorted[findindexcountriesselected].id, listcountrieforchartssorted[findindexcountriesselected].listid)
                    dispatch(changedisableorallowtop100(true))
                }
            }
        }
    }, [, selectedCountry])

    const handleSelectChange = (event) => {
        setSelectedCountry(event.target.value);
        const findindexcountriesselected = listcountrieforchartssorted.findIndex(o => o.name === event.target.value)
        setdataselectedcountrie(listcountrieforchartssorted[findindexcountriesselected])
        localStorage.setItem("namecountrieselected", event.target.value)
        localStorage.removeItem("whatnamepartfordataincountrieselected")
        localStorage.removeItem("whatshowdataforcountrieselected")
        dispatch(changedisableorallowtop100(true))
    }

    const changetop0100 = () => {
        if (disableorallowtop100 !== true) {
            usegettrackschart(dispatch, getdataselectedcountrie.id, getdataselectedcountrie.listid)
        }
        dispatch(changedisableorallowtop100(true))
        localStorage.removeItem("whatnamepartfordataincountrieselected")
        localStorage.setItem("whatshowdataforcountrieselected", "top100")
    }

    const changecities = (event) => {
        const whatnamepartfordataincountrieselectedfinindec = getdataselectedcountrie.cities.findIndex(o => o.name === event.target.value)
        dispatch(changedisableorallowtop100(0))
        localStorage.setItem("whatnamepartfordataincountrieselected", "cities")
        localStorage.setItem("whatshowdataforcountrieselected", event.target.value)
        usegettrackschart(dispatch, getdataselectedcountrie.cities[whatnamepartfordataincountrieselectedfinindec].countryid, getdataselectedcountrie.cities[whatnamepartfordataincountrieselectedfinindec].listid)
    }

    const changegenres = (event) => {
        const whatnamepartfordataincountrieselectedfinindec = getdataselectedcountrie.genres.findIndex(o => o.name === event.target.value)
        dispatch(changedisableorallowtop100(1))
        localStorage.setItem("whatnamepartfordataincountrieselected", "genres")
        localStorage.setItem("whatshowdataforcountrieselected", event.target.value)
        usegettrackschart(dispatch, getdataselectedcountrie.cities[whatnamepartfordataincountrieselectedfinindec].countryid, getdataselectedcountrie.cities[whatnamepartfordataincountrieselectedfinindec].listid)
    }

    let selectedparttop100style, selectedpartcitiesstyle, selectedpartgenresstyle = ''
    if (localStorage.getItem("whatnamepartfordataincountrieselected") === null && disableorallowtop100 === true) {
        selectedparttop100style = "bg-white text-black"
        selectedpartcitiesstyle = "bg-grayprodark text-white"
        selectedpartgenresstyle = "bg-grayprodark text-white"
    } else if (localStorage.getItem("whatnamepartfordataincountrieselected") === "cities") {
        selectedpartcitiesstyle = "bg-white text-black"
        selectedpartgenresstyle = "bg-grayprodark text-white"
        selectedparttop100style = "bg-grayprodark text-white"
    } else if (localStorage.getItem("whatnamepartfordataincountrieselected") === "genres") {
        selectedpartgenresstyle = "bg-white text-black"
        selectedpartcitiesstyle = "bg-grayprodark text-white"
        selectedparttop100style = "bg-grayprodark text-white"
    }
    useEffect(() => {
        if (localStorage.getItem("whatnamepartfordataincountrieselected") === null && disableorallowtop100 === true) {
            selectedparttop100style = "bg-white text-black"
            selectedpartcitiesstyle = "bg-grayprodark text-white"
            selectedpartgenresstyle = "bg-grayprodark text-white"
        } else if (localStorage.getItem("whatnamepartfordataincountrieselected") === "cities") {
            selectedpartcitiesstyle = "bg-white text-black"
            selectedpartgenresstyle = "bg-grayprodark text-white"
            selectedparttop100style = "bg-grayprodark text-white"
        } else if (localStorage.getItem("whatnamepartfordataincountrieselected") === "genres") {
            selectedpartgenresstyle = "bg-white text-black"
            selectedpartcitiesstyle = "bg-grayprodark text-white"
            selectedparttop100style = "bg-grayprodark text-white"
        }
    }, [disableorallowtop100])

    ///  set playlist and play music

    const playlisttrackschartforcountrie = useSelector(state => state.playlisttrackschartforcountrie)
    const howplaylistisactive = useSelector(state => state.howpageplayedmusic)
    const isplayorispause = useSelector(state => state.isplayorispause)

    const playmusicselected = () => {
        dispatch(playlisttrackscharttopmusicforcountrie(getdataselectedcountrie.name))
    }

    return (
        <>
            <Helmet>
                <title>{getdataselectedcountrie.name}</title>
            </Helmet>
            <div className="flex justify-between items-center text-white bg-grayprodark rounded-lg md:w-72 zero:w-full h-13 pr-3">
                <select id="countrie" name="countrie" className="text-white bg-grayprodark w-full py-3 px-3 font-bold rounded-lg" ref={reflistselectcountrie} onChange={handleSelectChange} value={localStorage.getItem("namecountrieselected") !== null ? localStorage.getItem("namecountrieselected") : "Argentina"}>
                    {listcountrieforcharts[1].map((o, index) => (
                        <option className="px-4" key={index} value={o.name}>{o.name}</option>
                    ))}
                </select>
            </div>
            <div className="flex mt-16 items-center">
                <div onClick={playmusicselected}>
                    {loadingtracktopcountrie === false ?
                        <button className="px-4 py-3 border border-grayprolight rounded-full flex items-center" onClick={playmusicselected}>
                            {howplaylistisactive === playlisttrackschartforcountrie && getdataselectedcountrie.name === localStorage.getItem("whichplayingincountrie") ? <>
                                {durationtimemusic[0] !== "0NaN" && durationtimemusic[1] !== "0NaN" ?
                                    <>
                                        {ismusicwaiting === false ?
                                            <>
                                                {isplayorispause === true ?
                                                    <FontAwesomeIcon icon={faPause} className="text-xl cursor-pointer text-white" onClick={playmusicselected} />
                                                    : <FontAwesomeIcon icon={faPlay} className="text-xl cursor-pointer text-white" onClick={playmusicselected} />
                                                }
                                            </>
                                            : <div className="text-xl cursor-pointer text-white">
                                                <ReactLoading type={"spin"} color="white" height={25} width={25} />
                                            </div>
                                        }
                                    </>
                                    : <div className="text-xl cursor-pointer text-white">
                                        <ReactLoading type={"spin"} color="white" height={25} width={25} />
                                    </div>
                                }
                            </> :
                                <>
                                    <FontAwesomeIcon icon={faPlay} color="white" className="text-xl cursor-pointer" onClick={playmusicselected}></FontAwesomeIcon>
                                </>
                            }
                        </button>
                        : ""}
                </div>
                <div className="ml-5">
                    <h4 className="font-bold text-base">{getdataselectedcountrie.name}</h4>
                    <h4 className="font-bold text-5xl my-3">Top 20 </h4>
                    <h4 className="font-normal text-base text-grayprolight">The most LiMusiced tracks in {getdataselectedcountrie.name} this week</h4>
                </div>
            </div>
            <div className="flex mt-16 items-center font-bold">
                <div>
                    <button className={`${selectedparttop100style} px-4 py-2 rounded-xl w-36 text-start`} onClick={changetop0100}>
                        Top 20
                    </button>
                </div>

                {getdataselectedcountrie.length !== 0 && getdataselectedcountrie.cities.length !== 0 && reflistselectcountrie.current !== null ?
                    <div className={`${selectedpartcitiesstyle} flex justify-between items-center rounded-xl px-3 mx-3 w-36`}>
                        <select id="countrie" name="countrie" className={`${selectedpartcitiesstyle} w-full h-full py-2`} onChange={changecities} value={localStorage.getItem("whatnamepartfordataincountrieselected") === "cities" ? localStorage.getItem("namecountrieselected") : "Cities"}>
                            <option value="Cities" hidden disabled>Cities</option>
                            {getdataselectedcountrie.cities.map((o, index) => (
                                <option className="px-4" key={index} value={o.name} selected={localStorage.getItem("whatshowdataforcountrieselected") === o.name ? true : false} >{o.name}</option>
                            ))}
                        </select>
                    </div>
                    : ""}

                {getdataselectedcountrie.length !== 0 && getdataselectedcountrie.genres.length !== 0 && reflistselectcountrie.current !== null ?
                    <div className={`${selectedpartgenresstyle} flex justify-between items-center rounded-xl px-3 w-36`}>
                        <select id="countrie" name="countrie" className={`${selectedpartgenresstyle} w-full h-full py-2`} onChange={changegenres} value={localStorage.getItem("whatnamepartfordataincountrieselected") === "genres" ? localStorage.getItem("namecountrieselected") : "Genres"}>
                            <option value="Genres" hidden disabled>Genres</option>
                            {getdataselectedcountrie.genres.map((o, index) => (
                                <option className="px-4" key={index} value={o.name} selected={localStorage.getItem("whatshowdataforcountrieselected") === o.name ? true : false} >{o.name}</option>
                            ))}
                        </select>
                    </div>
                    : <></>}
            </div>
        </>
    )
}

export default Detailschartscountrie