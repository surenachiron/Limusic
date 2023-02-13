import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from 'react-loading';
import { Helmet } from "react-helmet";
import Detailsartist from "./Detailsartist";
import Topsongbyartist from "./Topsongbyartist"
import Latestreleaseartist from './Latestreleaseartist'
import Albumsbyartist from './Albumsbyartist'
import Mapalbumbyartist from "./Mapalbumbyartist";
import Maplatestreleaseartist from "./Maplatestreleaseartist";
import Maptopsongbyartist from "./Maptopsongbyartist";
import { useEffect } from "react";
import { getalbumsartist, getalldetailsartist, getlatestreleaseartist, gettopsongartist } from "../../services/allendpointspageartist";
import { useLocation } from "react-router-dom";

const Artist = () => {

    const dispatch = useDispatch()
    const artistdetails = useSelector(state => state.artistdetails)
    const topsongartist = useSelector(state => state.topsongsartist)
    const latestreleasesongartist = useSelector(state => state.latestreleaseartist)
    const albumsartist = useSelector(state => state.albumsartist)
    const loading = useSelector(state => state.forloading)

    const location = useLocation()
    const idartistselected = location.pathname.slice(8,)

    useEffect(() => {
        // getalldetailsartist(dispatch, idartistselected)
        // gettopsongartist(dispatch, idartistselected)
        // getlatestreleaseartist(dispatch, idartistselected)
        // getalbumsartist(dispatch, idartistselected)
    }, [])
    // useEffect(() => {
    // getalldetailsartist(dispatch, idartistselected)
    // gettopsongartist(dispatch, idartistselected)
    // getlatestreleaseartist(dispatch, idartistselected)
    // getalbumsartist(dispatch, idartistselected)
    // }, [location.pathname])

    return (
        <>

            {loading === true ? <div className="flex flex-col items-center justify-center" style={{ height: "90vh" }}>
                <ReactLoading type={"spin"} color="#3369ff" height={172} width={149} />
                <h4>reciveing data</h4>
            </div> :
                <>
                    {artistdetails.length !== 0 && artistdetails.errors === undefined ?
                        <>
                            <Helmet>
                                <title>
                                    {artistdetails.data.map(o => o.attributes.name)[0]}
                                </title>
                            </Helmet>

                            <div className="mx-5 sm:mt-8">
                                <div id="detailsartist">
                                    <Detailsartist />
                                </div>
                                <div id="topsongartist" className="mt-8">
                                    <h2 className="text-xl afterheadingborder">Top Songs By {artistdetails.data.map(o => o.attributes.name)[0]}</h2>
                                    {topsongartist.length !== 0 && topsongartist !== undefined ?
                                        <Maptopsongbyartist />
                                        : ""}
                                </div>
                                {/* <div className="grid grid-cols-12 gap-5 mt-8 lg:h-70/100"> */}
                                <div id="latestrelease" className="lg:col-span-4 zero:col-span-12 mt-8">
                                    <h2 className="text-xl afterheadingborder">Latest Release</h2>
                                    {latestreleasesongartist.length !== 0 && latestreleasesongartist !== undefined ?
                                        <Latestreleaseartist />
                                        : ""}
                                </div>
                                <div id="albumsbyartist" className="lg:col-span-8 zero:col-span-12 mt-8">
                                    <h2 className="text-xl afterheadingborder">Albums BY {artistdetails.data.map(o => o.attributes.name)[0]}</h2>
                                    {albumsartist.length !== 0 && albumsartist !== undefined ?
                                        <Mapalbumbyartist />
                                        : ""}
                                </div>
                                {/* </div> */}
                            </div>
                        </>
                        :
                        <div className="md:h-90/100 zero:h-80/100 w-full flex items-center justify-center">
                            <div className="rounded-3xl border-1 border-red-700 md:w-1/2 zero:mx-4 md:p-10 zero:px-5 zero:py-8">
                                <h3 className="text-xl">Communication with the server failed. Please try again</h3>
                            </div>
                        </div>
                    }
                </>
            }
        </>
    )
}

export default Artist