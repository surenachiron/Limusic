import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/fontawesome-free-solid";
import { playlistcharttopmusichomepage } from "../../redux/actions/homepage";
import ReactLoading from 'react-loading';

import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination"
import "./swiperslide.css"

const Charttop50 = ({ covermusic, titlemusic, linkpagetitlemusic, artistmusic, linkpageartistmusic }) => {

    let slicetexttitle = titlemusic.slice(0, 10) + "..."
    let slicetextartist = artistmusic.slice(0, 10) + "..."

    const dispatch = useDispatch()
    const isplayorispause = useSelector(state => state.isplayorispause)
    const durationtimemusic = useSelector(state => state.durationtimemusic)
    const chartsspecificsong = useSelector(state => state.chartsspecificsong[0])

    const playmusicselected = () => {
        dispatch(playlistcharttopmusichomepage(chartsspecificsong, titlemusic))
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
        <Fragment>
            <div className="cursor-pointer zero:w-full lg:w-auto">
                <div className="flex items-start justify-center relative group">
                    <div className="peer/img">
                        <img src={covermusic} alt={`picture music ${titlemusic}`} className={`w-full lg:h-32 md:h-28 sm:h-24 rounded-3xl ${getopacityandhoverforimage}`} />
                    </div>
                    <div className={`absolute transition-all ${getblockorhideplay} peer-hover/img:block`} style={transform}>
                        {durationtimemusic[0] !== "0NaN" && durationtimemusic[1] !== "0NaN" ?
                            <>
                                {isplayorispause === true && localStorage.getItem("namemusicplayingorplayed") === titlemusic ?
                                    <FontAwesomeIcon icon={faPause} className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur" color="white" onClick={playmusicselected}></FontAwesomeIcon> : <FontAwesomeIcon icon={faPlay} color="white" className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur" onClick={playmusicselected}></FontAwesomeIcon>}
                            </> :
                            <div className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur">
                                <ReactLoading type={"spin"} color="white" height={20} width={20} />
                            </div>
                        }

                    </div>
                </div>
                <div className="ml-1 mt-2">
                    {linkpagetitlemusic !== undefined && linkpagetitlemusic.length !== 0 ?
                        <NavLink to={`/song/${linkpagetitlemusic}`} >
                            <h5 className="mdlg:text-base zero:text-base text-white w-full">{titlemusic.length >= 10 ? slicetexttitle : titlemusic}</h5>
                        </NavLink>
                        : <h3 className="mdlg:text-base zero:text-base text-bluepro mt-3">{titlemusic.length >= 10 ? slicetexttitle : titlemusic}</h3>
                    }
                    {linkpageartistmusic !== undefined && linkpageartistmusic.length !== 0 ?
                        <NavLink to={`/artist/${linkpageartistmusic}`} >
                            <h3 className="mdlg:text-base zero:text-base text-bluepro mt-3">{artistmusic.length >= 10 ? slicetextartist : artistmusic}</h3>
                        </NavLink>
                        : <h3 className="mdlg:text-base zero:text-base text-bluepro mt-3">{artistmusic.length >= 10 ? slicetextartist : artistmusic}</h3>
                    }
                </div>
            </div>
        </Fragment >
    )
}

export default Charttop50