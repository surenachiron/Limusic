import React, { Fragment, useEffect, useState } from "react";
import testimg1 from "../../assets/images/ananymousformusicorartist.png"
import { useDispatch, useSelector } from "react-redux";
import { changemousedown, chnagemusicended, muteandopen, changerandomplaymusic } from '../../redux/actions/truefalse'
import { addmusicplaying, incrementnumberloop } from "../../redux/actions/forplayermusic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPause, faPlay, faRandom, faRetweet, faStepBackward, faStepForward } from "@fortawesome/fontawesome-free-solid";
import { faListUl, faVolumeHigh, faVolumeXmark, faClose } from "@fortawesome/free-solid-svg-icons";

const Musicplayer = () => {

    const musicplaying = useSelector(state => state.musicplaying);
    // const lastmusicplayed = useSelector(state => state.lastmusicplayed);
    const minutecurrenttime = useSelector(state => state.currenTimeminute)
    const secondcurrenttime = useSelector(state => state.currenTimesecond)
    const minuteduration = useSelector(state => state.durationminute)
    const secondduration = useSelector(state => state.durationsecond)
    const numeberloop = useSelector(state => state.numeberloop)
    const musicended = useSelector(state => state.musicended)
    const dispatch = useDispatch();
    const progressEl = document.querySelector('input[type="range"]');
    const randomemusicnumber = useSelector(state => state.randomeplaymusic)
    const volumeallmusic = useSelector(state => state.volumeallmusic)
    let [showmusicplayer, setshowmusicplayer] = useState("")

    let hideshowtimenusic = ""
    if (minutecurrenttime === undefined || secondcurrenttime === undefined || minuteduration === undefined || secondduration === undefined) {
        hideshowtimenusic = 'hidden'
    } else hideshowtimenusic = 'block'

    let iconplay = "";
    let iconpause = "";
    if (musicended === true) {
        iconplay = "hidden"
        iconpause = "block"
    } else {
        iconplay = "block"
        iconpause = "hidden"
    }
    let showretweet1 = ""
    let showretweet2 = ""
    let showretweetevery = ""
    if (numeberloop === 0) {
        showretweet1 = "block"
        showretweet2 = "hidden"
        showretweetevery = "hidden"
    } else if (numeberloop === 1) {
        showretweet1 = "hidden"
        showretweet2 = "flex"
        showretweetevery = "hidden"
    } else if (numeberloop === 2) {
        showretweet1 = "hidden"
        showretweet2 = "hidden"
        showretweetevery = "flex"
    }
    let showrandom = ""
    if (randomemusicnumber === true) showrandom = "text-bluepro"
    else showrandom = "text-graypro hover:text-white"

    useEffect(() => {
        if (musicended === true) {
            iconplay = "hidden"
            iconpause = "block"
        } else {
            iconplay = "block"
            iconpause = "hidden"
        }
    }, [musicended])
    useEffect(() => {
        iconplay = "block"
        iconpause = "hidden"
    }, [])


    const forchangeprogressbar = () => {
        const musicplayingg = document.getElementById(musicplaying)
        const pct = progressEl.value / 100;
        musicplayingg.currentTime = (musicplayingg.duration || 0) * pct;
    }

    const formousedownprogressbar = () => {
        dispatch(changemousedown())
    }
    const formouseupprogressbar = () => {
        dispatch(changemousedown())
    }

    const puseallmusic = () => {
        const audioTracks = document.getElementById(musicplaying);
        if (audioTracks !== null) {
            audioTracks.pause()
            dispatch(chnagemusicended(false))
        }
    }

    const playinglastmusicplayed = () => {
        const musicmain = document.getElementById(musicplaying)
        if (musicmain !== null) {
            musicmain.play()
            dispatch(chnagemusicended(true))
        } else {
            if (randomemusicnumber === true) {
                const randommusic = Math.floor(Math.random() * (5 - 1) + 1)
                let musicmain = document.getElementById("audio" + randommusic.toString())
                dispatch(chnagemusicended(true))
                musicmain.play()
                localStorage.setItem("ismusicplaying", "yes")
                localStorage.setItem("numberrandom", randommusic)
                dispatch(addmusicplaying("audio" + randommusic.toString()))
            }
        }
    }

    // const fornextmusic = (indexinarray) => {
    //     const mainindex = indexinarray + 1
    //     const musicnext = ""
    //     const musicplay = ""
    //     const getidmusicnext = ""
    //     for (let get in mainindex) {
    //         getidmusicnext = get.id
    //         musicnext = document.getElementById(getidmusicnext)
    //         musicplay = document.getElementById(musicplaying)
    //     }
    //     musicplay.pause()
    //     localStorage.setItem("ismusicplaying", "no")
    //     musicnext.play()
    //     localStorage.setItem("ismusicplaying", "yes")
    //     dispatch(addlastmusicplayed(musicplaying))
    //     dispatch(addmusicplaying(getidmusicnext))
    // }

    // const forpreviousmusic = (indexinarray) => {
    //     const mainindex = indexinarray - 1
    //     const musicnext = ""
    //     const musicplay = ""
    //     const getidmusicnext = ""
    //     for (let get in mainindex) {
    //         getidmusicnext = get.id
    //         musicnext = document.getElementById(getidmusicnext)
    //         musicplay = document.getElementById(musicplaying)
    //     }
    //     musicplay.pause()
    //     localStorage.setItem("ismusicplaying", "no")
    //     musicnext.play()
    //     localStorage.setItem("ismusicplaying", "yes")
    //     dispatch(addlastmusicplayed(musicplaying))
    //     dispatch(addmusicplaying(getidmusicnext))
    // }
    const forvolume = () => {
        dispatch(muteandopen())
        const musicplayingformuteorno = document.getElementById(musicplaying)
        console.log(volumeallmusic)
        console.log(musicplayingformuteorno)
        if (musicplayingformuteorno !== null) {
            if (volumeallmusic === true) {
                musicplayingformuteorno.volume = 0
                document.getElementById("rangevolume").value = 0
                localStorage.setItem("volumenumber", "0")
            } else {
                musicplayingformuteorno.volume = 1
                document.getElementById("rangevolume").value = 1
                localStorage.setItem("volumenumber", "1")
            }
        }
    }

    const forchangevolume = (e) => {
        const getvalue = e.target.value
        localStorage.setItem("volumenumber", getvalue)
        const musicplayingformuteorno = document.getElementById(musicplaying)
        if (musicplayingformuteorno !== null) {
            musicplayingformuteorno.volume = getvalue
        }
    }

    const forcloseplayermusic = () => {
        const musicmain = document.getElementById(musicplaying)
        if (musicmain !== null) {
            musicmain.pause()
            dispatch(chnagemusicended(false))
        }
        dispatch(addmusicplaying(''))

    }

    // ========================================================================================= //

    const [widthscreen, setWidthCcreen] = useState(0);
    const updateDimensions = () => {
        setWidthCcreen(document.getElementById("progressbarmusic").clientWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        setWidthCcreen(document.getElementById("progressbarmusic").clientWidth)

        if (musicplaying.length === 0 || musicplaying === null || musicplaying === undefined) setshowmusicplayer("hidden")
        else setshowmusicplayer("grid")

        return () => window.removeEventListener("resize", updateDimensions);
    }, [<Musicplayer />]);

    function oninputrangevolume(e) {
        var value = (e.target.value - e.target.min) / (e.target.max - e.target.min) * 100
        e.target.style.background = 'linear-gradient(to right, #3369ff 0%, #3369ff ' + value + '%, #fff ' + value + '%, white 100%)'
    };



    return (
        <Fragment>
            <div className={`${showmusicplayer} grid-cols-12 bg-blackopacitylittle text-3xl text-white h-13/100 rounded-3xl border-grayprodark border-1 z-auto w-full backdrop-blur-sm`}>
                <div className="lg:col-span-2 zero:col-span-2 flex items-center justify-center cursor-pointer">
                    <img src={testimg1} className="lg:w-14 lg:h-10 zero:w-10 zero:h-10 rounded-lg mr-2 lg:ml-5 zero:ml-0" />
                    <div className="zero:hidden lg:block">
                        <h3 className="text-base">Temples</h3>
                        <h5 className="text-sm text-graypro">Lone</h5>
                    </div>
                </div>
                <div className="flex flex-col col-span-8 text-center mx-7">
                    <div className="flex items-center justify-center h-2/3">
                        <div className="py-3 px-3 md:mr-5 zero:mr-2">
                            <FontAwesomeIcon icon={faRandom} className={`${showrandom} block cursor-pointer  text-sm  hover:transition-all`} onClick={() => dispatch(changerandomplaymusic())}></FontAwesomeIcon>
                        </div>
                        <div className="py-3 px-3 md:mr-5 zero:mr-2">
                            <FontAwesomeIcon icon={faStepBackward} className={`block cursor-pointer text-white text-sm`}></FontAwesomeIcon>
                        </div>
                        <div id="plauandpause" className="bg-bluepro rounded-full py-3 px-3">
                            <FontAwesomeIcon icon={faPause} className={`${iconpause} cursor-pointer text-white text-sm`} onClick={puseallmusic} />
                            <FontAwesomeIcon icon={faPlay} className={`${iconplay} cursor-pointer text-white text-sm`} onClick={playinglastmusicplayed} />
                        </div>
                        <div className="py-3 px-3 md:ml-5 zero:ml-2">
                            <FontAwesomeIcon icon={faStepForward} className={`block cursor-pointer text-white text-sm`}></FontAwesomeIcon>
                        </div>
                        <div className="py-3 px-3 md:ml-5 zero:ml-2">
                            <FontAwesomeIcon id="retweetoneplay" icon={faRetweet} className={`${showretweet1} cursor-pointer text-graypro text-sm hover:text-white hover:transition-all`} onClick={() => dispatch(incrementnumberloop())}></FontAwesomeIcon>
                            <div className={`${showretweet2} m-0 p-0 items-center justify-center`} onClick={() => dispatch(incrementnumberloop())}>
                                <FontAwesomeIcon id="retweettwoplay" icon={faRetweet} className={` cursor-pointer text-bluepro text-sm`} ></FontAwesomeIcon>
                                <p className="text-white text-1 absolute my-7">1</p>
                            </div>
                            <div className={`${showretweetevery} m-0 p-0 items-center justify-center`} onClick={() => dispatch(incrementnumberloop())}>
                                <FontAwesomeIcon id="retweeteveryplay" icon={faRetweet} className={` cursor-pointer text-bluepro text-sm`} ></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center h-1/3">
                        <div className={`${hideshowtimenusic} flex items-center justify-center mr-3 mb-3`}>
                            <p className="text-xs">{minutecurrenttime}:</p>
                            <p className="text-xs">{secondcurrenttime}</p>
                        </div>
                        <div className="h-6 w-full mb-3 flex items-center">
                            <input type="range" className="form-range w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none mb-1" id="progressbarmusic" onMouseDown={formousedownprogressbar} onMouseUp={formouseupprogressbar} onChange={forchangeprogressbar} step="0.1" />
                            <progress id="musikprogress" max="100" onMouseDown={formousedownprogressbar} onMouseUp={formouseupprogressbar} onChange={forchangeprogressbar} style={{ width: widthscreen }}>12</progress>
                        </div>
                        <div className={`${hideshowtimenusic} flex items-center justify-center ml-3 mb-3`}>
                            <p className="text-xs">{minuteduration}:</p>
                            <p className="text-xs"> {secondduration}</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col items-center justify-center">
                    <div className="flex w-full h-full items-center justify-end">
                        <FontAwesomeIcon icon={faClose} className="text-base cursor-pointer mr-5" onClick={forcloseplayermusic}></FontAwesomeIcon>
                    </div>
                    <div className="flex h-full justify-center items-start">
                        <FontAwesomeIcon icon={faHeart} className={`cursor-pointer text-grayprolight text-sm mr-3`} ></FontAwesomeIcon>
                        <div className="group/item text-sm transition-all flex justify-center">
                            {volumeallmusic === false || (localStorage.getItem("volumenumber") !== null && Number(localStorage.getItem("volumenumber") * 10) <= 1) ? <FontAwesomeIcon icon={faVolumeXmark} className={`cursor-pointer text-bluepro text-sm mr-3`} onClick={forvolume} ></FontAwesomeIcon> : <FontAwesomeIcon icon={faVolumeHigh} className={`cursor-pointer text-grayprolight text-sm mr-3`} onClick={forvolume} ></FontAwesomeIcon>
                            }
                            <div className="hidden md:group-hover/item:block text-white absolute top-1 mr-3 mb-10">
                                <input id="rangevolume" type="range" max='1' step="0.1" className="p-1" onInput={e => oninputrangevolume(e)} onChange={e => forchangevolume(e)} />
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faListUl} className={`cursor-pointer text-grayprolight text-sm mr-3`} ></FontAwesomeIcon>
                        <p className="text-xs text-grayprolight lg:block zero:hidden">350k</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Musicplayer