import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Similarsong from "./Similarsong";
import { changesimilarsonglength } from '../../redux/actions/song'
import ananymousmusic from '../../assets/images/ananymousformusicorartist.png'

const Mapinsimilarsong = () => {

    const dispatch = useDispatch()
    const truefalsesimilarsonglength = useSelector(state => state.showsimilarsong)
    const similarsongall = useSelector(state => state.similarsong)
    const littlesimilarsong = useSelector(state => state.littlesimilarsong)

    return (
        <>
            {similarsongall !== undefined && littlesimilarsong !== undefined && similarsongall.length !== 0 && littlesimilarsong.length !== 0 ?
                <div className="border-1 rounded-xl px-5 mt-3">
                    <div className="grid grid-cols-12 border-b-1 p-3">
                        <h3 className="md:col-span-6 zero:col-span-7 text-base">TRACK</h3>
                        <h3 className="md:col-span-6 zero:col-span-5 text-base">ARTIST</h3>
                    </div>
                    <>
                        {truefalsesimilarsonglength === true ?
                            <>
                                {similarsongall.tracks.map((o, index) => (
                                    <Similarsong
                                        key={index}
                                        namemusic={o.title}
                                        linkpagemusic={o.key}
                                        artistsong={o.subtitle}
                                        linkpagartist={o.artists !== undefined ? o.artists.map(o => o.adamid)[0] : ""}
                                        covermusic={o.images !== undefined ? o.images.coverart : ananymousmusic}
                                    >
                                    </Similarsong>
                                ))}
                            </>
                            : <>
                                {littlesimilarsong.map(o => (
                                    <Similarsong
                                        namemusic={o.title}
                                        linkpagemusic={o.key}
                                        artistsong={o.subtitle}
                                        linkpagartist={o.artists !== undefined ? o.artists.map(o => o.adamid)[0] : ""}
                                        covermusic={o.images !== undefined ? o.images.coverart : ananymousmusic}
                                    >
                                    </Similarsong>
                                ))}
                            </>}
                    </>
                    <div className="text-center my-4">
                        <button className="w-1/2 h-12 bg-bluepro rounded-3xl" onClick={() => dispatch(changesimilarsonglength())}>
                            {truefalsesimilarsonglength === true ? "Show Less" : "Show More"}
                        </button>
                    </div>
                </div>
                : ""}
        </>
    )
}

export default Mapinsimilarsong