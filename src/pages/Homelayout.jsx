import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from "react-redux";
import Mapcharttop50 from "../component/home/Mapcharttop50";
import Trendmusics from "../component/home/Trendmusics";
import { usegetsongtrend, usegetspecificchartsong } from "../services/useToolshomepage";

const Homelayout = () => {

    const trendmusic = useSelector(state => state.songtrendhomepage)
    const chartsspecificsong = useSelector(state => state.chartsspecificsong)
    const loadinghomepage = useSelector(state => state.loadinghomepage)
    const dispatch = useDispatch()

    useEffect(() => {
        usegetsongtrend(dispatch)
        usegetspecificchartsong(dispatch)
    }, [dispatch])

    return (
        <Fragment>

            <Helmet>
                <title>Limusic</title>
            </Helmet>

            <div id="mainhome" className="mt-7 rounded-3xl flex flex-col w-full mb-5 justify-center px-5">
                {loadinghomepage === true ?
                    <div className="flex flex-col items-center justify-center md:h-70/100 zero:h-60/100">
                        <ReactLoading type={"spin"} color="#3369ff" height={130} width={130} />
                        <h4 className="mt-3">Reciveing Data</h4>
                    </div>
                    :
                    <>
                        {trendmusic.length !== 0 && chartsspecificsong[0] !== undefined && trendmusic !== undefined ?
                            <>
                                <Trendmusics />
                                <Mapcharttop50 />
                            </>
                            :
                            <div className="flex flex-col items-center justify-center md:h-70/100 zero:h-60/100">
                                <div className="rounded-3xl border-1 border-red-700 md:w-1/2 zero:mx-4 md:p-10 zero:px-5 zero:py-8">
                                    <h3 className="text-base">Communication with the server failed.</h3>
                                    <h3 className="text-base">Please check your internet connection <span className="text-grayprolight">(make sure vpn is connected or dns is set)</span> and try again</h3>
                                </div>
                            </div>}
                    </>
                }
            </div>
        </Fragment>
    )
}

export default Homelayout