import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import ananymousartist from '../../assets/images/ananymousformusicorartist.png'

const Showresultsearch = ({ emptytext, textsearch }) => {

    const getdetailsfortextsearch = useSelector(state => state.detailssearch)
    const forloadingsearch = useSelector(state => state.forloadingsearch)

    return (
        <>
            {emptytext === 1 && forloadingsearch === false ?
                <>
                    {getdetailsfortextsearch.tracks !== undefined && getdetailsfortextsearch.artists !== undefined ?
                        <div className="bg-white text-black absolute h-60 overflow-y-auto w-full mt-11 rounded-lg z-50">
                            <h2 className="text-lg border-b-1 border-white px-5 mt-2">Songs</h2>
                            <div className="mt-2">
                                {getdetailsfortextsearch.tracks.hits !== undefined ?
                                    <>
                                        {getdetailsfortextsearch.tracks.hits.map(o =>
                                            <NavLink to={`/song/${o.track.key}`}>
                                                <div className="flex items-center py-2 px-5 border-b-1 hover:bg-textlyrics transition-all">
                                                    <img src={o.track.images.coverart !== undefined ? o.track.images.coverart : ananymousartist } alt="" width='50' height='50' className="rounded-lg mr-3" />
                                                    <div className="felx">
                                                        <h3 className="text-sm font-bold">{o.track.title.length >= 20 ? o.track.title.slice(0, 20) + "..." : o.track.title}</h3>
                                                        <h5 className="text-xs font-medium text-grayprolight">{o.track.subtitle.length >= 20 ? o.track.subtitle.slice(0, 20) + "..." : o.track.subtitle}</h5>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        )}
                                    </>
                                    : ""
                                }
                            </div>
                            <h2 className="text-lg mt-5 px-5">Artists</h2>
                            <div className="mt-2">
                                {getdetailsfortextsearch.artists.hits.map(o =>
                                    <NavLink to={`/artist/${o.artist.adamid}`}>
                                        <div className="flex items-center py-2 px-5 border-b-1 hover:bg-textlyrics transition-all">
                                            <img src={o.artist.avatar !== undefined ? o.artist.avatar : ananymousartist} alt="" width='50' height='50' className="rounded-lg mr-3" />
                                            <h3 className="text-sm">{o.artist.name}</h3>
                                        </div>
                                    </NavLink>
                                )}
                            </div>
                        </div>
                        : <div className="bg-white text-black absolute h-fit py-5 overflow-y-auto w-full mt-11 rounded-lg z-50 text-center">
                            <FontAwesomeIcon icon={faSearchengin} color="gray" className="text-lg"></FontAwesomeIcon>
                            <h3 className="font-bold text-base">We couldn't find any results matching "{textsearch}"</h3>
                            <p className="text-sm text-grayprolight">Please make sure your words are spelled correctly, or try using different keywords
                            </p>
                        </div>}
                </>
                : <>
                    {emptytext === 2 ?
                        <div className="bg-white text-black absolute h-fit py-5 overflow-y-auto w-full mt-11 rounded-lg z-50 text-center">
                            <FontAwesomeIcon icon={faSearchengin} color="gray" className="text-lg"></FontAwesomeIcon>
                            <h3 className="font-bold text-base">No searches just yet</h3>
                            <p className="text-sm text-grayprolight">Search for your favorite artists or songs
                            </p>
                        </div>
                        : ""}
                </>
            }
        </>
    )
}

export default Showresultsearch