import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usealldetailsalbums } from '../services/useAlldetailsAlbums'
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";
import Detailsalbum from '../component/albums/Detailsalbum'
import ReactLoading from 'react-loading';
import Showmusicsalbum from "../component/albums/Showmusicsalbum";

const Albums = () => {

    const dispatch = useDispatch()
    const detailsalbums = useSelector(state => state.detailsalbums.data)
    const artistdetails = useSelector(state => state.artistdetails)
    const loadingalbums = useSelector(state => state.loadingalbums)
    const loading = useSelector(state => state.forloading)

    const location = useLocation()
    const idalbumselected = location.pathname.slice(8,)

    useEffect(() => {
        usealldetailsalbums(dispatch, idalbumselected)
    }, [dispatch, idalbumselected])
    useEffect(() => {
        usealldetailsalbums(dispatch, idalbumselected)
    }, [dispatch, idalbumselected, location.pathname])

    return (
        <>
            {loadingalbums === true ?
                <div className="flex flex-col items-center justify-center md:h-80/100 zero:h-60/100 zero:mt-10 md:mt-0">
                    <ReactLoading type={"spin"} color="#3369ff" height={130} width={130} />
                    <h4 className="mt-3">Reciveing Data</h4>
                </div> :
                <>
                    {detailsalbums !== undefined && detailsalbums.errors === undefined ?
                        <>
                            <Helmet>
                                <title>
                                    {detailsalbums[0].attributes.name}
                                </title>
                            </Helmet>

                            <div className="sm:mt-10 mx-2">
                                <div id="detailsalbum">
                                    <Detailsalbum />
                                </div>
                            </div>
                            {(loading === true || artistdetails.length !== 0) && artistdetails !== undefined && artistdetails.errors === undefined ?
                                <div className="sm:mt-10">
                                    {loading === true ?
                                        <div className="flex items-center justify-center ml-5">
                                            <ReactLoading type={"spin"} color="white" className="w-6 h-6" />
                                        </div>
                                        : <div id="musicsalbum mx-2">
                                            <Showmusicsalbum />
                                        </div>}
                                </div>
                                : <h2 className="text-grayprolight font-bold p-2 my-3">sory we cant coldnt with server</h2>}
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

export default Albums