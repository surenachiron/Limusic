import React from "react";
import { NavLink } from "react-router-dom";

const Albumsbyartist = ({ namealbume, linkpagealbume, covermusic, widthforcovermusic, heightforcovermusic, releasedata }) => {

    const samplecovermusic = covermusic.slice(0, covermusic.length - 13)
    const aslcovermusic = samplecovermusic + widthforcovermusic + "x" + heightforcovermusic + "bb.jpg"
    const littlenamealbummdtolg = namealbume.slice(0, 15) + " ..."
    const littlenamealbumzerotosm = namealbume.slice(0, 9) + " ..."
    const slicedate = releasedata.slice(0, 4)

    return (
        <>
            <NavLink to={`/albums/${linkpagealbume}`}>
                <div className="text-white cursor-pointer">
                    <img src={aslcovermusic} alt={`picture album ${aslcovermusic}`} width='150' height='150' className="rounded-2xl" />
                    <h2 className="zero:hidden md:block text-lg my-3 transition-all hover:text-bluepro hover:underline">{namealbume.length >= 15 ? littlenamealbummdtolg : namealbume}</h2>
                    <h2 className="zero:block md:hidden text-base my-3 transition-all hover:text-bluepro hover:underline">{namealbume.length >= 9 ? littlenamealbumzerotosm : namealbume}</h2>
                    <p className="text-sm">{slicedate}</p>
                </div>
            </NavLink>
        </>
    )
}

export default Albumsbyartist