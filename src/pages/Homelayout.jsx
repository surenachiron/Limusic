import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import Mapcharttop50 from "../component/home/Mapcharttop50";
import Trendmusics from "../component/home/Trendmusics";
import { usegetsongtrend, usegetspecificchartsong } from "../services/useToolshomepage";

const Homelayout = () => {

    const trendmusic = useSelector(state => state.songtrendhomepage)
    const chartsspecificsong = useSelector(state => state.chartsspecificsong)
    const loadinghomepage = useSelector(state => state.loadinghomepage)

    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        usegetsongtrend(dispatch)
        usegetspecificchartsong(dispatch)
    }, [])
    useEffect(() => {
        usegetsongtrend(dispatch)
        usegetspecificchartsong(dispatch)
    }, [location.pathname])

    return (
        <Fragment>

            <Helmet>
                <title>Limusic</title>
            </Helmet>

            <div id="mainhome" className="mt-7 rounded-3xl flex flex-col w-full mb-5 justify-center px-5">
                {loadinghomepage === true ?
                    <div className="flex flex-col items-center justify-center" style={{ height: "90vh" }}>
                        <ReactLoading type={"spin"} color="#3369ff" height={172} width={149} />
                        <h4>reciveing data</h4>
                    </div>
                    :
                    <>
                        {trendmusic.length !== 0 && chartsspecificsong.length !== 0 && chartsspecificsong !== undefined && trendmusic !== undefined ?
                            <>
                                <Trendmusics />
                                <Mapcharttop50 />
                            </>
                            :
                            <div className="md:h-90/100 zero:h-80/100 w-full flex items-center justify-center">
                                <div className="rounded-3xl border-1 border-red-700 md:w-1/2 zero:mx-4 md:p-10 zero:px-5 zero:py-8">
                                    <h3 className="text-xl">Communication with the server failed. Please try again</h3>
                                </div>
                            </div>}
                    </>
                }
            </div>
        </Fragment>
    )
}

export default Homelayout