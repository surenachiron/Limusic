import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
// import uniqid from 'uniqid'
// import Nakhodajalal from "../../assets/sounds/02NakhodaJelal.mp3"
// import daar from "../../assets/sounds/03Daar(Daastaan-e-Maryam).mp3"
// import gorizmarkaz from "../../assets/sounds/04GorizAzMarkaz.mp3"
// import laghzesh from "../../assets/sounds/09Laghzesh.mp3"
// import aghamsorenaimg from "../../assets/images/Folder.jpg"
// import { useSelector, useDispatch } from "react-redux";
// import { addlastmusicplayed, addminutecurrenttime, addminuteduration, addmusicplaying, addsecondcurrenttime, addsecondduration, clearnumberloop } from "../../redux/actions/forplayermusic";
// import { chnagemusicended } from "../../redux/actions/truefalse";
// import { updatewidthplayermusic } from "../../redux/actions/another";
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination"
import "./swiperslide.css"

const Charttop50 = ({ covermusic, titlemusic, linkpagetitlemusic, artistmusic, linkpageartistmusic }) => {

    // const mouseDownOnSlider = useSelector(state => state.mouseDownOnSlider);
    // const musicplaying = useSelector(state => state.musicplaying);
    // const randomemusicnumber = useSelector(state => state.randomeplaymusic)

    // const progressEl = document.querySelector('input[type="range"]');
    // const progress = document.querySelector('progress');

    // const forplayandpuse = (iduniq) => {
    //     const trackchosed = document.getElementById(iduniq)
    //     if (trackchosed.paused === true) {
    //         const audioTracks = document.querySelectorAll("audio");
    //         const musicplayingforpuase = document.getElementById(musicplaying);
    //         if (musicplayingforpuase !== null) {
    //             console.log(musicplayingforpuase, musicplaying)
    //             musicplayingforpuase.pause()
    //         }

    //         trackchosed.play()
    //         localStorage.setItem("ismusicplaying", "yes")
    //         dispatch(addmusicplaying(iduniq))
    //         dispatch(chnagemusicended(true))
    //     } else {
    //         trackchosed.pause()
    //         dispatch(chnagemusicended(false))
    //         localStorage.setItem("ismusicplaying", "no")
    //         dispatch(addlastmusicplayed(iduniq))
    //     }
    // }


    // const forupdateallmusic = () => {
    //     const musicplayingg = document.getElementById(musicplaying)
    //     if (!mouseDownOnSlider) {
    //         progressEl.value = musicplayingg.currentTime / musicplayingg.duration * 100;
    //         progress.value = musicplayingg.currentTime / musicplayingg.duration * 100;
    //     }
    //     transformationtimeforcurrenttime(musicplayingg.currentTime)
    //     transformationtimeforduration(musicplayingg.duration)
    // }

    // const numeberloop = useSelector(state => state.numeberloop)
    // const foronendedandloop = () => {
    //     const musicplay = document.getElementById(musicplaying)
    //     if (numeberloop === 1) {
    //         if (musicplay !== null) musicplay.play()
    //         else playmusicbyrandom()
    //         dispatch(clearnumberloop())
    //     } else if (numeberloop === 2) {
    //         musicplay.play()
    //         playmusicbyrandom()
    //     } else {
    //         dispatch(chnagemusicended(false))
    //         musicplay.pause()
    //         playmusicbyrandom()
    //     }
    // }

    // function playmusicbyrandom() {
    //     if (randomemusicnumber === true) {
    //         dispatch(chnagemusicended(true))
    //         const numberrandom = Math.floor(Math.random() * (5 - 1) + 1).toString()
    //         console.log(numberrandom)
    //         if (numberrandom === localStorage.getItem("numberrandom")) {
    //             const randomreplace = Math.floor(Math.random() * (5 - 1) + 1).toString()
    //             const musicmain = document.getElementById("audio" + randomreplace)
    //             console.log(randomreplace)
    //             musicmain.play()
    //             localStorage.setItem("numberrandom", randomreplace)
    //             dispatch(addmusicplaying("audio" + randomreplace))
    //         } else {
    //             const musicmain = document.getElementById("audio" + numberrandom)
    //             musicmain.play()
    //             localStorage.setItem("numberrandom", numberrandom)
    //             dispatch(addmusicplaying("audio" + numberrandom))
    //         }
    //         localStorage.setItem("ismusicplaying", "yes")
    //     }
    // }


    // function transformationtimeforcurrenttime(currentTimeget) {
    //     let minutestest, secondstest;
    //     let currenttime = currentTimeget
    //     minutestest = Math.floor(currenttime / 60);
    //     minutestest = (minutestest >= 10) ? minutestest : "0" + minutestest;
    //     secondstest = Math.floor(currenttime % 60);
    //     secondstest = (secondstest >= 10) ? secondstest : "0" + secondstest;
    //     dispatch(addminutecurrenttime(minutestest))
    //     dispatch(addsecondcurrenttime(secondstest))
    // }

    // function transformationtimeforduration(durationn) {
    //     let minutestest, secondstest;
    //     let duration = durationn
    //     minutestest = Math.floor(duration / 60);
    //     minutestest = (minutestest >= 10) ? minutestest : "0" + minutestest;
    //     secondstest = Math.floor(duration % 60);
    //     secondstest = (secondstest >= 10) ? secondstest : "0" + secondstest;
    //     dispatch(addminuteduration(minutestest))
    //     dispatch(addsecondduration(secondstest))
    // }

    let slicetexttitle = titlemusic.slice(0, 10) + "..."
    let slicetextartist = artistmusic.slice(0, 10) + "..."

    return (
        <Fragment>
            <div className="cursor-pointer zero:w-full lg:w-auto">
                {linkpagetitlemusic !== undefined && linkpagetitlemusic.length !== 0 ?
                    <NavLink to={`/song/${linkpagetitlemusic}`} >
                        {covermusic !== undefined && covermusic.length !== 0 ?
                            <img src={covermusic} className="w-full lg:h-32 md:h-28 sm:h-24 rounded-3xl" />
                            : ""}
                    </NavLink>
                    : <>
                        {covermusic !== undefined && covermusic.length !== 0 ?
                            <img src={covermusic} className="w-full lg:h-32 md:h-28 sm:h-24 rounded-3xl" />
                            : ""}
                    </>
                }
                <div className="ml-1 mt-2">
                    {linkpagetitlemusic !== undefined && linkpagetitlemusic.length !== 0 ?
                        <NavLink to={`/song/${linkpagetitlemusic}`} >
                            <h5 className="mdlg:text-base zero:text-base text-white w-full">{titlemusic.length >= 10 ? slicetexttitle : titlemusic}</h5>
                        </NavLink>
                        : <h3 className="mdlg:text-base zero:text-base text-bluepro mt-3">{titlemusic.length >= 10 ? slicetexttitle : titlemusic}</h3>
                    }
                    {linkpageartistmusic !== undefined && linkpageartistmusic.length !== 0 ?
                        <NavLink to={`/artist/${linkpageartistmusic}`} >
                            <h3 className="mdlg:text-base zero:text-base text-bluepro mt-3">{artistmusic.length >= 10 ? slicetextartist : artistmusic}</h3>
                        </NavLink>
                        : <h3 className="mdlg:text-base zero:text-base text-bluepro mt-3">{artistmusic.length >= 10 ? slicetextartist : artistmusic}</h3>
                    }
                </div>
            </div>
            {/* <div className="cursor-pointer zero:w-full lg:w-auto">
                    <img src={aghamsorenaimg} className="w-full lg:h-32 md:h-28 sm:h-24 rounded-3xl" />
                    <div className="ml-1 mt-2">
                    <h3 className="mdlg:text-base zero:text-sm text-white w-full">Laghzesh<h3>
                    <h5 className="mdlg:text-base zero:text-sm text-bluepro">sorena</h5>
                    </div>
                    <audio id="audio6" style={{ marginTop: "12px", float: "left" }} onTimeUpdate={forupdateallmusic} onLoadedData={() => { (progressEl.value === null) ? progressEl.value = 0 : progressEl.value = 0 }} onEnded={foronendedandloop}>
                    <source src={laghzesh} type="audio/mpeg" />
                    </audio>
                 </div>*/}
        </Fragment >
    )
}

export default Charttop50