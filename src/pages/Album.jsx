import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usealldetailsalbums } from '../services/useAlldetailsAlbums'
import ReactLoading from 'react-loading';
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";
import Detailsalbum from '../component/albums/Detailsalbum'
import Showmusicsalbum from "../component/albums/Showmusicsalbum";

const Albums = () => {

    const dispatch = useDispatch()
    const detailsalbums = useSelector(state => state.detailsalbums.data)
    const artistdetails = useSelector(state => state.artistdetails)
    const loadingalbums = useSelector(state => state.loadingalbums)

    const location = useLocation()
    const idalbumselected = location.pathname.slice(8,)

    useEffect(() => {
        usealldetailsalbums(dispatch, idalbumselected)
    }, [])
    useEffect(() => {
        usealldetailsalbums(dispatch, idalbumselected)
    }, [location.pathname])

    return (
        <>
            {loadingalbums === true ? <div className="flex flex-col items-center justify-center" style={{ height: "70vh" }}>
                <ReactLoading type={"spin"} color="#3369ff" height={172} width={149} />
                <h4>reciveing data</h4>
            </div> :
                <>
                    {detailsalbums !== undefined && detailsalbums.errors === undefined ?
                        <>
                            <Helmet>
                                <title>
                                    {detailsalbums[0].attributes.name}
                                </title>
                            </Helmet>

                            <div className="sm:mt-10">
                                <div id="detailsalbum">
                                    <Detailsalbum />
                                </div>
                            </div>
                            {artistdetails.length !== 0 && artistdetails !== undefined && artistdetails.errors === undefined ?
                                <div className="sm:mt-10">
                                    <div id="musicsalbum">
                                        <Showmusicsalbum />
                                    </div>
                                </div>
                                : ""}
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

export default Albums