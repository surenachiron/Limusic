import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Similarsong = ({ namemusic, linkpagemusic, artistsong, linkpagartist, covermusic }) => {

    const littlenamemusic = namemusic.slice(0, 15) + " ..."
    const littleartistsong = artistsong.slice(0, 10) + " ..."

    return (
        <Fragment>
            <div className="grid grid-cols-12 p-3 flex items-center md:h-24 zero:h-16 cursor-pointer hover:bg-hoversong transition-all rounded">
                <div className="md:col-span-6 zero:col-span-7 flex items-center">
                    <img src={covermusic} alt={`cover art ${namemusic} `} className="rounded-2xl mr-3 zero:w-10 md:w-16" />
                    <Link to={`/song/${linkpagemusic}`} className="transition-all hover:text-bluepro hover:underline">
                        <h6 className="text-base">{namemusic.length >= 15 ? littlenamemusic : namemusic}</h6>
                    </Link>
                </div>
                <Link to={`/artist/${linkpagartist}`} className="transition-all hover:text-bluepro hover:underline">
                    <h6 className="md:col-span-6 zero:col-span-5 text-sm font-light">{artistsong.length >= 10 ? littleartistsong : artistsong}</h6>
                </Link>
            </div>
        </Fragment>
    )
}

export default Similarsong