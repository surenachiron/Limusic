import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from 'react-loading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPause, faPlay } from "@fortawesome/fontawesome-free-solid";
import { playlistmusicspageabum } from "../../redux/actions/albums";
import { addedtracksfavourite, deletedtracksfavourite } from "../../redux/actions/favourite";

const Mapingandahowingmusicalbum = ({ namemusic, artistsong, covermusic, numberinalbum, soundsong, like, linkpageartist }) => {

    const backupdetailsalbumsforplaylist = useSelector(state => state.backupdetailsalbumsforplaylist[0])

    const dispatch = useDispatch()
    const ismusicwaiting = useSelector(state => state.ismusicwaiting)
    const isplayorispause = useSelector(state => state.isplayorispause)
    const durationtimemusic = useSelector(state => state.durationtimemusic)

    const playmusicselected = () => {
        dispatch(playlistmusicspageabum(backupdetailsalbumsforplaylist, namemusic))
    }

    const adddordeletetofavoutirelist = () => {
        if (like === true) {
            dispatch(deletedtracksfavourite(namemusic, "albume", localStorage.getItem("currenttimemusicplaying")))
        } else {
            const newtrackfavourite = {
                namesong: namemusic,
                nameartist: artistsong,
                imagesong: covermusic,
                soundsong: soundsong,
                linkpagesong: '',
                linkpageartist: linkpageartist,
                like: like,
            }
            dispatch(addedtracksfavourite(newtrackfavourite, "albume", localStorage.getItem("currenttimemusicplaying")))
        }
    }

    /// styles
    const [getblockorhideplay, setblockorhideplay] = useState("")
    const [getopacityandhoverforimage, setopacityandhoverforimage] = useState("")
    const [getfixhoverinplaying, setfixhoverinplaying] = useState("")
    useEffect(() => {
        if (localStorage.getItem("namemusicplayingorplayed") === namemusic && localStorage.getItem("artistmusicplayingorplayed") === artistsong) {
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
                    <div className="flex items-center justify-center relative">
                        <div className="peer/img">
                            <img src={covermusic} alt={`cover music ${namemusic}`} className={`md:w-12 md:h-12 zero:w-20 zero:h-20 rounded-3xl ${getopacityandhoverforimage}`} />
                        </div>
                        <div className={`absolute transition-all ${getblockorhideplay} group-hover:block`} style={transform} onClick={playmusicselected}>
                            {localStorage.getItem("namemusicplayingorplayed") === namemusic && localStorage.getItem("artistmusicplayingorplayed") === artistsong ? <>
                                {durationtimemusic[0] !== "0NaN" && durationtimemusic[1] !== "0NaN" ?
                                    <>
                                        {ismusicwaiting === false ?
                                            <>
                                                {isplayorispause === true ?
                                                    <FontAwesomeIcon icon={faPause} className="border-1 bg-blackpro rounded-full text-sm p-2 cursor-pointer backdrop-blur" />
                                                    : <FontAwesomeIcon icon={faPlay} className="border-1 bg-blackpro rounded-full text-sm p-2 cursor-pointer backdrop-blur" />
                                                }
                                            </>
                                            : <div className="border-1 bg-blackpro rounded-full text-sm p-2 cursor-pointer backdrop-blur">
                                                <ReactLoading type={"spin"} color="white" height={20} width={20} />
                                            </div>
                                        }
                                    </>
                                    : <div className="border-1 bg-blackpro rounded-full text-sm p-2 cursor-pointer backdrop-blur">
                                        <ReactLoading type={"spin"} color="white" height={20} width={20} />
                                    </div>
                                }
                            </> :
                                <>
                                    {isplayorispause === true && localStorage.getItem("namemusicplayingorplayed") === namemusic ?
                                        <FontAwesomeIcon icon={faPause} className="border-1 bg-blackpro rounded-full text-sm p-2 cursor-pointer backdrop-blur" color="white" onClick={playmusicselected}></FontAwesomeIcon> : <FontAwesomeIcon icon={faPlay} color="white" className="border-1 bg-blackpro rounded-full text-sm p-2 cursor-pointer backdrop-blur" onClick={playmusicselected}></FontAwesomeIcon>
                                    }
                                </>
                            }
                        </div>
                    </div>
                    <div className="ml-5 md:block zero:hidden">
                        <h4 className="text-base font-medium text-grayprolight">{numberinalbum}</h4>
                    </div>
                    <div className="ml-5">
                        <h4 className="text-base font-medium md:block zero:hidden">{namemusic}</h4>
                        <h4 className="text-base font-medium md:hidden zero:block">{namemusic.length <= 30 ? namemusic : namemusic.slice(0, 30) + "..."}</h4>
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

export default Mapingandahowingmusicalbum