import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/fontawesome-free-solid";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Showdetailssong = () => {

    const songalldetails = useSelector(state => state.songselected)
    const countplaysong = useSelector(state => state.countplaysong)
    const conversioncoutplaytostring = String(countplaysong).split('').reverse();
    let conversioncountplay = []
    for (let i = 0; i < conversioncoutplaytostring.length; i++) {
        if (i === 2 || i === 5 || i === 8 || i === 11) {
            conversioncountplay[i] = ("," + conversioncoutplaytostring[i]);
        } else
            conversioncountplay[i] = conversioncoutplaytostring[i];
    }

    return (
        <>
            <div className={`flex flex-col lg:mt-8`}>
                <div id="musicshow" className="h-70/100 px-5 backdrop-blur-sm lg:border-1 zero:border-0 p-4 rounded-3xl mt-4 flex flex-col items-center justify-center">
                    <div className="flex items-start justify-center relative group">
                        <div className="w-3/4 h-10/12 peer/img">
                            <img src={songalldetails.images === undefined ? "" : songalldetails.images.coverart} alt="picture music" className="rounded-xl h-full w-full transition-all hover:opacity-80 group-hover:opacity-80" />
                        </div>
                        <div className="hidden absolute transition-all top-1/2 hover:block peer-hover/img:block">
                            <FontAwesomeIcon icon={faPlay} className="border-1 bg-blackpro rounded-full text-base p-3 cursor-pointer backdrop-blur"></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center backdrop-blur-sm mt-2">
                        <h3 className="text-lg">{songalldetails.title}</h3>
                        <NavLink to={`/artist/${songalldetails.artists.map(o => o.adamid)[0]}`}>
                            <h6 className="text-sm font-medium my-2">{songalldetails.subtitle}</h6>
                        </NavLink>
                        <div className="flex text-grayprolight">
                            <p id="category">{songalldetails.genres.primary} . </p>
                            <FontAwesomeIcon icon={faPlay} className={`mx-2 rounded-full border-1 p-1 text-sm`}></FontAwesomeIcon>
                            <p id="viewmusic">
                                {conversioncountplay.reverse().map(o => o)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showdetailssong