import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usegetlistcountirechart } from "../services/useCharts";
import ReactLoading from 'react-loading';
import Detailschartscountrie from "../component/charts/Detailschartscountrie";
import Mapshowtrackstopcountrie from "../component/charts/Mapshowtrackstopcountrie";

const Charts = () => {

    const dispatch = useDispatch()

    // useEffect(() => {
    //     usegetlistcountirechart(dispatch)
    // }, [dispatch])

    const listcountrieforcharts = useSelector(state => state.listcountrieforcharts)
    const loadinglistchart = useSelector(state => state.loadinglistchart)
    const listtopmusicforcountriecahrts = useSelector(state => state.listtopmusicforcountriecahrts[0])
    const loadingtracktopcountrie = useSelector(state => state.loadingtracktopcountrie)

    return (
        <>
            <div className="mt-10 mb-32 mx-2">
                {loadinglistchart === true ?
                    <div className="flex flex-col items-center justify-center md:h-70/100 zero:h-60/100">
                        <ReactLoading type={"spin"} color="#3369ff" height={130} width={130} />
                        <h4 className="mt-3">Reciveing Data</h4>
                    </div>
                    : <>
                        {listcountrieforcharts !== undefined && listcountrieforcharts.length !== 0 ?
                            <>
                                <Detailschartscountrie />
                                <div className="mt-10">
                                    {listtopmusicforcountriecahrts !== undefined && loadingtracktopcountrie !== true ? <Mapshowtrackstopcountrie /> :
                                        <div className="mt-10 flex justify-center">
                                            <ReactLoading type={"spin"} color="white" height={50} width={50} />
                                        </div>
                                    }
                                </div>
                            </>
                            :
                            <div className="flex flex-col items-center justify-center md:h-70/100 zero:h-60/100">
                                <div className="rounded-3xl border-1 border-red-700 md:w-1/2 zero:mx-4 md:p-10 zero:px-5 zero:py-8">
                                    <h3 className="text-base">Communication with the server failed.</h3>
                                    <h3 className="text-base">Please check your internet connection <span className="text-grayprolight">(make sure vpn is connected or dns is set)</span> and try again</h3>
                                </div>
                            </div>
                        }
                    </>
                }
            </div>
        </>
    )
}

export default Charts