import React from "react";
import { useSelector } from "react-redux";

const Latestreleaseartist = () => {

    const latestreleasesongartist = useSelector(state => state.latestreleaseartist)

    let covermusic = latestreleasesongartist.data.map(r => r.attributes.artwork.url)[0]
    let widthforcovermusic = latestreleasesongartist.data.map(r => r.attributes.artwork.width)[0]
    let heightforcovermusic = latestreleasesongartist.data.map(r => r.attributes.artwork.height)[0]
    let samplecovermusic = covermusic.slice(0, covermusic.length - 13)
    let aslcovermusic = samplecovermusic + widthforcovermusic + "x" + heightforcovermusic + "bb.jpg"
    let slicetextreleasedate = latestreleasesongartist.data.map(r => r.attributes.releaseDate)[0].slice(0, 4)

    return (
        <>
            <div className="text-white">
                {latestreleasesongartist.data.map(o => (
                    <div>
                        <img src={aslcovermusic} alt={`picture music ${o.attributes.name}`} className="mt-3 rounded-2xl" width='300' height='300' />
                        <h2 className="text-xl my-3">{o.attributes.name}</h2>
                        <p className="text-sm">{slicetextreleasedate}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Latestreleaseartist