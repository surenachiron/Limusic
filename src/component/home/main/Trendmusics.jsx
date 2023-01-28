import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addlastmusicplayed, addminutecurrenttime, addminuteduration, addmusicplaying, addsecondcurrenttime, addsecondduration, clearnumberloop, updateallplayermusic } from "../../../redux/actions/forplayermusic";
import trendeartist from "../../../assets/images/artisttrand.png";
import trendearmusicomah from "../../../assets/sounds/Omah-Lay-Godly-(TrendyBeatz.com).mp3";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { chnagemusicended } from "../../../redux/actions/truefalse";

const Trendmusics = () => {

    const mouseDownOnSlider = useSelector(state => state.mouseDownOnSlider);
    const musicplaying = useSelector(state => state.musicplaying);
    const dispatch = useDispatch()
    const randomemusicnumber = useSelector(state => state.randomeplaymusic)

    const progress = document.querySelector('progress');
    const progressEl = document.querySelector('input[type="range"]');

    const forplayandpuse = (iduniq) => {
        const trackchosed = document.getElementById(iduniq)
        if (trackchosed.paused === true) {
            const musicplayingforpuase = document.getElementById(musicplaying);
            if (musicplayingforpuase !== null) {
                console.log(musicplayingforpuase, musicplaying)
                musicplayingforpuase.pause()
            }
            trackchosed.play()
            dispatch(chnagemusicended(true))
            localStorage.setItem("ismusicplaying", "yes")
            dispatch(addmusicplaying(iduniq))
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
            if (musicplay === null) dispatch(chnagemusicended(false))
            musicplay.pause()
            playmusicbyrandom()
        }
    }

    function playmusicbyrandom() {
        if (randomemusicnumber === true) {
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
            <div className="h-4/5 flex grid grid-cols-12 border-1 rounded-3xl items-center justify-center mb-5">
                <div className="col-span-6 pl-14 py-3">
                    <h2 className="mdlg:text-base sm:text-sm zero:text-xs">Trending</h2>
                    <h3 className="mdlg:text-5xl sm:text-4xl zero:text-3xl my-5">Godly</h3>
                    <h4 className="mdlg:text-base sm:text-sm zero:text-xs">Omah Lay</h4>
                    <div className="flex items-end mt-5">
                        <button id="PlayMusicTrand" onClick={() => forplayandpuse("tendmusicGodly")} className="lg:px-10 lg:py-3 md:px-2 md:py-2 zero:py-2 zero:px-2 bg-bluepro rounded-2xl ">Play Now
                            <FontAwesomeIcon icon={faPlayCircle} className={`ml-2 cursor-pointer text-base`}></FontAwesomeIcon>
                            <audio id="tendmusicGodly" onTimeUpdate={forupdateallmusic} onLoadedData={() => { progressEl.value = 0; }} onEnded={foronendedandloop}>
                                <source src={trendearmusicomah} type="audio/mpeg" />
                            </audio>
                        </button>
                        <button className="sm:block zero:hidden px-5 py-2 ml-3 bg-white rounded-2xl">
                            <p className="lg:text-2xl text-black font-bold">+</p>
                        </button>
                    </div>
                </div>
                <div className="col-span-6 pr-10">
                    <img src={trendeartist} alt="" className="w-full h-full rounded-3xl smmdlg:p-8 zero:p-0" />
                </div>
            </div>
        </Fragment>
    )
}

export default Trendmusics