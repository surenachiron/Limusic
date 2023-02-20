import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Firstsection from "../1-firstSection/Firstsection";
import Seconssection from "../2-secondsection/Secondsection";
import Thirdsection from "../3-thirdsection/Thirdsection";
import Fourthsection from "../4-fourthsection/Fourthsection";
import Fifthsection from '../5-fifthsection/Fifthsection'

const CollectingComponentsHomepage = () => {

    return (
        <Fragment>
            <Helmet>
                <title>chef-food</title>
            </Helmet>
            <div>
                <Firstsection />
                <Seconssection />
                <Thirdsection />
                <Fourthsection />
                <Fifthsection />
            </div>
        </Fragment>
    )

}

export default CollectingComponentsHomepage