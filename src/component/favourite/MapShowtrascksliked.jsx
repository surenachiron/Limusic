import React from "react";
import { useSelector } from "react-redux";
import Showtracksliked from "./Showtracksliked";

const MapShowtrascksliked = () => {

    const favouritetrasks = useSelector(state => state.tracksfavourite.tracks)

    return (
        <>
            {favouritetrasks.length >= 1 ?
                <div className="grid grid-cols-12 mt-8 zero:mb-36 md:mb-2 mx-4">
                    <h2 className="text-base text-grayprolight col-span-12 mb-6">Hear the tracks you’ve liked:</h2>
                    {favouritetrasks.map((o, index) => (
                        <Showtracksliked
                            covermusic={o.imagesong !== undefined ? o.imagesong : ""}
                            titlemusic={o.namesong}
                            linkpagetitlemusic={o.linkpagesong}
                            artistmusic={o.nameartist}
                            linkpageartistmusic={o.linkpageartist !== undefined ? o.linkpageartist : ""}
                            key={index}
                        ></Showtracksliked>
                    ))}
                </div>
                : <div className="h-70/100 flex items-center justify-center ">
                    <h3 className="text-bade border-1 border-grayprolight p-10 text-center w-fit rounded-lg">Not Found Tracks Favourite</h3>
                </div> }
        </>
    )
}

export default MapShowtrascksliked