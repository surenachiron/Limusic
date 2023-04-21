import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { playlisttopsongartisti } from "../../redux/actions/artist";
import './allstylespecialartist.css'
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/fontawesome-free-solid";
import ReactLoading from 'react-loading';


const Topsongbyartist = ({ namemusic, artistsong, linkpagemusic, linkpageartist, covermusic }) => {

    const littlenamemusicmdtolg = namemusic.slice(0, 15) + " ..."
    const littlenamemusiczerotosm = namemusic.slice(0, 10) + " ..."
    const littleartistsong = artistsong.slice(0, 10) + " ..."

    /// play music

    const dispatch = useDispatch()
    const ismusicwaiting = useSelector(state => state.ismusicwaiting)
    const isplayorispause = useSelector(state => state.isplayorispause)
    const durationtimemusic = useSelector(state => state.durationtimemusic)
    const topsongartist = useSelector(state => state.topsongsartist[0])

    const playmusicselected = () => {
        dispatch(playlisttopsongartisti(topsongartist, namemusic))
    }

    /// styles
    const [getblockorhideplay, setblockorhideplay] = useState("")
    const [getopacityandhoverforimage, setopacityandhoverforimage] = useState("")
    useEffect(() => {
        if (localStorage.getItem("namemusicplayingorplayed") === namemusic && localStorage.getItem("artistmusicplayingorplayed") === artistsong) {
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
        <div className="flex items-center cursor-pointer">
            <div className="flex items-start justify-center relative group">
                <div className="peer/img">
                    <img src={covermusic} alt={`cover music ${namemusic}`} className={`w-24 lg:h-24 md:h-24 sm:h-16 rounded-full ${getopacityandhoverforimage}`} />
                </div>
                <div className={`absolute transition-all ${getblockorhideplay} peer-hover/img:block`} style={transform} onClick={playmusicselected}>
                    {localStorage.getItem("namemusicplayingorplayed") === namemusic && localStorage.getItem("artistmusicplayingorplayed") === artistsong ? <>
                        {durationtimemusic[0] !== "0NaN" && durationtimemusic[1] !== "0NaN" ?
                            <>
                                {ismusicwaiting === false ?
                                    <>
                                        {isplayorispause === true ?
                                            <FontAwesomeIcon icon={faPause} className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur  text-white" />
                                            : <FontAwesomeIcon icon={faPlay} className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur  text-white" />
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
                            {isplayorispause === true && localStorage.getItem("namemusicplayingorplayed") === namemusic ?
                                <FontAwesomeIcon icon={faPause} className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur" color="white" onClick={playmusicselected}></FontAwesomeIcon> : <FontAwesomeIcon icon={faPlay} color="white" className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur" onClick={playmusicselected}></FontAwesomeIcon>
                            }
                        </>
                    }
                </div>
            </div>
            <div className="flex flex-col ml-3">
                <h3 className="text-base md:block zero:hidden text-white text-start">{namemusic.length >= 15 ? littlenamemusicmdtolg : namemusic}</h3>
                <h3 className="text-sm md:hidden zero:block text-white text-start">{namemusic.length >= 10 ? littlenamemusiczerotosm : namemusic}</h3>
                <NavLink to={linkpageartist.length !== 0 ? `/artist/${linkpageartist}` : ""} className="transition-all hover:text-bluepro hover:underline text-start">
                    <h6 className="font-extralight text-sm text-grayprolight">{artistsong.length >= 10 ? littleartistsong : artistsong}</h6>
                </NavLink>
            </div>
        </div >
    )
}

export default Topsongbyartist