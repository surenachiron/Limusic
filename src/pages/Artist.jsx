import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from 'react-loading';
import { Helmet } from "react-helmet";
import Detailsartist from "../component/artistpage/Detailsartist";
import Latestreleaseartist from '../component/artistpage/Latestreleaseartist'
import Mapalbumbyartist from "../component/artistpage/Mapalbumbyartist";
import Maptopsongbyartist from "../component/artistpage/Maptopsongbyartist";
import { useEffect } from "react";
import { getalbumsartist, getalldetailsartist, getlatestreleaseartist, gettopsongartist } from "../services/useendpointspageartist";
import { initializeartist, initializetopsongartist, initializelatestreleaseartist, initializealbumsartist } from "../redux/actions/artist";
import { useLocation } from "react-router-dom";

const Artist = () => {

    const dispatch = useDispatch()
    const artistdetails = useSelector(state => state.artistdetails)
    const topsongartist = useSelector(state => state.topsongsartist)
    const showtopsongorno = useSelector(state => state.showtopsongornoartist)
    const showlatestrelaseorno = useSelector(state => state.showlatestrelaseorno)
    const showalbumartist = useSelector(state => state.showalbumartist)
    const latestreleasesongartist = useSelector(state => state.latestreleaseartist)
    const albumsartist = useSelector(state => state.albumsartist)
    const loading = useSelector(state => state.forloading)

    const location = useLocation()
    const idartistselected = location.pathname.slice(8,)

    useEffect(() => {
        dispatch(initializeartist([]))
        dispatch(initializetopsongartist([]))
        dispatch(initializelatestreleaseartist([]))
        dispatch(initializealbumsartist([]))
        getalldetailsartist(dispatch, idartistselected)
        gettopsongartist(dispatch, idartistselected)
        getalbumsartist(dispatch, idartistselected)
        getlatestreleaseartist(dispatch, idartistselected)
    }, [dispatch, idartistselected])
    useEffect(() => {
        dispatch(initializeartist([]))
        dispatch(initializetopsongartist([]))
        dispatch(initializelatestreleaseartist([]))
        dispatch(initializealbumsartist([]))
        getalldetailsartist(dispatch, idartistselected)
        gettopsongartist(dispatch, idartistselected)
        getlatestreleaseartist(dispatch, idartistselected)
        getalbumsartist()
    }, [dispatch, idartistselected,location.pathname])


    return (
        <>
            {loading === true ? <div className="flex flex-col items-center justify-center md:h-80/100 zero:h-60/100 zero:mt-10 md:mt-0">
                <ReactLoading type={"spin"} color="#3369ff" height={130} width={130} />
                <h4 className="mt-3">Reciveing Data</h4>
            </div> :
                <>
                    {artistdetails.length !== 0 && artistdetails.errors === undefined ?
                        <>
                            <Helmet>
                                <title>
                                    {artistdetails.data.map(o => o.attributes.name)[0]}
                                </title>
                            </Helmet>

                            <div className="mx-5 sm:mt-10">
                                <div id="detailsartist">
                                    <Detailsartist />
                                </div>
                                <div id="topsongartist" className="mt-10">
                                    {showtopsongorno === true || topsongartist.length !== 0 ?
                                        <div className="flex border-b-1 border-slate-400 pb-4 mb-5">
                                            <h2 className="text-xl">Top Songs By {artistdetails.data.map(o => o.attributes.name)[0]}</h2>
                                            {showtopsongorno === true ?
                                                <div className="flex items-center justify-center ml-5">
                                                    <ReactLoading type={"spin"} color="white" className="w-6 h-6" />
                                                </div>
                                                : <></>}
                                        </div>
                                        : <></>
                                    }
                                    {topsongartist.length !== 0 && topsongartist.errors === undefined ?
                                        <Maptopsongbyartist />
                                        : <></>}
                                </div>
                                <div id="latestrelease" className="lg:col-span-4 zero:col-span-12 mt-10">
                                    {showlatestrelaseorno === true || latestreleasesongartist.data !== undefined ?
                                        <div className="flex border-b-1 border-slate-400 pb-4 mb-5">
                                            <h2 className="text-xl">Latest Release</h2>
                                            {showlatestrelaseorno === true ?
                                                <div className="flex items-center justify-center ml-5">
                                                    <ReactLoading type={"spin"} color="white" className="w-6 h-6" />
                                                </div>
                                                : <></>}
                                        </div>
                                        : <></>
                                    }
                                    {latestreleasesongartist.data !== undefined && latestreleasesongartist.errors === undefined && showlatestrelaseorno === false ?
                                        <Latestreleaseartist />
                                        : <></>}
                                </div>
                                <div id="albumsbyartist" className="lg:col-span-8 zero:col-span-12 mt-10">
                                    {showalbumartist === true || albumsartist.length !== 0 ?
                                        <div className="flex border-b-1 border-slate-400 pb-4 mb-5">
                                            <h2 className="text-xl">Albums BY {artistdetails.data.map(o => o.attributes.name)[0]}</h2>
                                            {showalbumartist === true ?
                                                <div className="flex items-center justify-center ml-5">
                                                    <ReactLoading type={"spin"} color="white" className="w-6 h-6" />
                                                </div>
                                                : <></>}
                                        </div>
                                        : <></>
                                    }
                                    {albumsartist.length !== 0 && albumsartist.errors === undefined ?
                                        <Mapalbumbyartist />
                                        : <></>}
                                </div>
                            </div>
                        </>
                        :
                        <div className="flex flex-col items-center justify-center md:h-80/100 zero:h-60/100 zero:mt-10 md:mt-0">
                            <div className="rounded-3xl border-1 border-red-700 md:w-1/2 zero:mx-4 md:p-10 zero:px-5 zero:py-8">
                                <h3 className="text-base">Communication with the server failed.</h3>
                                <h3 className="text-base">Please check your internet connection <span className="text-grayprolight">(make sure vpn is connected or dns is set)</span> and try again</h3>
                            </div>
                        </div>
                    }
                </>
            }
        </>
    )
}

export default Artist