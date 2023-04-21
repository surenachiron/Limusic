import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ReactLoading from 'react-loading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPause, faPlay } from "@fortawesome/fontawesome-free-solid";
import { playlisttrackstopforcountrie } from "../../redux/actions/charts";
import { addedtracksfavourite, deletedtracksfavourite } from "../../redux/actions/favourite";

const Showtrackstopcountrie = ({ covermusic, titlemusic, linkpagetitlemusic, artistmusic, linkpageartistmusic, numberinalbum, soundsong, like }) => {

    let slicetexttitle = titlemusic.slice(0, 20) + "..."
    let slicetextartist = artistmusic.slice(0, 20) + "..."

    const dispatch = useDispatch()
    const listtopmusicforcountriecahrts = useSelector(state => state.listtopmusicforcountriecahrts[0])
    const ismusicwaiting = useSelector(state => state.ismusicwaiting)
    const isplayorispause = useSelector(state => state.isplayorispause)
    const durationtimemusic = useSelector(state => state.durationtimemusic)

    const playmusicselected = () => {
        dispatch(playlisttrackstopforcountrie(listtopmusicforcountriecahrts, titlemusic))
    }

    const adddordeletetofavoutirelist = () => {
        if (like === true) {
            dispatch(deletedtracksfavourite(titlemusic, "chartinpagechart", localStorage.getItem("currenttimemusicplaying")))
        } else {
            const newtrackfavourite = {
                namesong: titlemusic,
                nameartist: artistmusic,
                imagesong: covermusic,
                soundsong: soundsong,
                linkpagesong: linkpagetitlemusic,
                linkpageartist: linkpageartistmusic,
                like: like,
            }
            dispatch(addedtracksfavourite(newtrackfavourite, "chartinpagechart", localStorage.getItem("currenttimemusicplaying")))
        }
    }


    /// styles
    const [getblockorhideplay, setblockorhideplay] = useState("")
    const [getopacityandhoverforimage, setopacityandhoverforimage] = useState("")
    const [getfixhoverinplaying, setfixhoverinplaying] = useState("")
    useEffect(() => {
        if (localStorage.getItem("namemusicplayingorplayed") === titlemusic && localStorage.getItem("artistmusicplayingorplayed") === artistmusic) {
            setblockorhideplay("block")
            setopacityandhoverforimage("opacity-80")
            setfixhoverinplaying("bg-grayprodark")
        } else {
            setblockorhideplay("hover:block hidden")
            setopacityandhoverforimage("hover:opacity-80 group-hover:opacity-80")
            setfixhoverinplaying("")
        }
    }, [isplayorispause, durationtimemusic])

    const transform = {
        transform: 'translate(-50%, -43%)',
        top: "50%",
        left: "50%"
    };

    return (
        <>
            <div className={`border-b-1 border-grayprodark py-2 flex items-center justify-between transition-all ${getfixhoverinplaying} hover:bg-grayprodark hover:cursor-pointer px-2 rounded group`}>
                <div className="flex items-center justify-start w-full" onClick={playmusicselected}>
                    <div className="mr-5 md:ml-2 zero:ml-0">
                        <h4 className="text-base font-medium text-white">{numberinalbum}</h4>
                    </div>
                    <div className="flex items-center justify-center relative" onClick={playmusicselected}>
                        <div className="peer/img">
                            <img src={covermusic} alt={`cover music ${titlemusic}`} className={`md:w-16 md:h-16 zero:w-20 zero:h-20 rounded-lg ${getopacityandhoverforimage}`} />
                        </div>
                        <div className={`absolute transition-all ${getblockorhideplay} group-hover:block`} style={transform}>
                            {localStorage.getItem("namemusicplayingorplayed") === titlemusic && localStorage.getItem("artistmusicplayingorplayed") === artistmusic ? <>
                                {durationtimemusic[0] !== "0NaN" && durationtimemusic[1] !== "0NaN" ?
                                    <>
                                        {ismusicwaiting === false ?
                                            <>
                                                {isplayorispause === true ?
                                                    <FontAwesomeIcon icon={faPause} className="border-1 bg-blackpro rounded-full text-sm p-2 cursor-pointer backdrop-blur text-white" onClick={playmusicselected} />
                                                    : <FontAwesomeIcon icon={faPlay} className="border-1 bg-blackpro rounded-full text-sm p-2 cursor-pointer backdrop-blur text-white" onClick={playmusicselected} />
                                                }
                                            </>
                                            : <div className="border-1 bg-blackpro rounded-full text-sm p-2 cursor-pointer backdrop-blur text-white">
                                                <ReactLoading type={"spin"} color="white" height={15} width={15} />
                                            </div>
                                        }
                                    </>
                                    : <div className="border-1 bg-blackpro rounded-full text-sm p-2 cursor-pointer backdrop-blur text-white">
                                        <ReactLoading type={"spin"} color="white" height={15} width={15} />
                                    </div>
                                }
                            </> :
                                <>
                                    <FontAwesomeIcon icon={faPlay} color="white" className="border-1 bg-blackpro rounded-full text-sm p-2 cursor-pointer backdrop-blur" onClick={playmusicselected}></FontAwesomeIcon>
                                </>
                            }
                        </div>
                    </div>
                    <div className="ml-5 z-50">
                        <NavLink to={`/song/${linkpagetitlemusic}`}>
                            <h4 className="text-base font-medium md:block zero:hidden">{titlemusic.length <= 60 ? titlemusic : titlemusic.slice(0, 40) + "..."}</h4>
                            <h4 className="text-base font-medium md:hidden zero:bloc">{titlemusic.length <= 30 ? titlemusic : slicetexttitle}</h4>
                        </NavLink>
                        <NavLink to={`/artist/${linkpageartistmusic}`}>
                            <h4 className="text-base font-medium md:block zero:hidden text-grayprolight">{artistmusic.length <= 60 ? artistmusic : artistmusic.slice(0, 40) + "..."}</h4>
                            <h4 className="text-base font-medium md:hidden zero:bloc text-grayprolight">{artistmusic.length <= 30 ? artistmusic : slicetextartist}</h4>
                        </NavLink>
                    </div>
                </div>
                <div className="flex items-cetner justify-center" onClick={adddordeletetofavoutirelist}>
                    {like === true ? <FontAwesomeIcon icon={faHeart} className="border-1 border-grayprolight bg-blackpro rounded-full p-1.5 cursor-pointer backdrop-blur w-3 h-3 transition-all hover:border-bluepro" color="#3369ff"></FontAwesomeIcon> :
                        <FontAwesomeIcon icon={faHeart} className="border-1 border-grayprolight bg-blackpro rounded-full p-1.5 cursor-pointer backdrop-blur w-3 h-3 transition-all hover:border-bluepro" color="white"></FontAwesomeIcon>
                    }
                </div>
            </div>
        </>
    )
}

export default Showtrackstopcountrie