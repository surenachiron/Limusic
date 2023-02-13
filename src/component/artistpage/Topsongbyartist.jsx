import React from "react";
import { NavLink } from "react-router-dom";
import './allstylespecialartist.css'

const Topsongbyartist = ({ namemusic, artistsong, linkpagemusic, linkpageartist, covermusic, widthforcovermusic, heightforcovermusic }) => {

    const samplecovermusic = covermusic.slice(0, covermusic.length - 13)
    const aslcovermusic = samplecovermusic + widthforcovermusic + "x" + heightforcovermusic + "bb.jpg"
    const littlenamemusicmdtolg = namemusic.slice(0, 15) + " ..."
    const littlenamemusiczerotosm = namemusic.slice(0, 10) + " ..."
    const littleartistsong = artistsong.slice(0, 10) + " ..."

    return (
        <div className="flex items-center cursor-pointer">
            <img src={aslcovermusic} alt={`cover music ${namemusic}`} className="w-24 lg:h-24 md:h-24 sm:h-16 rounded-full" />
            <div className="flex flex-col ml-3">
                <NavLink to={`/song/${linkpagemusic}`} className="transition-all hover:text-bluepro hover:underline">
                    <h3 className="text-base md:block zero:hidden text-white">{namemusic.length >= 15 ? littlenamemusicmdtolg : namemusic}</h3>
                    <h3 className="text-sm md:hidden zero:block text-white">{namemusic.length >= 10 ? littlenamemusiczerotosm : namemusic}</h3>
                </NavLink>
                <NavLink to={`/song/${linkpageartist}`} className="transition-all hover:text-bluepro hover:underline text-start">
                    <h6 className="font-extralight text-sm text-grayprolight">{artistsong.length >= 10 ? littleartistsong : artistsong}</h6>
                </NavLink>
            </div>
        </div>
    )
}

export default Topsongbyartist