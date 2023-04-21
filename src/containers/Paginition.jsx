import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { updatewidthplayermusic } from "../redux/actions/forplayermusic";
import Albums from "../pages/Album";
import Charts from "../pages/Charts";
import Favourite from "../pages/Favourite";
import Header from "../component/header/Header";
import Headerhelperinmobile from "../component/header/Headerhelperinmobile";
import Sidebarleft from "../component/header/Sidebarleft";
import Homelayout from "../pages/Homelayout";
import Song from "../pages/Song";
import Artist from "../pages/Artist";
import Searchinputformobile from "../component/searching/Searchinputformobile";
import Musicplayercontrol from "../component/musicplayer/Musicplayercontrol";
import Pagenotfound from "../component/404/Pagenotfound";

const Paginition = () => {

    const widthplayermusic = useSelector(state => state.widthplayermusic)
    const forclosemusiccontrol = useSelector(state => state.forclosemusiccontrol)
    const howpageplayedmusic = useSelector(state => state.howpageplayedmusic)
    const playlistpagesongfake = useSelector(state => state.playlistpagesongorginalyfake)
    const plylisttrendmusic = useSelector(state => state.plylisttrendmusic)
    const plylistcharttopmusic = useSelector(state => state.plylistcharttopmusic)
    const playlisttopsongartist = useSelector(state => state.playlisttopsongartist)
    const playlistalbumpage = useSelector(state => state.playlistalbumpage)
    const playlisttrackschartforcountrie = useSelector(state => state.playlisttrackschartforcountrie)
    const playlistfavouritetracks = useSelector(state => state.playlistfavouritetracks)
    const dispatch = useDispatch()

    useEffect(() => {
        const upadatewidthplayermusic = () => {
            dispatch(updatewidthplayermusic(document.getElementById("contentmain").clientWidth))
        }
        localStorage.removeItem("namemusicplayingorplayed")
        localStorage.removeItem("artistmusicplayingorplayed")
        // localStorage.removeItem("whichplayinginalbume")
        window.addEventListener("resize", upadatewidthplayermusic);
        dispatch(updatewidthplayermusic(document.getElementById("contentmain").clientWidth))
        return () => window.removeEventListener("resize", upadatewidthplayermusic);
    }, [<Paginition />, dispatch]);


    let validetionplayermusic = forclosemusiccontrol === true && howpageplayedmusic.length !== undefined && howpageplayedmusic.length >= 1 && (howpageplayedmusic === playlistpagesongfake || howpageplayedmusic === plylisttrendmusic || howpageplayedmusic === plylistcharttopmusic || howpageplayedmusic === playlisttopsongartist || howpageplayedmusic === playlistalbumpage || howpageplayedmusic === playlisttrackschartforcountrie || howpageplayedmusic === playlistfavouritetracks)

    return (
        <Fragment>
            <div className="grid grid-cols-12 gap-4 sm:container mx-auto w-full">
                <div className="col-span-2 lg:block zero:hidden">
                    <Sidebarleft />
                </div>
                <div id="contentmain" className="lg:col-span-10 zero:col-span-12">
                    <Header />
                    <div className="md:mb-16 zero:mb-24">
                        <Routes>
                            <Route path="/favourites" element={<Favourite />} />
                            <Route path="/charts" element={<Charts />} />
                            <Route path="/albums/:idalbum" element={<Albums />} />
                            <Route path="/search" element={<Searchinputformobile />} />
                            <Route path="/artist/:idartist" element={<Artist />} />
                            <Route path="/song/:idsong" element={<Song />} />
                            <Route path="/" exact element={<Homelayout />} />
                            <Route path="*" element={<Pagenotfound />} />
                        </Routes>
                    </div>
                    <div className="fixed bottom-0 flex flex-col px-5 z-40" style={{ width: widthplayermusic }} >
                        {validetionplayermusic ? <Musicplayercontrol /> : ""}
                        <Headerhelperinmobile />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Paginition