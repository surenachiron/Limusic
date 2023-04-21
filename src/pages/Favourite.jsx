import React from "react";
import { Helmet } from "react-helmet";
import MapShowtrascksliked from "../component/favourite/MapShowtrascksliked";

const Favourite = () => {

    return (
        <>
            <Helmet>
                <title>
                    Favourites
                </title>
            </Helmet>
            <MapShowtrascksliked />
        </>
    )
}

export default Favourite