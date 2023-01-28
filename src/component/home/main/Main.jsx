import React, { Fragment } from "react";
import Charttop50 from "./Charttop50";
import Topartist from "./Topartist";
import Topmusic from "./Topmusic";
import Trendmusics from "./Trendmusics";

const Main = () => {

    return (
        <Fragment>
            <Trendmusics />
            <Charttop50 />
            <Topmusic />
            <Topartist />
        </Fragment>
    )
}

export default Main