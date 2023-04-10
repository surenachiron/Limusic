import React from "react";
import { NavLink } from "react-router-dom";

const Albumsbyartist = ({ namealbume, linkpagealbume, covermusic, widthforcovermusic, heightforcovermusic, releasedata }) => {

    const samplecovermusic = covermusic.slice(0, covermusic.length - 13)
    const aslcovermusic = samplecovermusic + widthforcovermusic + "x" + heightforcovermusic + "bb.jpg"
    const littlenamealbummdtolg = namealbume.slice(0, 15) + " ..."

    return (
        <>
            <NavLink to={`/albums/${linkpagealbume}`}>
                <div className="text-white cursor-pointer">
                    <img src={aslcovermusic} alt={`picture album ${aslcovermusic}`} width='150' height='150' className="rounded-2xl" />
                    <h2 className="text-lg my-3 transition-all hover:text-bluepro hover:underline">{namealbume.length >= 12 ? littlenamealbummdtolg : namealbume}</h2>
                    <p className="text-sm text-grayprolight">{releasedata}</p>
                </div>
            </NavLink>
        </>
    )
}

export default Albumsbyartist