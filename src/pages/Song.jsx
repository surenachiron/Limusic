import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ReactLoading from 'react-loading';
import { Helmet } from "react-helmet";
import Mapintopsong from "../component/trackpage/Mapintopsong";
import Mapinsimilarsong from "../component/trackpage/Mapinsimilarsong";
import Lyricssong from "../component/trackpage/Lyricssong";
import Musicvideosong from "../component/trackpage/Musicvideosong";
import Showdetailssong from "../component/trackpage/Showdetailssong";
import { changeovervieworlyrics, initializelittlesimilarsong, initializesimilarsong, initializesong, initializetopsong } from "../redux/actions/song";
import { callsimilarsongs, callsongdetails, getcountplaysong } from "../services/usedetailspagesong";

const Song = () => {

    const loading = useSelector(state => state.forloading)
    const songalldetails = useSelector(state => state.songselected)
    const topsongalldetails = useSelector(state => state.topsongbyartist)
    const showtopsongorno = useSelector(state => state.showtopsongorno)
    const similarsongalldetails = useSelector(state => state.similarsong)
    const showsimilatsongorno = useSelector(state => state.showsimilatsongorno)
    const overvieworlyrics = useSelector(state => state.overvieworlyrics)

    let borderoverview = ""
    let borderlyric = ""
    let showoverview = ""
    let showlyric = ""
    if (overvieworlyrics === true) {
        borderoverview = 'border-grayprolight'
        borderlyric = 'border-bluepro'
        showoverview = 'zero:col-span-0 zero:hidden'
        showlyric = 'zero:col-span-12 zero:mr-0'
    } else {
        borderoverview = 'border-bluepro'
        borderlyric = 'border-grayprolight'
        showoverview = 'zero:col-span-12 zero:mr-0'
        showlyric = 'zero:col-span-0 zero:hidden'
    }

    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        const keysongselected = location.pathname.slice(6,)
        dispatch(initializetopsong([]))
        dispatch(initializesong([]))
        dispatch(initializesimilarsong([]))
        dispatch(initializelittlesimilarsong([]))
        callsongdetails(dispatch, keysongselected);
        callsimilarsongs(dispatch, keysongselected);
        getcountplaysong(dispatch, keysongselected)
    }, [dispatch, location.pathname])
    useEffect(() => {
        const keysongselected = location.pathname.slice(6,)
        dispatch(initializetopsong([]))
        dispatch(initializesong([]))
        dispatch(initializesimilarsong([]))
        dispatch(initializelittlesimilarsong([]))
        callsongdetails(dispatch, keysongselected);
        callsimilarsongs(dispatch, keysongselected)
        getcountplaysong(dispatch, keysongselected)
    }, [dispatch, location.pathname])

    return (
        <Fragment>

            <Helmet>
                <title>{songalldetails.title}</title>
            </Helmet>

            {loading === true ? <div className="flex flex-col items-center justify-center md:h-80/100 zero:h-60/100 zero:mt-10 md:mt-0">
                <ReactLoading type={"spin"} color="#3369ff" height={130} width={130} />
                <h4 className="mt-3">Reciveing Data</h4>
            </div> :
                <Fragment>
                    {songalldetails.length !== 0 ?
                        <div className="mx-5">
                            <div className="maindetailssong">
                                <Showdetailssong />
                            </div>
                            <div className="lg:hidden zero:grid grid-cols-12 md:mt-10 zero:mt-3 text-center cursor-pointer">
                                {songalldetails.sections[1].text !== undefined ?
                                    <>
                                        <h2 className={`col-span-6 text-2xl border-b-1 ${borderoverview}`} onClick={() => dispatch(changeovervieworlyrics(false))}>OVERVIEW</h2>
                                        <h2 className={`col-span-6 text-2xl border-b-1 ${borderlyric}`} onClick={() => dispatch(changeovervieworlyrics(true))}>LYRICS</h2>
                                    </>
                                    : ""
                                }
                            </div>
                            <div className="grid grid-cols-12 mt-10">
                                <div id="contentsong" className={`lg:col-span-9 lg:block lg:mr-7 ${showoverview}`}>
                                    {songalldetails.sections[1].youtubeurl !== undefined || songalldetails.sections[2].youtubeurl !== undefined ?
                                        <div id="musicvedio">
                                            <h3 className="text-2xl border-b-1 border-slate-400 pb-4 mb-5">Music Video</h3>
                                            <Musicvideosong />
                                        </div>
                                        : <></>}
                                    <div id="topsongartist" className="mt-10">
                                        {showtopsongorno === true || topsongalldetails.length !== 0 ?
                                            <div className="flex border-b-1 border-slate-400 pb-4 mb-5">
                                                <h3 className="text-2xl">Top Songs By {songalldetails.subtitle}</h3>
                                                {showtopsongorno === true ?
                                                    <div className="flex items-center justify-center ml-5">
                                                        <ReactLoading type={"spin"} color="white" className="w-6 h-6" />
                                                    </div>
                                                    : <></>}
                                            </div>
                                            : <></>
                                        }
                                        {topsongalldetails.length !== 0 && topsongalldetails.errors === undefined ?
                                            <Mapintopsong />
                                            : <></>}
                                    </div>
                                    <div id="similarsongs" className="mt-10">
                                        {showsimilatsongorno === true || similarsongalldetails.tracks !== undefined ?
                                            <div className="flex border-b-1 border-slate-400 pb-4 mb-5">
                                                <h3 className="text-2xl">Similar Songs</h3>
                                                {showsimilatsongorno === true ?
                                                    <div className="flex items-center justify-center ml-5">
                                                        <ReactLoading type={"spin"} color="white" className="w-6 h-6" />
                                                    </div>
                                                    : <></>}
                                            </div>
                                            : <></>
                                        }
                                        {similarsongalldetails.length !== 0 && similarsongalldetails.errors === undefined ?
                                            <Mapinsimilarsong />
                                            : <></>}
                                    </div>
                                </div>
                                <div id="Lyricsmusic" className={`lg:col-span-3 lg:block ${showlyric}`}>
                                    {songalldetails.sections[1].text !== undefined ?
                                        <Lyricssong />
                                        : <></>}
                                </div>
                            </div>
                        </div>
                        : <div className="flex flex-col items-center justify-center md:h-80/100 zero:h-60/100 zero:mt-10 md:mt-0">
                            <div className="rounded-3xl border-1 border-red-700 md:w-1/2 zero:mx-4 md:p-10 zero:px-5 zero:py-8">
                                <h3 className="text-base">Communication with the server failed.</h3>
                                <h3 className="text-base">Please check your internet connection <span className="text-grayprolight">(make sure vpn is connected or dns is set)</span> and try again</h3>
                            </div>
                        </div>
                    }
                </Fragment >
            }
        </Fragment >
    )
}

export default Song