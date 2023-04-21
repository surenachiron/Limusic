import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/fontawesome-free-solid";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ReactLoading from 'react-loading';
import ananymousartist from '../../assets/images/ananymousformusicorartist.png'
import { setplaylistsongsotginalyfake } from "../../redux/actions/song";

const Showdetailssong = () => {

    const dispatch = useDispatch()
    const songalldetails = useSelector(state => state.songselected)
    const isplayorispause = useSelector(state => state.isplayorispause)
    const durationtimemusic = useSelector(state => state.durationtimemusic)
    const countplaysong = useSelector(state => state.countplaysong)
    const ismusicwaiting = useSelector(state => state.ismusicwaiting)
    const conversioncoutplaytostring = String(countplaysong).split('').reverse();
    let conversioncountplay = []
    for (let i = 0; i < conversioncoutplaytostring.length; i++) {
        if ((i === 2 && conversioncoutplaytostring.length > 3) || (i === 5 && conversioncoutplaytostring.length > 6) || (i === 8 && conversioncoutplaytostring.length > 9) || (i === 11 && conversioncoutplaytostring.length > 12)) {
            conversioncountplay[i] = ("," + conversioncoutplaytostring[i]);
        } else
            conversioncountplay[i] = conversioncoutplaytostring[i];
    }

    /// for play music
    const playlistpagesongorginaly = useSelector(state => state.playlistpagesongorginalyorginaly.songs)
    const playmusicselected = () => {
        dispatch(setplaylistsongsotginalyfake(playlistpagesongorginaly, songalldetails.title))
    }

    /// styles
    const [getopacityandhoverforimage, setopacityandhoverforimage] = useState("")
    useEffect(() => {
        if (localStorage.getItem("namemusicplayingorplayed") === songalldetails.title && localStorage.getItem("artistmusicplayingorplayed") === songalldetails.subtitle)
            setopacityandhoverforimage("opacity-80")
        else setopacityandhoverforimage("hover:opacity-80 group-hover:opacity-80")
    }, [isplayorispause, durationtimemusic, songalldetails.title, songalldetails.subtitle])

    return (
        <>
            <div className={`flex flex-col lg:mt-8`}>
                <div id="musicshow" className="h-fit px-5 backdrop-blur-sm lg:border-1 zero:border-0 p-4 rounded-3xl mt-4 flex flex-col items-center justify-center">
                    <div className="flex items-start justify-center relative group">
                        <div className="w-3/4 h-10/12 peer/img">
                            <img src={songalldetails.images === undefined ? ananymousartist : songalldetails.images.coverart} alt={`${songalldetails.title}`} className={`rounded-xl h-full w-full transition-all ${getopacityandhoverforimage}`} />
                        </div>
                        <div className={`absolute transition-all top-1/2 block peer-hover/img:block`} onClick={playmusicselected}>
                            {playlistpagesongorginaly.length > 2 ?
                                <>
                                    {localStorage.getItem("namemusicplayingorplayed") === songalldetails.title && localStorage.getItem("artistmusicplayingorplayed") === songalldetails.subtitle ? <>
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
                                                        <ReactLoading type={"spin"} color="white" height={15} width={15} />
                                                    </div>
                                                }
                                            </>
                                            : <div className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur">
                                                <ReactLoading type={"spin"} color="white" height={15} width={15} />
                                            </div>
                                        }
                                    </> :
                                        <>
                                            <FontAwesomeIcon icon={faPlay} color="white" className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur" onClick={playmusicselected}></FontAwesomeIcon>
                                        </>
                                    }
                                </>
                                : <div className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur">
                                    <ReactLoading type={"spin"} color="white" height={15} width={15} />
                                </div>}
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center backdrop-blur-sm mt-2">
                        <h3 className="text-lg">{songalldetails.title}</h3>
                        <NavLink to={`/artist/${songalldetails.artists.map(o => o.adamid)[0]}`}>
                            <h6 className="text-sm font-medium my-2">{songalldetails.subtitle}</h6>
                        </NavLink>
                        <div className="flex text-grayprolight">
                            <p id="category">{songalldetails.genres.primary} . </p>
                            <FontAwesomeIcon icon={faPlay} className={`mx-2 rounded-full border-1 p-1 text-sm`}></FontAwesomeIcon>
                            <p id="viewmusic">
                                {conversioncountplay.reverse().map(o => o)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showdetailssong