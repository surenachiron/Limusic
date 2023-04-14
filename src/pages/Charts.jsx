import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { usegetlistcountirechart } from "../services/useCharts";
import ReactLoading from 'react-loading';
import Detailschartscountrie from "../component/charts/Detailschartscountrie";
import Mapshowtrackstopcountrie from "../component/charts/Mapshowtrackstopcountrie";

const Charts = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        usegetlistcountirechart(dispatch)
    }, [])

    const listcountrieforcharts = useSelector(state => state.listcountrieforcharts)
    const loadinglistchart = useSelector(state => state.loadinglistchart)
    const listtopmusicforcountriecahrts = useSelector(state => state.listtopmusicforcountriecahrts[0])
    const loadingtracktopcountrie = useSelector(state => state.loadingtracktopcountrie)

    return (
        <>
            <div className="mt-10 mb-32 mx-2">
                {loadinglistchart === true ?
                    <div className="flex flex-col items-center justify-center" style={{ height: "90vh" }}>
                        <ReactLoading type={"spin"} color="#3369ff" height={172} width={149} />
                        <h4>reciveing data</h4>
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
                            <div className="md:h-90/100 zero:h-80/100 w-full flex items-center justify-center">
                                <div className="rounded-3xl border-1 border-red-700 md:w-1/2 zero:mx-4 md:p-10 zero:px-5 zero:py-8">
                                    <h3 className="text-xl">Communication with the server failed. Please try again</h3>
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