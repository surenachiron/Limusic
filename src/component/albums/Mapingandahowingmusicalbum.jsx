import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ReactLoading from 'react-loading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPause, faPlay } from "@fortawesome/fontawesome-free-solid";
import { playlistmusicspageabum } from "../../redux/actions/albums";

const Mapingandahowingmusicalbum = ({ namemusic, artistsong, covermusic, numberinalbum }) => {

    const backupdetailsalbumsforplaylist = useSelector(state => state.backupdetailsalbumsforplaylist[0])

    const dispatch = useDispatch()
    const isplayorispause = useSelector(state => state.isplayorispause)
    const durationtimemusic = useSelector(state => state.durationtimemusic)

    const playmusicselected = () => {
        dispatch(playlistmusicspageabum(backupdetailsalbumsforplaylist, namemusic))
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
            <div className={`border-b-1 border-grayprodark py-2 flex items-center justify-between transition-all ${getfixhoverinplaying} hover:bg-grayprodark hover:cursor-pointer px-2 rounded group`} onClick={playmusicselected}>
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center relative">
                        <div className="peer/img">
                            <img src={covermusic} alt={`picture music ${namemusic}`} className={`md:w-12 md:h-12 zero:w-20 zero:h-20 rounded-3xl ${getopacityandhoverforimage}`} />
                        </div>
                        <div className={`absolute transition-all ${getblockorhideplay} group-hover:block`} style={transform}>
                            {durationtimemusic[0] !== "0NaN" && durationtimemusic[1] !== "0NaN" ?
                                <>
                                    {isplayorispause === true && localStorage.getItem("namemusicplayingorplayed") === namemusic ?
                                        <FontAwesomeIcon icon={faPause} className="border-1 bg-blackpro rounded-full text-sm p-2 cursor-pointer backdrop-blur" color="white" onClick={playmusicselected}></FontAwesomeIcon> : <FontAwesomeIcon icon={faPlay} color="white" className="border-1 bg-blackpro rounded-full text-sm p-2 cursor-pointer backdrop-blur" onClick={playmusicselected}></FontAwesomeIcon>}
                                </> :
                                <div className="border-1 bg-blackpro rounded-full text-sm p-2 cursor-pointer backdrop-blur">
                                    <ReactLoading type={"spin"} color="white" height={20} width={20} />
                                </div>
                            }
                        </div>
                    </div>
                    <div className="ml-5 md:block zero:hidden">
                        <h4 className="text-base font-medium text-grayprolight">{numberinalbum}</h4>
                    </div>
                    <div className="ml-5">
                        <h4 className="text-base font-medium">{namemusic}</h4>
                    </div>
                </div>
                <div className="flex items-cetner justify-center">
                    <FontAwesomeIcon icon={faHeart} className="border-1 border-grayprolight bg-blackpro rounded-full p-1.5 cursor-pointer backdrop-blur w-3 h-3 transition-all hover:border-bluepro" color="white"></FontAwesomeIcon>
                </div>
            </div>
        </>
    )
}

export default Mapingandahowingmusicalbum