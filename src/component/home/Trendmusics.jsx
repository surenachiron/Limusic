import React, { Fragment } from "react";
import { faPlayCircle } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import trendeartist from '../../assets/images/artisttrand.png'
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { playlisttrendmusichomepage } from "../../redux/actions/homepage";

const Trendmusics = () => {

    const dispatch = useDispatch()
    const trendmusic = useSelector(state => state.songtrendhomepage)

    const playmusicselected = () => {
        dispatch(playlisttrendmusichomepage(trendmusic, trendmusic[0].namesong))
    }

    return (
        <Fragment>
            <div className="h-4/5 flex grid grid-cols-12 border-1 rounded-3xl items-center justify-center mb-5">
                <div className="col-span-6 pl-14 py-3">
                    <h2 className="mdlg:text-base sm:text-sm zero:text-xs">Trending</h2>
                    <NavLink to={`/song/${trendmusic[0].linkpagesong}`}>
                        <h3 className="mdlg:text-5xl sm:text-4xl zero:text-3xl my-5">{trendmusic[0].namesong}</h3>
                    </NavLink>
                    <NavLink to={`/artist/${trendmusic[0].linkpageartist}`}>
                        <h4 className="mdlg:text-base sm:text-sm zero:text-xs">{trendmusic[0].nameartist}</h4>
                    </NavLink>
                    <div className="flex items-end mt-5">
                        <button id="PlayMusicTrand" className="lg:px-10 lg:py-3 md:px-2 md:py-2 zero:py-2 zero:px-2 bg-bluepro rounded-2xl" onClick={playmusicselected}>Play Now
                            <FontAwesomeIcon icon={faPlayCircle} className={`ml-2 cursor-pointer text-base`}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
                <div className="col-span-6 pr-10">
                    <img src={trendeartist} alt="" className="w-full h-full rounded-3xl smmdlg:p-8 zero:p-0" />
                </div>
            </div>
        </Fragment>
    )
}

export default Trendmusics