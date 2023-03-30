import React, { useState } from "react";
import { faPlay } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const Musicvideosong = () => {

    const songalldetails = useSelector(state => state.songselected)

    return (
        <>
            <div className="h-200">
                {songalldetails.sections[1].youtubeurl !== undefined ?
                    <a href={songalldetails.sections[1].youtubeurl.actions.map(o => o.uri)} target="_blank">
                        <div className="bg-videobackgroundbeforewhow rounded-2xl mt-3 hover:bg-grayprolight transition-all h-full" style={{ backgroundImage: `url{songalldetails.sections[1].youtubeurl.image.url})` }} >
                            <div className="w-full h-full flex items-center justify-center">
                                <button className="py-3 px-8 bg-red-500 rounded-2xl">
                                    <FontAwesomeIcon icon={faPlay} className="text-base"></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    </a>
                    :
                    <a href={songalldetails.sections[2].youtubeurl.actions.map(o => o.uri)} target="_blank">
                        <div className="bg-videobackgroundbeforewhow rounded-2xl mt-3 hover:bg-grayprolight transition-all h-full" style={{ backgroundImage: `url{songalldetails.sections[1].youtubeurl.image.url})` }} >
                            <div className="w-full h-full flex items-center justify-center">
                                <button className="py-3 px-8 bg-red-500 rounded-2xl">
                                    <FontAwesomeIcon icon={faPlay} className="text-base"></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    </a>
                }
            </div>
        </>
    )
}

export default Musicvideosong