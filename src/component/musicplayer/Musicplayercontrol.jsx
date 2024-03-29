import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from 'react-loading';
import { faVolumeHigh, faVolumeXmark, faClose } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { addnumberplaysonginplaylist, chagenecurrenttimelikedmusicfotmusicplayer, changeactiverendom, changeactiverendomwithprops, changecurrenttimemusic, changedurationtimemusic, changeismusicwaiting, changemousedown, changenumberretweet, changenumberretweetwithprops, changevalueorplayorpause, changevalueorplayorpausewithprops, changevolumemusic, changevolumemusicwithprops, createnumberrandomforplay, initialseforclosemusiccontrol, lowoffnumberplaysonginplaylist } from "../../redux/actions/forplayermusic";
import { initializeplaylistalbumpage } from "../../redux/actions/albums";
import { initializeplaylisttopsongmusicartistpage } from "../../redux/actions/artist";
import { initializeplaylistcharttopmusic, initializeplaylisttrendmusic } from "../../redux/actions/homepage";
import { initializeplaylisttrackschartforcountrie } from "../../redux/actions/charts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPause, faPlay, faRandom, faRetweet, faStepBackward, faStepForward } from "@fortawesome/fontawesome-free-solid";
import { addedtracksfavourite, deletedtracksfavourite } from "../../redux/actions/favourite";

const Musicplayercontrol = () => {

    const dispatch = useDispatch()

    const playlistpagesongfake = useSelector(state => state.playlistpagesongorginalyfake)
    const plylisttrendmusic = useSelector(state => state.plylisttrendmusic)
    const plylistcharttopmusic = useSelector(state => state.plylistcharttopmusic)
    const playlisttopsongartist = useSelector(state => state.playlisttopsongartist)
    const playlistalbumpage = useSelector(state => state.playlistalbumpage)
    const playlisttrackschartforcountrie = useSelector(state => state.playlisttrackschartforcountrie)
    const playlistfavouritetracks = useSelector(state => state.playlistfavouritetracks)
    const numberplaysonginplaylist = useSelector(state => state.numberplaysonginplaylist)
    const howplaylistisactive = useSelector(state => state.howpageplayedmusic)

    const ismusicwaiting = useSelector(state => state.ismusicwaiting)
    const isplayorispause = useSelector(state => state.isplayorispause)
    const volumemusic = useSelector(state => state.volumemusic)
    const currenttimemusic = useSelector(state => state.currenttimemusic)
    const durationtimemusic = useSelector(state => state.durationtimemusic)
    const activerandom = useSelector(state => state.activerandom)
    const numberretweet = useSelector(state => state.numberretweet)
    const mouseDownOnSlider = useSelector(state => state.mouseDownOnSlider);
    const currenttimelikedmusicformusicplayer = useSelector(state => state.currenttimelikedmusicformusicplayer);

    let musicplay = useRef(null)
    let inputrangevolume = useRef(null)
    let inputprofressbarmusic = useRef(null)

    let namemusicplayingorplayed, artistmusicplayingorplayed, imagemusicplayingorplayed, soundmusicplayingorplayed, linksongmusicplayingorplayed, linkartistmusicplayingorplayed, likemusic, namepagemusicplayed = ''


    if (howplaylistisactive === playlistpagesongfake) {
        namemusicplayingorplayed = playlistpagesongfake[numberplaysonginplaylist].namesong
        artistmusicplayingorplayed = playlistpagesongfake[numberplaysonginplaylist].nameartist
        imagemusicplayingorplayed = playlistpagesongfake[numberplaysonginplaylist].imagesong
        soundmusicplayingorplayed = playlistpagesongfake[numberplaysonginplaylist].soundsong
        linksongmusicplayingorplayed = playlistpagesongfake[numberplaysonginplaylist].linkpagesong
        linkartistmusicplayingorplayed = playlistpagesongfake[numberplaysonginplaylist].linkpageartist
        likemusic = playlistpagesongfake[numberplaysonginplaylist].like
        namepagemusicplayed = "song"
    }

    if (howplaylistisactive === plylisttrendmusic) {
        namemusicplayingorplayed = plylisttrendmusic[0].namesong
        artistmusicplayingorplayed = plylisttrendmusic[0].nameartist
        imagemusicplayingorplayed = plylisttrendmusic[0].imagesong
        soundmusicplayingorplayed = plylisttrendmusic[0].soundsong
        linksongmusicplayingorplayed = plylisttrendmusic[0].linkpagesong
        linkartistmusicplayingorplayed = plylisttrendmusic[0].linkpageartist
        likemusic = plylisttrendmusic[0].like
        namepagemusicplayed = "trendmusichome"
    }

    if (howplaylistisactive === plylistcharttopmusic) {
        namemusicplayingorplayed = plylistcharttopmusic[numberplaysonginplaylist].namesong
        artistmusicplayingorplayed = plylistcharttopmusic[numberplaysonginplaylist].nameartist
        imagemusicplayingorplayed = plylistcharttopmusic[numberplaysonginplaylist].imagesong
        soundmusicplayingorplayed = plylistcharttopmusic[numberplaysonginplaylist].soundsong
        linksongmusicplayingorplayed = plylistcharttopmusic[numberplaysonginplaylist].linkpagesong
        linkartistmusicplayingorplayed = plylistcharttopmusic[numberplaysonginplaylist].linkpageartist
        likemusic = plylistcharttopmusic[numberplaysonginplaylist].like
        namepagemusicplayed = "charthome"
    }

    if (howplaylistisactive === playlisttopsongartist) {
        namemusicplayingorplayed = playlisttopsongartist[numberplaysonginplaylist].namesong
        artistmusicplayingorplayed = playlisttopsongartist[numberplaysonginplaylist].nameartist
        imagemusicplayingorplayed = playlisttopsongartist[numberplaysonginplaylist].imagesong
        soundmusicplayingorplayed = playlisttopsongartist[numberplaysonginplaylist].soundsong
        linksongmusicplayingorplayed = playlisttopsongartist[numberplaysonginplaylist].linkpagesong
        linkartistmusicplayingorplayed = playlisttopsongartist[numberplaysonginplaylist].linkpageartist
        likemusic = playlisttopsongartist[numberplaysonginplaylist].like
        namepagemusicplayed = "artist"
    }

    if (howplaylistisactive === playlistalbumpage) {
        namemusicplayingorplayed = playlistalbumpage[numberplaysonginplaylist].namesong
        artistmusicplayingorplayed = playlistalbumpage[numberplaysonginplaylist].nameartist
        imagemusicplayingorplayed = playlistalbumpage[numberplaysonginplaylist].imagesong
        soundmusicplayingorplayed = playlistalbumpage[numberplaysonginplaylist].soundsong
        linksongmusicplayingorplayed = playlistalbumpage[numberplaysonginplaylist].linkpagesong
        linkartistmusicplayingorplayed = playlistalbumpage[numberplaysonginplaylist].linkpageartist
        likemusic = playlistalbumpage[numberplaysonginplaylist].like
        namepagemusicplayed = "albume"
    }

    if (howplaylistisactive === playlisttrackschartforcountrie) {
        namemusicplayingorplayed = playlisttrackschartforcountrie[numberplaysonginplaylist].namesong
        artistmusicplayingorplayed = playlisttrackschartforcountrie[numberplaysonginplaylist].nameartist
        imagemusicplayingorplayed = playlisttrackschartforcountrie[numberplaysonginplaylist].imagesong
        soundmusicplayingorplayed = playlisttrackschartforcountrie[numberplaysonginplaylist].soundsong
        linksongmusicplayingorplayed = playlisttrackschartforcountrie[numberplaysonginplaylist].linkpagesong
        linkartistmusicplayingorplayed = playlisttrackschartforcountrie[numberplaysonginplaylist].linkpageartist
        likemusic = playlisttrackschartforcountrie[numberplaysonginplaylist].like
        namepagemusicplayed = "chartinpagechart"
    }

    if (howplaylistisactive === playlistfavouritetracks) {
        if (playlistfavouritetracks.length === 1) {
            namemusicplayingorplayed = playlistfavouritetracks[0].namesong
            artistmusicplayingorplayed = playlistfavouritetracks[0].nameartist
            imagemusicplayingorplayed = playlistfavouritetracks[0].imagesong
            soundmusicplayingorplayed = playlistfavouritetracks[0].soundsong
            linksongmusicplayingorplayed = playlistfavouritetracks[0].linkpagesong
            linkartistmusicplayingorplayed = playlistfavouritetracks[0].linkpageartist
            likemusic = playlistfavouritetracks[0].like
            namepagemusicplayed = "favourite"
        } else {
            namemusicplayingorplayed = playlistfavouritetracks[numberplaysonginplaylist].namesong
            artistmusicplayingorplayed = playlistfavouritetracks[numberplaysonginplaylist].nameartist
            imagemusicplayingorplayed = playlistfavouritetracks[numberplaysonginplaylist].imagesong
            soundmusicplayingorplayed = playlistfavouritetracks[numberplaysonginplaylist].soundsong
            linksongmusicplayingorplayed = playlistfavouritetracks[numberplaysonginplaylist].linkpagesong
            linkartistmusicplayingorplayed = playlistfavouritetracks[numberplaysonginplaylist].linkpageartist
            likemusic = playlistfavouritetracks[numberplaysonginplaylist].like
            namepagemusicplayed = "favourite"
        }
    }

    /// play and pause 
    const playandpause = () => {
        dispatch(changevalueorplayorpause())
    }

    useEffect(() => {
        if (isplayorispause === true) musicplay.current.play()
        else musicplay.current.pause()
        localStorage.setItem("namemusicplayingorplayed", namemusicplayingorplayed)
        localStorage.setItem("artistmusicplayingorplayed", artistmusicplayingorplayed)
    }, [isplayorispause])

    useEffect(() => {
        if (currenttimelikedmusicformusicplayer !== 0) {
            musicplay.current.currentTime = currenttimelikedmusicformusicplayer
        } else {
            dispatch(changevalueorplayorpausewithprops(false))
            if (soundmusicplayingorplayed.length >= 1 && soundmusicplayingorplayed !== undefined && soundmusicplayingorplayed !== '') {
                musicplay.current.pause()
                musicplay.current.load()
                musicplay.current.play()
            }
            dispatch(changevalueorplayorpausewithprops(true))
            localStorage.setItem("namemusicplayingorplayed", namemusicplayingorplayed)
            localStorage.setItem("artistmusicplayingorplayed", artistmusicplayingorplayed)
        }
    }, [howplaylistisactive])

    useEffect(() => {
        dispatch(chagenecurrenttimelikedmusicfotmusicplayer(0))
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
        dispatch(changedurationtimemusic([]))
        /// clear playlist
        dispatch({ type: 'SET_PLAYLIST_SONGS_ORGINALY_FAKE', payload: '' });
        dispatch(initializeplaylisttrendmusic(""))
        dispatch(initializeplaylistcharttopmusic(""))
        dispatch(initializeplaylisttopsongmusicartistpage(""))
        dispatch(initializeplaylistalbumpage(""))
        dispatch(initializeplaylisttrackschartforcountrie(""))
        dispatch(chagenecurrenttimelikedmusicfotmusicplayer(0))
        ///
        musicplay.current.pause()
        musicplay.current.load()
        localStorage.removeItem("namemusicplayingorplayed")
        localStorage.removeItem("artistmusicplayingorplayed")
        localStorage.removeItem("currenttimemusicplaying")
        // localStorage.removeItem("whichplayinginalbume")
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
        dispatch(changeismusicwaiting(false))
        if (!mouseDownOnSlider) {
            inputprofressbarmusic.current.value = musicplay.current.currentTime / musicplay.current.duration * 100;
        }
        transformationtimeforcurrenttime(e.target.currentTime)
        transformationtimeforduration(e.target.duration)
        localStorage.setItem("namemusicplayingorplayed", namemusicplayingorplayed)
        localStorage.setItem("artistmusicplayingorplayed", artistmusicplayingorplayed)
        localStorage.setItem("currenttimemusicplaying", musicplay.current.currentTime)
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
    const endedmusicplaying = () => {
        dispatch(chagenecurrenttimelikedmusicfotmusicplayer(0))
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
        dispatch(chagenecurrenttimelikedmusicfotmusicplayer(0))
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
        dispatch(chagenecurrenttimelikedmusicfotmusicplayer(0))
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

    /// add or delete track in favourite list

    const adddordeletetofavoutirelist = () => {
        if (likemusic === true) {
            dispatch(deletedtracksfavourite(namemusicplayingorplayed, namepagemusicplayed, localStorage.getItem("currenttimemusicplaying")))
        } else {
            const newtrackfavourite = {
                namesong: namemusicplayingorplayed,
                nameartist: artistmusicplayingorplayed,
                imagesong: imagemusicplayingorplayed,
                soundsong: soundmusicplayingorplayed,
                linkpagesong: linksongmusicplayingorplayed,
                linkpageartist: linkartistmusicplayingorplayed,
                like: true,
            }
            dispatch(addedtracksfavourite(newtrackfavourite, namepagemusicplayed, localStorage.getItem("currenttimemusicplaying")))
        }
    }

    /// set details tracks playing in MediaMetadata browsing

    const metadata = new MediaMetadata({
        title: namemusicplayingorplayed,
        artist: artistmusicplayingorplayed,
        artwork: [
            { src: imagemusicplayingorplayed, sizes: '512x512', type: 'image/png' },
        ]
    });
    navigator.mediaSession.metadata = metadata;
    navigator.mediaSession.setActionHandler("nexttrack", () => gotonextmusic());
    navigator.mediaSession.setActionHandler("previoustrack", () => gotopreviosmusic());
    navigator.mediaSession.setActionHandler("seekto", () => musicplay.current.currentTime -= 10);
    navigator.mediaSession.setActionHandler("seekbackward", (details) => {
        const skipTime = details.seekOffset || 5;
        musicplay.current.currentTime = Math.max(musicplay.current.currentTime - skipTime, 0);
        updatePositionState();
    });
    navigator.mediaSession.setActionHandler("seekforward", (details) => {
        const skipTime = details.seekOffset || 5;
        musicplay.current.currentTime = Math.max(musicplay.current.currentTime + skipTime, 0);
        updatePositionState();
    });
    function updatePositionState() {
        navigator.mediaSession.setPositionState({
            duration: musicplay.current.duration,
            playbackRate: musicplay.current.playbackRate,
            position: musicplay.current.currentTime,
        });
    }

    return (
        <>
            <div className={`grid grid-cols-12 bg-blackopacitylittle text-3xl text-white h-fit rounded-3xl border-grayprodark border-1 z-40 w-full backdrop-blur-sm`}>

                <div className="md:col-span-3 zero:col-span-2 flex items-center md:justify-start zero:justify-center cursor-pointer">
                    {linksongmusicplayingorplayed !== undefined && linksongmusicplayingorplayed.length !== 0 ? <NavLink to={`/song/${linksongmusicplayingorplayed}`}>
                        <img src={imagemusicplayingorplayed === undefined ? "" : imagemusicplayingorplayed} width={55} height={55} alt={`cover ${namemusicplayingorplayed}`} className="rounded-lg mr-2 lg:ml-3 zere:ml-2" />
                    </NavLink> : <img src={imagemusicplayingorplayed === undefined ? "" : imagemusicplayingorplayed} width={55} height={55} alt={`cover ${namemusicplayingorplayed}`} className="rounded-lg mr-2 lg:ml-3 zere:ml-0" />}

                    <div className="zero:hidden md:block">
                        {linksongmusicplayingorplayed !== undefined && linksongmusicplayingorplayed.length !== 0 ? <NavLink to={`/song/${linksongmusicplayingorplayed}`}>
                            <h3 className="text-base">{namemusicplayingorplayed.length >= 12 ? namemusicplayingorplayed.slice(0, 12) + ".." : namemusicplayingorplayed}</h3>
                        </NavLink> : <h3 className="text-base">{namemusicplayingorplayed.length >= 12 ? namemusicplayingorplayed.slice(0, 12) + ".." : namemusicplayingorplayed}</h3>}
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
                                    {ismusicwaiting === false ?
                                        <>
                                            {isplayorispause === true ?
                                                <FontAwesomeIcon icon={faPause} className={`cursor-pointer text-white text-sm`} />
                                                : <FontAwesomeIcon icon={faPlay} className={`cursor-pointer text-white text-sm`} />
                                            }
                                        </>
                                        : <div className="flex items-center">
                                            <ReactLoading type={"spin"} color="white" height={15} width={15} />
                                        </div>
                                    }
                                </>
                                : <div className="flex items-center">
                                    <ReactLoading type={"spin"} color="white" height={15} width={15} />
                                </div>
                            }
                            <audio ref={musicplay} onTimeUpdate={e => forupdatemusicplaying(e)} onEnded={e => endedmusicplaying(e)} onWaiting={() => dispatch(changeismusicwaiting(true))}>
                                <source src={soundmusicplayingorplayed} type="audio/x-m4a" />
                            </audio>
                        </div>
                        <div>
                            <meta name="artist" content={artistmusicplayingorplayed} />
                            <meta name="title" content={namemusicplayingorplayed} />
                        </div>
                        <div className="py-3 px-3 md:ml-5 zero:ml-2">
                            <FontAwesomeIcon icon={faStepForward} className={`block cursor-pointer text-white text-sm`} onClick={gotonextmusic}></FontAwesomeIcon>
                        </div>
                        <div className="py-3 px-3 md:ml-5 zero:ml-2">
                            {numberretweet === 0 ? <FontAwesomeIcon id="retweetoneplay" icon={faRetweet} className={`block cursor-pointer text-sm transition-all`} onClick={changeretweetvalue}></FontAwesomeIcon> : ""}
                            {numberretweet === 1 ? <>
                                <div className={`flex items-center justify-center h-3.5 w-4`}>
                                    <FontAwesomeIcon id="retweetoneplay" icon={faRetweet} color="#3369ff" className={`block cursor-pointer text-sm transition-all`} onClick={changeretweetvalue}></FontAwesomeIcon>
                                    <p className="text-white text-xs z-40 font-bold">1</p>
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
                        {likemusic === true ? <FontAwesomeIcon icon={faHeart} className={`cursor-pointer text-bluepro text-sm mr-3`} onClick={adddordeletetofavoutirelist}></FontAwesomeIcon> : <FontAwesomeIcon icon={faHeart} className={`cursor-pointer text-grayprolight text-sm mr-3`} onClick={adddordeletetofavoutirelist}></FontAwesomeIcon>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Musicplayercontrol