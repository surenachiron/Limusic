import React, { Fragment, useEffect, useState } from "react";
import uniqid from 'uniqid'
import Nakhodajalal from "../../../assets/sounds/02NakhodaJelal.mp3"
import daar from "../../../assets/sounds/03Daar(Daastaan-e-Maryam).mp3"
import gorizmarkaz from "../../../assets/sounds/04GorizAzMarkaz.mp3"
import laghzesh from "../../../assets/sounds/09Laghzesh.mp3"
import aghamsorenaimg from "../../../assets/images/Folder.jpg"
import { useSelector, useDispatch } from "react-redux";
import { addlastmusicplayed, addminutecurrenttime, addminuteduration, addmusicplaying, addsecondcurrenttime, addsecondduration, clearnumberloop } from "../../../redux/actions/forplayermusic";
import { chnagemusicended } from "../../../redux/actions/truefalse";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination"

import "./swiperslide.css"
import { updatewidthplayermusic } from "../../../redux/actions/another";

const Charttop50 = () => {

    const mouseDownOnSlider = useSelector(state => state.mouseDownOnSlider);
    const musicplaying = useSelector(state => state.musicplaying);
    const dispatch = useDispatch()
    const randomemusicnumber = useSelector(state => state.randomeplaymusic)

    const progressEl = document.querySelector('input[type="range"]');
    const progress = document.querySelector('progress');

    const forplayandpuse = (iduniq) => {
        const trackchosed = document.getElementById(iduniq)
        if (trackchosed.paused === true) {
            const audioTracks = document.querySelectorAll("audio");
            const musicplayingforpuase = document.getElementById(musicplaying);
            if (musicplayingforpuase !== null) {
                console.log(musicplayingforpuase, musicplaying)
                musicplayingforpuase.pause()
            }

            trackchosed.play()
            localStorage.setItem("ismusicplaying", "yes")
            dispatch(addmusicplaying(iduniq))
            dispatch(chnagemusicended(true))
        } else {
            trackchosed.pause()
            dispatch(chnagemusicended(false))
            localStorage.setItem("ismusicplaying", "no")
            dispatch(addlastmusicplayed(iduniq))
        }
    }


    const forupdateallmusic = () => {
        const musicplayingg = document.getElementById(musicplaying)
        if (!mouseDownOnSlider) {
            progressEl.value = musicplayingg.currentTime / musicplayingg.duration * 100;
            progress.value = musicplayingg.currentTime / musicplayingg.duration * 100;
        }
        transformationtimeforcurrenttime(musicplayingg.currentTime)
        transformationtimeforduration(musicplayingg.duration)
    }

    const numeberloop = useSelector(state => state.numeberloop)
    const foronendedandloop = () => {
        const musicplay = document.getElementById(musicplaying)
        if (numeberloop === 1) {
            if (musicplay !== null) musicplay.play()
            else playmusicbyrandom()
            dispatch(clearnumberloop())
        } else if (numeberloop === 2) {
            musicplay.play()
            playmusicbyrandom()
        } else {
            dispatch(chnagemusicended(false))
            musicplay.pause()
            playmusicbyrandom()
        }
    }

    function playmusicbyrandom() {
        if (randomemusicnumber === true) {
            dispatch(chnagemusicended(true))
            const numberrandom = Math.floor(Math.random() * (5 - 1) + 1).toString()
            console.log(numberrandom)
            if (numberrandom === localStorage.getItem("numberrandom")) {
                const randomreplace = Math.floor(Math.random() * (5 - 1) + 1).toString()
                const musicmain = document.getElementById("audio" + randomreplace)
                console.log(randomreplace)
                musicmain.play()
                localStorage.setItem("numberrandom", randomreplace)
                dispatch(addmusicplaying("audio" + randomreplace))
            } else {
                const musicmain = document.getElementById("audio" + numberrandom)
                musicmain.play()
                localStorage.setItem("numberrandom", numberrandom)
                dispatch(addmusicplaying("audio" + numberrandom))
            }
            localStorage.setItem("ismusicplaying", "yes")
        }
    }


    function transformationtimeforcurrenttime(currentTimeget) {
        let minutestest, secondstest;
        let currenttime = currentTimeget
        minutestest = Math.floor(currenttime / 60);
        minutestest = (minutestest >= 10) ? minutestest : "0" + minutestest;
        secondstest = Math.floor(currenttime % 60);
        secondstest = (secondstest >= 10) ? secondstest : "0" + secondstest;
        dispatch(addminutecurrenttime(minutestest))
        dispatch(addsecondcurrenttime(secondstest))
    }

    function transformationtimeforduration(durationn) {
        let minutestest, secondstest;
        let duration = durationn
        minutestest = Math.floor(duration / 60);
        minutestest = (minutestest >= 10) ? minutestest : "0" + minutestest;
        secondstest = Math.floor(duration % 60);
        secondstest = (secondstest >= 10) ? secondstest : "0" + secondstest;
        dispatch(addminuteduration(minutestest))
        dispatch(addsecondduration(secondstest))
    }

    
    return (
        <Fragment>
            <div id="charttopmusic" className="rounded-3xl flex flex-col w-full mb-5 justify-center shadow border-grayprodark border-1 px-5 bg-testbacksecond">
                <h2 className="text font-bold p-2 my-3">Charts: Top 50</h2>
                <div className="flex w-full mb-7 kosnanaekhamenei">
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={5}
                        centeredSlides={false}
                        spaceBetween={30}
                        grabCursor={true}
                        pagination={{ clickable: true }}
                        className="myswiper"
                    >
                        <SwiperSlide className="text-blackpro">
                            <div className="cursor-pointer zero:w-full lg:w-auto" onClick={() => forplayandpuse("audio1")}>
                                <img src={aghamsorenaimg} className="w-full lg:h-32 md:h-28 sm:h-24 rounded-3xl" />
                                <div className="ml-1 mt-2">
                                    <h3 className="mdlg:text-base zero:text-sm text-white w-full">Nakhodajalal</h3>
                                    <h5 className="mdlg:text-base zero:text-sm text-bluepro">sorena</h5>
                                </div>
                                <audio id="audio1" style={{ marginTop: "12px", float: "left" }} onTimeUpdate={forupdateallmusic} onLoadedData={() => { (progressEl.value === null) ? progressEl.value = 0 : progressEl.value = 0 }} onEnded={foronendedandloop}>
                                    <source src={Nakhodajalal} type="audio/mpeg" />
                                </audio>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="text-blackpro">
                            <div className="cursor-pointer zero:w-full lg:w-auto" onClick={() => forplayandpuse("audio2")}>
                                <img src={aghamsorenaimg} className="w-full lg:h-32 md:h-28 sm:h-24 rounded-3xl" />
                                <div className="ml-1 mt-2">
                                    <h3 className="mdlg:text-base zero:text-sm text-white w-full">Daar</h3>
                                    <h5 className="mdlg:text-base zero:text-sm text-bluepro">sorena</h5>
                                </div>
                                <audio id="audio2" style={{ marginTop: "12px", float: "left" }} onTimeUpdate={forupdateallmusic} onLoadedData={() => { (progressEl.value === null) ? progressEl.value = 0 : progressEl.value = 0 }} onEnded={foronendedandloop}>
                                    <source src={daar} type="audio/mpeg" />
                                </audio>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="text-blackpro">
                            <div className="cursor-pointer zero:w-full lg:w-auto" onClick={() => forplayandpuse("audio3")}>
                                <img src={aghamsorenaimg} className="w-full lg:h-32 md:h-28 sm:h-24 rounded-3xl" />
                                <div className="ml-1 mt-2">
                                    <h3 className="mdlg:text-base zero:text-sm text-white w-full">Gorizmarkaz</h3>
                                    <h5 className="mdlg:text-base zero:text-sm text-bluepro">sorena</h5>
                                </div>
                                <audio id="audio3" style={{ marginTop: "12px", float: "left" }} onTimeUpdate={forupdateallmusic} onLoadedData={() => { (progressEl.value === null) ? progressEl.value = 0 : progressEl.value = 0 }} onEnded={foronendedandloop}>
                                    <source src={gorizmarkaz} type="audio/mpeg" />
                                </audio>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="text-blackpro">
                            <div className="cursor-pointer zero:w-full lg:w-auto" onClick={() => forplayandpuse("audio4")}>
                                <img src={aghamsorenaimg} className="w-full lg:h-32 md:h-28 sm:h-24 rounded-3xl" />
                                <div className="ml-1 mt-2">
                                    <h3 className="mdlg:text-base zero:text-sm text-white w-full">Laghzesh</h3>
                                    <h5 className="mdlg:text-base zero:text-sm text-bluepro">sorena</h5>
                                </div>
                                <audio id="audio4" style={{ marginTop: "12px", float: "left" }} onTimeUpdate={forupdateallmusic} onLoadedData={() => { (progressEl.value === null) ? progressEl.value = 0 : progressEl.value = 0 }} onEnded={foronendedandloop}>
                                    <source src={laghzesh} type="audio/mpeg" />
                                </audio>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="text-blackpro">
                            <div className="cursor-pointer zero:w-full lg:w-auto" onClick={() => forplayandpuse("audio3")}>
                                <img src={aghamsorenaimg} className="w-full lg:h-32 md:h-28 sm:h-24 rounded-3xl" />
                                <div className="ml-1 mt-2">
                                    <h3 className="mdlg:text-base zero:text-sm text-white w-full">Gorizmarkaz</h3>
                                    <h5 className="mdlg:text-base zero:text-sm text-bluepro">sorena</h5>
                                </div>
                                <audio id="audio5" style={{ marginTop: "12px", float: "left" }} onTimeUpdate={forupdateallmusic} onLoadedData={() => { (progressEl.value === null) ? progressEl.value = 0 : progressEl.value = 0 }} onEnded={foronendedandloop}>
                                    <source src={gorizmarkaz} type="audio/mpeg" />
                                </audio>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="text-blackpro">
                            <div className="cursor-pointer zero:w-full lg:w-auto" onClick={() => forplayandpuse("audio4")}>
                                <img src={aghamsorenaimg} className="w-full lg:h-32 md:h-28 sm:h-24 rounded-3xl" />
                                <div className="ml-1 mt-2">
                                    <h3 className="mdlg:text-base zero:text-sm text-white w-full">Laghzesh</h3>
                                    <h5 className="mdlg:text-base zero:text-sm text-bluepro">sorena</h5>
                                </div>
                                <audio id="audio6" style={{ marginTop: "12px", float: "left" }} onTimeUpdate={forupdateallmusic} onLoadedData={() => { (progressEl.value === null) ? progressEl.value = 0 : progressEl.value = 0 }} onEnded={foronendedandloop}>
                                    <source src={laghzesh} type="audio/mpeg" />
                                </audio>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </Fragment>
    )
}

export default Charttop50