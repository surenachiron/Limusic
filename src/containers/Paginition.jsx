import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Header from "../component/header/Header";
import Headerhelperinmobile from "../component/header/Headerhelperinmobile";
import Musicplayer from "../component/header/Musicplayer";
import Homelayout from "../pages/Homelayout";
import Sidebarleft from "../component/sidebarleft/Sidebarleft";
import Song from "../pages/Song";
import { updatewidthplayermusic } from "../redux/actions/another";
import Artist from "../component/artistpage/Artist";

const Paginition = () => {

    const dispatch = useDispatch()
    const [widthplayermusicc, swidthplayermusicc] = useState(window.innerWidth);    
    const upadatewidthplayermusic = () => {
        swidthplayermusicc(document.getElementById("contentmain").clientWidth);
        dispatch(updatewidthplayermusic(document.getElementById("contentmain").clientWidth))
    }
    useEffect(() => {
        window.addEventListener("resize", upadatewidthplayermusic);
        swidthplayermusicc(document.getElementById("contentmain").clientWidth)
        dispatch(updatewidthplayermusic(document.getElementById("contentmain").clientWidth))
        return () => window.removeEventListener("resize", upadatewidthplayermusic);
    }, [<Paginition />]);
    const widthplayermusic = useSelector(state => state.widthplayermusic)

    return (
        <Fragment>
            <div className="grid grid-cols-12 gap-4 smmdlg:container mx-auto zero:grid zero:w-full">
                <div className="col-span-2 lg:block zero:hidden">
                    <Sidebarleft />
                </div>
                <div id="contentmain" className="lg:col-span-10 md:col-span-12 sm:col-span-12 zero:col-span-12">
                    <Header />
                    <div className="md:mb-16 zero:mb-24">
                        <Routes>
                            <Route path="/albums/:idalbum" element={<Song />} />
                            <Route path="/albums" element={<Song />} />
                            {/* <Route path="/liked" element={<Song />} /> */}
                            {/* <Route path="/playlist/:idplaylists" element={<Song />} /> */}
                            {/* <Route path="/playlist" element={<Song />} /> */}
                            <Route path="/artist/:idartist" element={<Artist />} />
                            <Route path="/song/:idsong" element={<Song />} />
                            <Route path="/" exact element={<Homelayout />} />
                        </Routes>
                    </div>
                    <div className="fixed bottom-0 flex flex-col px-5 z-50" style={{ width: widthplayermusic }} >
                        <Musicplayer />
                        <Headerhelperinmobile />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Paginition