import React from "react";
import { faPlay } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const Musicvideosong = () => {

    const songalldetails = useSelector(state => state.songselected)

    return (
        <div className="h-4/6">
            {songalldetails.sections[1].youtubeurl !== undefined ?
                <a href={songalldetails.sections[1].youtubeurl.actions.map(o => o.uri)} target="_blank" rel="noopener noreferrer">
                    <div className="bg-videobackgroundbeforewhow hover:bg-grayprodark rounded-2xl mt-3 transition-all h-72 w-full flex items-center justify-center">
                        <button className="py-3 px-8 bg-red-500 rounded-2xl">
                            <FontAwesomeIcon icon={faPlay} className="text-base"></FontAwesomeIcon>
                        </button>
                    </div>
                </a>
                :
                <a href={songalldetails.sections[2].youtubeurl.actions.map(o => o.uri)} target="_blank" rel="noopener noreferrer">
                    <div className="bg-videobackgroundbeforewhow hover:bg-grayprodark rounded-2xl mt-3 transition-all h-72 w-full flex items-center justify-center">
                        <button className="py-3 px-8 bg-red-500 rounded-2xl">
                            <FontAwesomeIcon icon={faPlay} className="text-base"></FontAwesomeIcon>
                        </button>
                    </div>
                </a>
            }
        </div>
    )
}

export default Musicvideosong