import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faTrash } from "@fortawesome/fontawesome-free-solid";
import ReactLoading from 'react-loading';
import { playlistfavouritetrackspage } from "../../redux/actions/favourite";

const Showtracksliked = ({ covermusic, titlemusic, linkpagetitlemusic, artistmusic, linkpageartistmusic }) => {

    const favouritetrasks = useSelector(state => state.tracksfavourite.tracks)

    let slicetexttitle = titlemusic.slice(0, 10) + "..."
    let slicetextartist = artistmusic.slice(0, 10) + "..."

    const dispatch = useDispatch()
    const ismusicwaiting = useSelector(state => state.ismusicwaiting)
    const isplayorispause = useSelector(state => state.isplayorispause)
    const durationtimemusic = useSelector(state => state.durationtimemusic)


    const playmusicselected = () => {
        dispatch(playlistfavouritetrackspage(favouritetrasks, titlemusic))
    }

    const copystate = [...favouritetrasks];
    const deleteinfavourite = () => {
        const indexToRemove = copystate.findIndex(item => item.namesong === titlemusic
        );
        if (indexToRemove !== -1)
            copystate.splice(indexToRemove, 1);
        dispatch({ type: "DELETEED_TRACKSFAVOURITE", payload: copystate });
    }

    /// styles
    const [getblockorhideplay, setblockorhideplay] = useState("")
    const [getopacityandhoverforimage, setopacityandhoverforimage] = useState("")
    useEffect(() => {
        if (localStorage.getItem("namemusicplayingorplayed") === titlemusic && localStorage.getItem("artistmusicplayingorplayed") === artistmusic) {
            setblockorhideplay("block")
            setopacityandhoverforimage("opacity-80")
        } else {
            setblockorhideplay("hover:block hidden")
            setopacityandhoverforimage("hover:opacity-80 group-hover:opacity-80")
        }
    }, [isplayorispause, durationtimemusic])

    const transform = {
        transform: 'translate(-50%, -43%)',
        top: "50%",
        left: "50%"
    };

    return (
        <>
            <div className="lg:col-span-2 sm:col-span-3 zero:col-span-12 text-start lg:mb-5 sm:mb-4 sm:pb-0 zero:py-3 sm:block zero:flex justify-between items-center sm:border-b-0 zero:border-b-1 border-grayprolight cursor-pointer group">
                <div className="zero:flex sm:block items-center w-full">
                    <div className="flex items-start relative w-fit" onClick={playmusicselected}>
                        <div className="peer/img">
                            <img src={covermusic} alt={`cover music ${titlemusic}`} className={`sm:w-full zero:w-20 lg:h-32 md:h-28 sm:h-24 ${getopacityandhoverforimage}`} />
                        </div>
                        <div className={`absolute transition-all ${getblockorhideplay} group-hover:block `} style={transform} onClick={playmusicselected}>
                            {localStorage.getItem("namemusicplayingorplayed") === titlemusic && localStorage.getItem("artistmusicplayingorplayed") === artistmusic ? <>
                                {durationtimemusic[0] !== "0NaN" && durationtimemusic[1] !== "0NaN" ?
                                    <>
                                        {ismusicwaiting === false ?
                                            <>
                                                {isplayorispause === true ?
                                                    <FontAwesomeIcon icon={faPause} className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur text-white" onClick={playmusicselected} />
                                                    : <FontAwesomeIcon icon={faPlay} className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur text-white" onClick={playmusicselected} />
                                                }
                                            </>
                                            : <div className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur">
                                                <ReactLoading type={"spin"} color="white" height={20} width={20} />
                                            </div>
                                        }
                                    </>
                                    : <div className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur">
                                        <ReactLoading type={"spin"} color="white" height={20} width={20} />
                                    </div>
                                }
                            </> :
                                <>
                                    {isplayorispause === true && localStorage.getItem("namemusicplayingorplayed") === titlemusic ?
                                        <FontAwesomeIcon icon={faPause} className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur" color="white" onClick={playmusicselected}></FontAwesomeIcon> : <FontAwesomeIcon icon={faPlay} color="white" className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur" onClick={playmusicselected}></FontAwesomeIcon>
                                    }
                                </>
                            }
                        </div>
                    </div>
                    <div className="ml-1 mt-2 sm:ml-0 zero:ml-5 sm:block zero:flex justify-start flex-col">
                        {linkpagetitlemusic !== undefined && linkpagetitlemusic.length !== 0 ?
                            <NavLink to={`/song/${linkpagetitlemusic}`} className="w-fit">
                                <h3 className="sm:block zero:hidden md:text-base zero:text-base text-white w-full">{titlemusic.length >= 10 ? slicetexttitle : titlemusic}</h3>
                                <h3 className="sm:hidden zero:block md:text-base zero:text-base text-white w-full">{titlemusic}</h3>
                            </NavLink>
                            : <>
                                <h3 className="sm:block zero:hidden md:text-base zero:text-base text-white mt-3 w-fit">{titlemusic.length >= 10 ? slicetexttitle : titlemusic}</h3>
                                <h3 className="sm:hidden zero:block md:text-base zero:text-base text-white mt-3 w-fit">{titlemusic}</h3>
                            </>
                        }
                        {linkpageartistmusic !== undefined && linkpageartistmusic.length !== 0 ?
                            <NavLink to={`/artist/${linkpageartistmusic}`} className="w-fit" >
                                <h5 className="sm:block zero:hidden md:text-sm zero:text-sm text-bluepro mt-3">{artistmusic.length >= 10 ? slicetextartist : artistmusic}</h5>
                                <h5 className="sm:hidden zero:block md:text-sm zero:text-sm text-bluepro mt-3">{artistmusic}</h5>
                            </NavLink>
                            : <>
                                <h3 className="sm:block zero:hidden md:text-base zero:text-base text-white mt-3 w-fit">{artistmusic.length >= 10 ? slicetexttitle : artistmusic}</h3>
                                <h3 className="sm:hidden zero:block md:text-base zero:text-base text-white mt-3 w-fit">{artistmusic}</h3>
                            </>
                        }
                    </div>
                </div>
                <div className="zero:flex sm:hidden items-cetner justify-center md:mr-2 zero:mr-0">
                    <FontAwesomeIcon icon={faTrash} onClick={deleteinfavourite} className="bg-blackpro rounded-full p-1.5 cursor-pointer backdrop-blur w-3 h-3 transition-all hover:border-bluepro" color="#3369ff"></FontAwesomeIcon>
                </div>
            </div>
        </>
    )
}

export default Showtracksliked