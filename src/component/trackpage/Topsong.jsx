import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/fontawesome-free-solid";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ananymousartist from '../../assets/images/ananymousformusicorartist.png'
import { setplaylistsongsotginalyfake } from "../../redux/actions/song";
import ReactLoading from 'react-loading';

const Topsong = ({ namemusic, artistsong, linkpagemusic, linkpageartist, covermusic, widthforcovermusic, heightforcovermusic }) => {

    const samplecovermusic = covermusic.slice(0, covermusic.length - 13)
    const aslcovermusic = samplecovermusic + widthforcovermusic + "x" + heightforcovermusic + "bb.jpg"
    const littlenamemusicmdtolg = namemusic.slice(0, 15) + " ..."
    const littlenamemusiczerotosm = namemusic.slice(0, 10) + " ..."
    const littleartistsong = artistsong.slice(0, 10) + " ..."

    /// for play music

    const dispatch = useDispatch()
    const isplayorispause = useSelector(state => state.isplayorispause)
    const ismusicwaiting = useSelector(state => state.ismusicwaiting)
    const durationtimemusic = useSelector(state => state.durationtimemusic)
    const playlistpagesongorginaly = useSelector(state => state.playlistpagesongorginalyorginaly.songs)

    const playmusicselected = () => {
        dispatch(setplaylistsongsotginalyfake(playlistpagesongorginaly, namemusic))
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
                    <img src={aslcovermusic === undefined ? ananymousartist : aslcovermusic} alt={`picture music ${namemusic}`} className={`w-24 lg:h-24 md:h-24 sm:h-16 rounded-full ${getopacityandhoverforimage}`} />
                </div>
                <div className={`absolute transition-all ${getblockorhideplay} peer-hover/img:block`} style={transform}>
                    {playlistpagesongorginaly.length > 2 ?
                        <>
                            {localStorage.getItem("namemusicplayingorplayed") === namemusic && localStorage.getItem("artistmusicplayingorplayed") === artistsong ? <>
                                {durationtimemusic[0] !== "0NaN" && durationtimemusic[1] !== "0NaN" ?
                                    <>
                                        {ismusicwaiting === false ?
                                            <>
                                                {isplayorispause === true ?
                                                    <FontAwesomeIcon icon={faPause} className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur text-white" />
                                                    : <FontAwesomeIcon icon={faPlay} className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur text-white" />
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
                        </>
                        : <div className="flex items-center">
                            <ReactLoading type={"spin"} color="white" height={20} width={20} />
                        </div>}
                </div>
            </div>
            <div className="flex flex-col ml-3">
                {/* <NavLink to={`/song/${linkpagemusic}`} className="transition-all hover:text-bluepro hover:underline"> */}
                <h3 className="text-base md:block zero:hidden text-white">{namemusic.length >= 15 ? littlenamemusicmdtolg : namemusic}</h3>
                <h3 className="text-sm md:hidden zero:block text-white">{namemusic.length >= 10 ? littlenamemusiczerotosm : namemusic}</h3>
                {/* </NavLink> */}
                <NavLink to={`/artist/${linkpageartist}`} className="transition-all hover:text-bluepro hover:underline">
                    <h6 className="font-extralight text-sm text-grayprolight">{artistsong.length >= 10 ? littleartistsong : artistsong}</h6>
                </NavLink>
            </div>
        </div>
    )
}

export default Topsong