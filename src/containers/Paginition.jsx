import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Header from "../component/header/Header";
import Headerhelperinmobile from "../component/header/Headerhelperinmobile";
import Musicplayer from "../component/header/Musicplayer";
import Homelayout from "../component/home/Homelayout";
import Sidebarleft from "../component/home/sidebarleft/Sidebarleft";

const Paginition = () => {

    const widthplayermusic = useSelector(state => state.widthplayermusic)

    return (
        <Fragment>
            <div className="grid grid-cols-12 gap-4 smmdlg:container mx-auto zero:grid zero:w-full">
                <div className="col-span-2 lg:block zero:hidden">
                    <Sidebarleft />
                </div>
                <div className="lg:col-span-10 md:col-span-12 sm:col-span-12 zero:col-span-12">
                    <Header />
                    <Routes>
                        <Route path="/search" />
                        <Route path="/" exact element={<Homelayout />} />
                        {/* <Route path="*" element={<Page404 />} /> */}
                    </Routes>
                    <div className="fixed bottom-0 flex flex-col backdrop-blur-sm px-5" style={{ width: widthplayermusic }}>
                        <Musicplayer />
                        <Headerhelperinmobile />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Paginition