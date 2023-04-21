import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Latestreleaseartist = () => {

    const latestreleasesongartist = useSelector(state => state.latestreleaseartist)

    let covermusic = latestreleasesongartist.data.map(r => r.attributes.artwork.url)[0]
    let widthforcovermusic = latestreleasesongartist.data.map(r => r.attributes.artwork.width)[0]
    let heightforcovermusic = latestreleasesongartist.data.map(r => r.attributes.artwork.height)[0]
    let samplecovermusic = covermusic.slice(0, covermusic.length - 13)
    let aslcovermusic = samplecovermusic + widthforcovermusic + "x" + heightforcovermusic + "bb.jpg"
    let slicetextreleasedate = latestreleasesongartist.data.map(r => r.attributes.releaseDate)[0].slice(0, 4)

    let howtypelatestrelease = ''
    if (latestreleasesongartist.data[0].id !== undefined && latestreleasesongartist.data[0].type !== undefined) {
        if (latestreleasesongartist.data[0].type === "albums")
            howtypelatestrelease = `/albums/${latestreleasesongartist.data[0].id}`
        if (latestreleasesongartist.data[0].type === "song")
            howtypelatestrelease = `/song/${latestreleasesongartist.data[0].id}`
        if (latestreleasesongartist.data[0].type === "artist")
            howtypelatestrelease = `/artist/${latestreleasesongartist.data[0].id}`
    }

    return (
        <>
            <div className="text-white w-fit">
                {latestreleasesongartist.data.map(o => (
                    <NavLink to={howtypelatestrelease}>
                        <div>
                            <img src={aslcovermusic} alt={`cover music ${o.attributes.name}`} className="mt-3 rounded-2xl" width='270' height='270' />
                            <h2 className="text-lg my-3">{o.attributes.name.length >= 20 ? (o.attributes.name).slice(0, 20) + " ..." : o.attributes.name}</h2>
                            <p className="text-sm text-grayprolight">{slicetextreleasedate}</p>
                        </div>
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default Latestreleaseartist