import React from "react";

const Albumsbyartist = ({ namealbume, linkpagealbume, covermusic, widthforcovermusic, heightforcovermusic, releasedata }) => {

    console.log(namealbume, linkpagealbume, covermusic, widthforcovermusic, heightforcovermusic, releasedata)

    const samplecovermusic = covermusic.slice(0, covermusic.length - 13)
    const aslcovermusic = samplecovermusic + widthforcovermusic + "x" + heightforcovermusic + "bb.jpg"
    const littlenamealbummdtolg = namealbume.slice(0, 15) + " ..."
    const littlenamealbumzerotosm = namealbume.slice(0, 10) + " ..."
    const slicedate = releasedata.slice(0, 5)

    console.log(slicedate)

    return (
        <>
            <div className="text-white">
                <img src={aslcovermusic} alt={`picture album ${aslcovermusic}`} width='150' height='150' />
                <h2 className="zero:hidden md:block text-xl my-3">{namealbume.length >= 15 ? littlenamealbummdtolg : namealbume}</h2>
                <h2 className="zero:block md:hidden text-xl my-3">{namealbume.length >= 10 ? littlenamealbumzerotosm : namealbume}</h2>
                <p className="text-sm">{slicedate}</p>
            </div>
        </>
    )
}

export default Albumsbyartist