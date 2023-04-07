import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Mapcharttop50 from "../component/home/Mapcharttop50";
import Trendmusics from "../component/home/Trendmusics";

const Homelayout = () => {

    return (
        <Fragment>

            <Helmet>
                <title>Limusic</title>
            </Helmet>

            <div id="mainhome" className="mt-7 rounded-3xl flex flex-col w-full mb-5 justify-center px-5">
                {/* <Trendmusics /> */}
                <Mapcharttop50 />
            </div>
        </Fragment>
    )
}

export default Homelayout