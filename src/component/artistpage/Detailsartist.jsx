import React from "react";
import { useSelector } from "react-redux";
import './allstylespecialartist.css'

const Detailsartist = () => {

    const artistdetails = useSelector(state => state.artistdetails)
    const covermusic = artistdetails.data.map(o => o.attributes.artwork.url)[0]
    const widthforcovermusic = artistdetails.data.map(o => o.attributes.artwork.width)[0]
    const heightforcovermusic = artistdetails.data.map(o => o.attributes.artwork.height)[0]
    const samplecovermusic = covermusic.slice(0, covermusic.length - 13)
    const aslcovermusic = samplecovermusic + widthforcovermusic + "x" + heightforcovermusic + "bb.jpg"

    return (
        <>
            <div className="flex lg:flex-row sm:flex-col lg:justify-start sm:justify-center sm:h-70/100 zero:bg-none sm:rounded-3xl zero:rounded-2xl items-center zero:mt-5 pictureartistsmtolg relative" style={{ backgroundColor: "#" + artistdetails.data.map(o => o.attributes.artwork.bgColor)[0] }}>
                <div className="lg:w-52 sm:w-full zero:w-full sm:mx-8 zero:mx-0 lg:mb-0 sm:mb-3 sm:flex zero:hidden justify-center relative my-10">
                    <img src={aslcovermusic} alt={`picture artist ${artistdetails.data.map(o => o.attributes.name)[0]}`} className="lg:h-52 lg:w-52 sm:w-64 sm:h-64 zero:w-full zero:h-96 rounded-full shadow-lg sm:z-10 zero:z-0 md:border-1 zero:border-0" />
                </div>
                <div className="lg:w-52 sm:w-full zero:w-full sm:mx-8 zero:mx-0 lg:mb-0 sm:mb-3 sm:hidden zero:flex justify-center relative pictureartistzero rounded-2xl">
                    <img src={aslcovermusic} alt={`picture artist ${artistdetails.data.map(o => o.attributes.name)[0]}`} className="lg:h-52 lg:w-52 sm:w-64 sm:h-64 zero:w-full zero:h-96 shadow-lg sm:z-10 zero:z-0 rounded-2xl" />
                    <div className="sm:hidden zero:block absolute bottom-0 text-center mb-5 z-10">
                        <h2 className="text-2xl mb-3">{artistdetails.data.map(o => o.attributes.name)[0]}</h2>
                        <h5 className="text-lg lg:text-start sm:text-center text-grayprolight">{artistdetails.data.map(o => o.attributes.genreNames)[0]}</h5>
                    </div>
                </div>

                <div className="sm:block zero:hidden z-10 relative">
                    <h2 className="text-2xl mb-3 sm:text-center lg:text-start">{artistdetails.data.map(o => o.attributes.name)[0]}</h2>
                    <h5 className="text-lg sm:text-center lg:text-start text-grayprolight">{artistdetails.data.map(o => o.attributes.genreNames)[0]}</h5>
                </div>
            </div>
        </>
    )
}

export default Detailsartist