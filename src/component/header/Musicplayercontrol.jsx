import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPause, faPlay, faRandom, faRetweet, faStepBackward, faStepForward } from "@fortawesome/fontawesome-free-solid";
import { faVolumeHigh, faVolumeXmark, faClose } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { addnumberplaysonginplaylist, changeactiverendom, changeactiverendomwithprops, changecurrenttimemusic, changedurationtimemusic, changenumberretweet, changenumberretweetwithprops, changevalueorplayorpause, changevalueorplayorpausewithprops, changevolumemusic, changevolumemusicwithprops, createnumberrandomforplay, initialseforclosemusiccontrol, lowoffnumberplaysonginplaylist } from "../../redux/actions/forplayermusic";
import { changemousedown } from "../../redux/actions/truefalse";
import ReactLoading from 'react-loading';

const Musicplayercontrol = () => {

    const dispatch = useDispatch()
    const playlistpagesongfake = useSelector(state => state.playlistpagesongorginalyfake)
    const numberplaysonginplaylist = useSelector(state => state.numberplaysonginplaylist)
    const isplayorispause = useSelector(state => state.isplayorispause)
    const volumemusic = useSelector(state => state.volumemusic)
    const currenttimemusic = useSelector(state => state.currenttimemusic)
    const durationtimemusic = useSelector(state => state.durationtimemusic)
    const activerandom = useSelector(state => state.activerandom)
    const numberretweet = useSelector(state => state.numberretweet)
    const mouseDownOnSlider = useSelector(state => state.mouseDownOnSlider);
    const howplaylistisactive = useSelector(state => state.howpageplayedmusic)

    let namemusicplayingorplayed, artistmusicplayingorplayed, imagemusicplayingorplayed, soundmusicplayingorplayed, linksongmusicplayingorplayed, linkartistmusicplayingorplayed = ''
    if (howplaylistisactive === playlistpagesongfake) {
        namemusicplayingorplayed = playlistpagesongfake[numberplaysonginplaylist].namesong
        artistmusicplayingorplayed = playlistpagesongfake[numberplaysonginplaylist].nameartist
        imagemusicplayingorplayed = playlistpagesongfake[numberplaysonginplaylist].imagesong
        soundmusicplayingorplayed = playlistpagesongfake[numberplaysonginplaylist].soundsong
        linksongmusicplayingorplayed = playlistpagesongfake[numberplaysonginplaylist].linkpagesong
        linkartistmusicplayingorplayed = playlistpagesongfake[numberplaysonginplaylist].linkpageartist
    }

    console.log(playlistpagesongfake)
    console.log(howplaylistisactive === playlistpagesongfake)

    let musicplay = useRef(null)
    let inputrangevolume = useRef(null)
    let inputprofressbarmusic = useRef(null)

    /// play and pause 
    const playandpause = () => {
        dispatch(changevalueorplayorpause())
    }

    useEffect(() => {
        if (isplayorispause === true) {
            musicplay.current.play()
            dispatch(changevalueorplayorpausewithprops(true))
        }
        else {
            musicplay.current.pause()
            dispatch(changevalueorplayorpausewithprops(false))
        }
        localStorage.setItem("namemusicplayingorplayed", namemusicplayingorplayed)
        localStorage.setItem("artistmusicplayingorplayed", artistmusicplayingorplayed)
    }, [isplayorispause])

    useEffect(() => {
        dispatch(changevalueorplayorpausewithprops(false))
        if (soundmusicplayingorplayed.length >= 1 && soundmusicplayingorplayed !== undefined && soundmusicplayingorplayed !== '') {
            musicplay.current.pause()
            musicplay.current.load()
            musicplay.current.play()
        }
        dispatch(changevalueorplayorpausewithprops(true))
        localStorage.setItem("namemusicplayingorplayed", namemusicplayingorplayed)
        localStorage.setItem("artistmusicplayingorplayed", artistmusicplayingorplayed)
    }, [numberplaysonginplaylist])

    /// close and clear music play or pause
    const closeandclearmusic = () => {
        dispatch(initialseforclosemusiccontrol(false))
        dispatch(changevalueorplayorpausewithprops(false))
        dispatch(changeactiverendomwithprops(false))
        dispatch(changenumberretweetwithprops(0))
        musicplay.current.pause()
        musicplay.current.load()
        localStorage.removeItem("namemusicplayingorplayed")
        localStorage.removeItem("artistmusicplayingorplayed")
    }

    /// change volume music
    const forvolume = () => {
        if (volumemusic === false) {
            musicplay.current.volume = 0
            inputrangevolume.current.value = 0
        }
        else {
            musicplay.current.volume = 1
            inputrangevolume.current.value = 1
        }
        dispatch(changevolumemusic())
    }

    const forchangevolume = (e) => {
        const getvalue = e.target.value
        musicplay.current.volume = getvalue
        if (getvalue === "0") dispatch(changevolumemusicwithprops(true))
        else dispatch(changevolumemusicwithprops(false))
    }

    /// get value for progress bar and get time music
    const handleProgressChange = () => {
        musicplay.current.currentTime = inputprofressbarmusic.current.value
    }

    const formousedownprogressbar = () => {
        dispatch(changemousedown())
    }
    const formouseupprogressbar = () => {
        dispatch(changemousedown())
    }

    const forupdatemusicplaying = (e) => {
        if (!mouseDownOnSlider) {
            inputprofressbarmusic.current.value = musicplay.current.currentTime / musicplay.current.duration * 100;
        }
        transformationtimeforcurrenttime(e.target.currentTime)
        transformationtimeforduration(e.target.duration)
        localStorage.setItem("namemusicplayingorplayed", namemusicplayingorplayed)
        localStorage.setItem("artistmusicplayingorplayed", artistmusicplayingorplayed)
    }

    function transformationtimeforcurrenttime(currentTimeget) {
        let minutestest, secondstest;
        let currenttime = currentTimeget
        minutestest = Math.floor(currenttime / 60);
        minutestest = (minutestest >= 10) ? minutestest : "0" + minutestest;
        secondstest = Math.floor(currenttime % 60);
        secondstest = (secondstest >= 10) ? secondstest : "0" + secondstest;
        let orginalydata = [minutestest, secondstest]
        dispatch(changecurrenttimemusic(orginalydata))
    }

    function transformationtimeforduration(durationn) {
        let minutestest, secondstest;
        let duration = durationn
        minutestest = Math.floor(duration / 60);
        minutestest = (minutestest >= 10) ? minutestest : "0" + minutestest;
        secondstest = Math.floor(duration % 60);
        secondstest = (secondstest >= 10) ? secondstest : "0" + secondstest;
        let orginalydata = [minutestest, secondstest]
        dispatch(changedurationtimemusic(orginalydata))
    }

    /// ended music playing and retweet and random
    const endedmusicplaying = (e) => {
        switch (numberretweet) {
            case 1:
                musicplay.current.play()
                dispatch(changenumberretweetwithprops(0));
                break;
            case 2:
                musicplay.current.play()
                break;
            default:
                if (activerandom === true) {
                    dispatch(createnumberrandomforplay())
                } else gotonextmusic()
                break;
        }
    }

    const changeretweetvalue = () => {
        dispatch(changenumberretweet());
    }

    const changeactiverandom = () => {
        dispatch(changeactiverendom());
    }

    /// go to next and previos music
    const gotopreviosmusic = () => {
        dispatch(changevalueorplayorpausewithprops(false))
        musicplay.current.pause()
        if (activerandom === false) dispatch(lowoffnumberplaysonginplaylist(howplaylistisactive))
        else dispatch(createnumberrandomforplay())
        musicplay.current.addEventListener('ended', () => {
            musicplay.current.load()
            musicplay.current.play()
            dispatch(changevalueorplayorpausewithprops(true))
        })
    }

    const gotonextmusic = () => {
        musicplay.current.pause()
        dispatch(changevalueorplayorpausewithprops(false))
        if (activerandom === false) dispatch(addnumberplaysonginplaylist(howplaylistisactive))
        else dispatch(createnumberrandomforplay())
        musicplay.current.addEventListener('ended', () => {
            musicplay.current.load()
            musicplay.current.play()
            dispatch(changevalueorplayorpausewithprops(true))
        })
    }


    return (
        <>
            <div className={`grid grid-cols-12 bg-blackopacitylittle text-3xl text-white h-13/100 rounded-3xl border-grayprodark border-1 z-auto w-full backdrop-blur-sm`}>

                <div className="md:col-span-3 zero:col-span-2 flex items-center md:justify-start zero:justify-center cursor-pointer">
                    {/* <NavLink to={`/song/${linksongmusicplayingorplayed}`}> */}
                    <img src={imagemusicplayingorplayed === undefined ? "" : imagemusicplayingorplayed} width={55} height={55} className="rounded-lg mr-2 lg:ml-3 zere:ml-0" />
                    {/* </NavLink> */}
                    <div className="zero:hidden lg:block">
                        {/* <NavLink to={`/song/${linksongmusicplayingorplayed}`}> */}
                        <h3 className="text-base">{namemusicplayingorplayed.length >= 12 ? namemusicplayingorplayed.slice(0, 12) + ".." : namemusicplayingorplayed}</h3>
                        {/* </NavLink> */}
                        <NavLink to={`/artist/${linkartistmusicplayingorplayed}`}>
                            <h5 className="text-sm text-graypro">{artistmusicplayingorplayed.length >= 10 ? artistmusicplayingorplayed.slice(0, 10) + ".." : artistmusicplayingorplayed}</h5>
                        </NavLink>
                    </div>
                </div>

                <div className="flex flex-col md:col-span-7 zero:col-span-8 text-center">
                    <div className="flex items-center justify-center h-2/3">
                        <div className="py-3 px-3 md:mr-5 zero:mr-2">
                            {activerandom === false ?
                                <FontAwesomeIcon icon={faRandom} className={`block cursor-pointer text-sm hover:transition-all`} onClick={changeactiverandom}></FontAwesomeIcon> :
                                <FontAwesomeIcon icon={faRandom} className={`block cursor-pointer text-sm hover:transition-all`} color="#3369ff" onClick={changeactiverandom}></FontAwesomeIcon>
                            }
                        </div>
                        <div className="py-3 px-3 md:mr-5 zero:mr-2">
                            <FontAwesomeIcon icon={faStepBackward} className={`block cursor-pointer text-white text-sm`} onClick={gotopreviosmusic}></FontAwesomeIcon>
                        </div>
                        <div id="plauandpause" className="bg-bluepro rounded-full py-3 px-3 flex items-center justify-cetnter" onClick={playandpause}>
                            {durationtimemusic[0] !== "0NaN" && durationtimemusic[1] !== "0NaN" ?
                                <>
                                    {isplayorispause === true ?
                                        <FontAwesomeIcon icon={faPause} className={`cursor-pointer text-white text-sm`} />
                                        : <FontAwesomeIcon icon={faPlay} className={`cursor-pointer text-white text-sm`} />
                                    }
                                </> :
                                <div className="flex items-center">
                                    <ReactLoading type={"spin"} color="white" height={20} width={20} />
                                </div>
                            }
                            <audio ref={musicplay} onTimeUpdate={e => forupdatemusicplaying(e)} onEnded={e => endedmusicplaying(e)}>
                                <source src={soundmusicplayingorplayed} type="audio/x-m4a" />
                            </audio>
                        </div>
                        <div className="py-3 px-3 md:ml-5 zero:ml-2">
                            <FontAwesomeIcon icon={faStepForward} className={`block cursor-pointer text-white text-sm`} onClick={gotonextmusic}></FontAwesomeIcon>
                        </div>
                        <div className="py-3 px-3 md:ml-5 zero:ml-2">
                            {numberretweet === 0 ? <FontAwesomeIcon id="retweetoneplay" icon={faRetweet} className={`block cursor-pointer text-sm transition-all`} onClick={changeretweetvalue}></FontAwesomeIcon> : ""}
                            {numberretweet === 1 ? <>
                                <div className={`flex items-center justify-center h-3.5 w-4`}>
                                    <FontAwesomeIcon id="retweetoneplay" icon={faRetweet} color="#3369ff" className={`block cursor-pointer text-sm transition-all`} onClick={changeretweetvalue}></FontAwesomeIcon>
                                    <p className="text-white text-xs z-50 font-bold">1</p>
                                </div>
                            </> : ""}
                            {numberretweet === 2 ? <FontAwesomeIcon id="retweetoneplay" icon={faRetweet} color="#3369ff" className={`block cursor-pointer text-sm transition-all`} onClick={changeretweetvalue}></FontAwesomeIcon> : ""}
                        </div>
                    </div>

                    <div className="flex items-center h-1/3">
                        <div className={`flex items-center justify-center mr-3 mb-3`}>
                            <p className="text-xs">{currenttimemusic[0]}:</p>
                            <p className="text-xs">{currenttimemusic[1]}</p>
                        </div>
                        <div className="h-6 w-full mb-3 flex items-center">
                            <input type="range" name="progressbarmusic" step="0.1" max="100" defaultValue='0' className="progressbarmusic w-full h-1" ref={inputprofressbarmusic} onChange={handleProgressChange} onMouseDown={formousedownprogressbar} onMouseUp={formouseupprogressbar} />
                        </div>
                        <div className={` flex items-center justify-center ml-3 mb-3`}>
                            {durationtimemusic[0] !== "0NaN" && durationtimemusic[1] !== "0NaN" ?
                                <>
                                    <p className="text-xs">{durationtimemusic[0]}:</p>
                                    <p className="text-xs">{durationtimemusic[1]}</p>
                                </> :
                                <p className="text-xs">00:00</p>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-span-2 flex flex-col items-center justify-center">
                    <div className="flex w-full h-full items-center justify-end">
                        <FontAwesomeIcon icon={faClose} className="text-base cursor-pointer mr-5" onClick={closeandclearmusic}></FontAwesomeIcon>
                    </div>
                    <div className="flex h-full justify-center items-center">
                        <div className="group/item text-sm transition-all flex justify-center py-5">
                            <div className="hidden md:group-hover/item:block text-white absolute top-6 mr-3">
                                <input type="range" id="vol" name="vol" min="0" max="1" step="0.1" onChange={e => forchangevolume(e)} ref={inputrangevolume} className="h-1" />
                            </div>
                            {volumemusic === false ? <FontAwesomeIcon icon={faVolumeHigh} className={`cursor-pointer text-grayprolight text-sm mr-3`} onClick={forvolume} ></FontAwesomeIcon> : <FontAwesomeIcon icon={faVolumeXmark} className={`cursor-pointer text-bluepro text-sm mr-3`} onClick={forvolume} ></FontAwesomeIcon>
                            }
                        </div>
                        <FontAwesomeIcon icon={faHeart} className={`cursor-pointer text-grayprolight text-sm mr-3`} ></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Musicplayercontrol