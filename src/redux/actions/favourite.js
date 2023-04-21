import { addpageplayedmusic, chagenecurrenttimelikedmusicfotmusicplayer, changeactiverendomwithprops, changevalueorplayorpause, changevalueorplayorpausewithprops, changevolumemusicwithprops, findindexmusic, initialseforclosemusiccontrol } from "./forplayermusic";

export const addedtracksfavourite = (result, namepagemusc, currenttimeliked) => {
    return async (dispatch, getState) => {
        if (currenttimeliked !== undefined || currenttimeliked.length !== 0 || currenttimeliked !== null) {
            await dispatch(chagenecurrenttimelikedmusicfotmusicplayer(currenttimeliked))
        }

        const pagemusicplayed = [...getState().playlistpagesongorginalyfake];
        const playlisttopsongartist = [...getState().playlisttopsongartist]
        const plylistcharttopmusic = [...getState().plylistcharttopmusic]
        const playlistalbumpage = [...getState().playlistalbumpage]
        const playlisttrackschartforcountrie = [...getState().playlisttrackschartforcountrie]
        const playlistfavouritetracks = [...getState().playlistfavouritetracks]
        const plylisttrendmusic = getState().plylisttrendmusic
        const listtopmusicforcountriecahrts = [...getState().listtopmusicforcountriecahrts]
        const backupdetailsalbumsforplaylist = [...getState().backupdetailsalbumsforplaylist]
        const tracksfavourite = getState().tracksfavourite.tracks

        switch (namepagemusc) {
            case "song":
                const findindex = pagemusicplayed.findIndex(o => o.namesong === result.namesong)
                const access = pagemusicplayed[findindex]
                access.like = true
                const copypagemusicplayed = [...pagemusicplayed];
                copypagemusicplayed[findindex] = access;
                await dispatch({ type: 'SET_PLAYLIST_SONGS_ORGINALY_FAKE', payload: copypagemusicplayed });
                await dispatch({ type: "ADD_PAGEPLAYEDMUSIC", payload: copypagemusicplayed })
                break;
            case "trendmusichome":
                const findindexsongtrend = plylisttrendmusic.findIndex(o => o.namesong === result.namesong)
                const accesssongtrend = plylisttrendmusic[findindexsongtrend]
                accesssongtrend.like = true
                const copypagemusicplayedsongtrend = [...plylisttrendmusic];
                copypagemusicplayedsongtrend[findindexsongtrend] = accesssongtrend;
                await dispatch({ type: 'INITIALIZE_PLAYLISTTRENDMUSIC', payload: copypagemusicplayedsongtrend });
                await dispatch({ type: "ADD_PAGEPLAYEDMUSIC", payload: copypagemusicplayedsongtrend })
                break;
            case "charthome":
                const findindexcharthome = plylistcharttopmusic.findIndex(o => o.namesong === result.namesong)
                const accessaccess = plylistcharttopmusic[findindexcharthome]
                accessaccess.like = true
                const copypagemusicplayedcharthome = [...plylistcharttopmusic];
                copypagemusicplayedcharthome[findindexcharthome] = accessaccess;
                await dispatch({ type: 'INITIALIZE_PLAYLISTCHARTTOPMUSIC', payload: copypagemusicplayedcharthome });
                await dispatch({ type: "ADD_PAGEPLAYEDMUSIC", payload: copypagemusicplayedcharthome })
                break;
            case "artist":
                const findindexartist = playlisttopsongartist.findIndex(o => o.namesong === result.namesong)
                const accessartist = playlisttopsongartist[findindexartist]
                accessartist.like = true
                const copypagemusicplayedartist = [...playlisttopsongartist];
                copypagemusicplayedartist[findindexartist] = accessartist;
                await dispatch({ type: 'INITIALIZE_PLAYLISTTOPSONGMUSIC', payload: copypagemusicplayedartist });
                await dispatch({ type: "ADD_PAGEPLAYEDMUSIC", payload: copypagemusicplayedartist })
                break;
            case "albume":
                if (playlistalbumpage.length !== 0) {
                    const findindexalbume = playlistalbumpage.findIndex(o => o.namesong === result.namesong)
                    const accessalbume = playlistalbumpage[findindexalbume]
                    accessalbume.like = true
                    const copypagemusicplayedalbume = [...playlistalbumpage];
                    copypagemusicplayedalbume[findindexalbume] = accessalbume;
                    await dispatch({ type: 'INITIALIZE_PLAYLISTALBUMPAGE', payload: copypagemusicplayedalbume });
                    await dispatch({ type: "ADD_PAGEPLAYEDMUSIC", payload: copypagemusicplayedalbume })
                }
                const findindexalbumeorginaly = backupdetailsalbumsforplaylist[0].findIndex(o => o.namesong === result.namesong)
                const accessalbumeorginaly = backupdetailsalbumsforplaylist[0][findindexalbumeorginaly]
                accessalbumeorginaly.like = true
                const copypagemusicplayedalbumeorginaly = [...backupdetailsalbumsforplaylist[0]];
                copypagemusicplayedalbumeorginaly[findindexalbumeorginaly] = accessalbumeorginaly;
                await dispatch({ type: 'INITIALIZE_BACKUPDETAILSALBUMSFORPLAYLIST', payload: [copypagemusicplayedalbumeorginaly] });
                break;
            case "chartinpagechart":
                if (playlisttrackschartforcountrie.length !== 0) {
                    const findindexchartinpagechart = playlisttrackschartforcountrie.findIndex(o => o.namesong === result.namesong)
                    const accesschartinpagechart = playlisttrackschartforcountrie[findindexchartinpagechart]
                    accesschartinpagechart.like = true
                    const copypagemusicplayedchartinpagechart = [...playlisttrackschartforcountrie];
                    copypagemusicplayedchartinpagechart[findindexchartinpagechart] = accesschartinpagechart;
                    await dispatch({ type: 'INITIALIZE_PLAYLISTTRACKSCHARTFORCOUNTRIE', payload: copypagemusicplayedchartinpagechart });
                    await dispatch({ type: "ADD_PAGEPLAYEDMUSIC", payload: copypagemusicplayedchartinpagechart })
                }
                const findindexcharthomeorginaly = listtopmusicforcountriecahrts[0].findIndex(o => o.namesong === result.namesong)
                const accessaccessorginaly = listtopmusicforcountriecahrts[0][findindexcharthomeorginaly]
                accessaccessorginaly.like = true
                const copypagemusicplayedcharthomeorginaly = [...listtopmusicforcountriecahrts[0]];
                copypagemusicplayedcharthomeorginaly[findindexcharthomeorginaly] = accessaccessorginaly;
                await dispatch({ type: 'INITIALIZELISTTOPMUSICFORCOUNTRIECHATS', payload: [copypagemusicplayedcharthomeorginaly] });
                break;
            case "favourite":
                const findindexfavourite = playlistfavouritetracks.findIndex(o => o.namesong === result.namesong)
                const accessfavourite = playlistfavouritetracks[findindexfavourite]
                accessfavourite.like = true
                const copypagemusicplayedfavourite = [...playlistfavouritetracks];
                copypagemusicplayedfavourite[findindexfavourite] = accessfavourite;
                await dispatch({ type: 'INITIALIZE_PLAYLISTFAVOURITETRACKS', payload: copypagemusicplayedfavourite });
                await dispatch({ type: "ADD_PAGEPLAYEDMUSIC", payload: copypagemusicplayedfavourite })
                break;
            default:
                break;
        }

        const validationinstateyesorno = tracksfavourite.findIndex(o => o.namesong === result.namesong)
        if (validationinstateyesorno === -1)
            await dispatch({ type: "ADDED_TRACKSFAVOURITE", payload: result })
    }
}

export const deletedtracksfavourite = (namesongsended, namepagemusc, currenttimeliked) => {
    return async (dispatch, getState) => {
        if (currenttimeliked !== undefined || currenttimeliked.length !== 0 || currenttimeliked !== null) {
            await dispatch(chagenecurrenttimelikedmusicfotmusicplayer(currenttimeliked))
        }

        const pagemusicplayed = [...getState().playlistpagesongorginalyfake];
        const playlisttopsongartist = [...getState().playlisttopsongartist]
        const plylistcharttopmusic = [...getState().plylistcharttopmusic]
        const playlistalbumpage = [...getState().playlistalbumpage]
        const listtopmusicforcountriecahrts = [...getState().listtopmusicforcountriecahrts]
        const backupdetailsalbumsforplaylist = [...getState().backupdetailsalbumsforplaylist]
        const playlisttrackschartforcountrie = [...getState().playlisttrackschartforcountrie]
        const playlistfavouritetracks = [...getState().playlistfavouritetracks]
        const plylisttrendmusic = getState().plylisttrendmusic

        switch (namepagemusc) {
            case "song":
                const findindexsong = pagemusicplayed.findIndex(o => o.namesong === namesongsended)
                const accesssong = pagemusicplayed[findindexsong]
                accesssong.like = false
                const copypagemusicplayedsong = [...pagemusicplayed];
                copypagemusicplayedsong[findindexsong] = accesssong;
                await dispatch({ type: 'SET_PLAYLIST_SONGS_ORGINALY_FAKE', payload: copypagemusicplayedsong });
                await dispatch({ type: "ADD_PAGEPLAYEDMUSIC", payload: copypagemusicplayedsong })
                break;
            case "trendmusichome":
                const findindexsongtrend = plylisttrendmusic.findIndex(o => o.namesong === namesongsended)
                const accesssongtrend = plylisttrendmusic[findindexsongtrend]
                accesssongtrend.like = false
                const copypagemusicplayedsongtrend = [...plylisttrendmusic];
                copypagemusicplayedsongtrend[findindexsongtrend] = accesssongtrend;
                await dispatch({ type: 'INITIALIZE_PLAYLISTTRENDMUSIC', payload: copypagemusicplayedsongtrend });
                await dispatch({ type: "ADD_PAGEPLAYEDMUSIC", payload: copypagemusicplayedsongtrend })
                break;
            case "charthome":
                const findindexcharthome = plylistcharttopmusic.findIndex(o => o.namesong === namesongsended)
                const accessaccess = plylistcharttopmusic[findindexcharthome]
                accessaccess.like = false
                const copypagemusicplayedcharthome = [...plylistcharttopmusic];
                copypagemusicplayedcharthome[findindexcharthome] = accessaccess;
                await dispatch({ type: 'INITIALIZE_PLAYLISTCHARTTOPMUSIC', payload: copypagemusicplayedcharthome });
                await dispatch({ type: "ADD_PAGEPLAYEDMUSIC", payload: copypagemusicplayedcharthome })
                break;
            case "artist":
                const findindexartist = playlisttopsongartist.findIndex(o => o.namesong === namesongsended)
                const accessartist = playlisttopsongartist[findindexartist]
                accessartist.like = false
                const copypagemusicplayedartist = [...playlisttopsongartist];
                copypagemusicplayedartist[findindexartist] = accessartist;
                await dispatch({ type: 'INITIALIZE_PLAYLISTTOPSONGMUSIC', payload: copypagemusicplayedartist });
                await dispatch({ type: "ADD_PAGEPLAYEDMUSIC", payload: copypagemusicplayedartist })
                break;
            case "albume":
                if (playlistalbumpage.length !== 0) {
                    const findindexalbume = playlistalbumpage.findIndex(o => o.namesong === namesongsended)
                    const accessalbume = playlistalbumpage[findindexalbume]
                    accessalbume.like = false
                    const copypagemusicplayedalbume = [...playlistalbumpage];
                    copypagemusicplayedalbume[findindexalbume] = accessalbume;
                    await dispatch({ type: 'INITIALIZE_PLAYLISTALBUMPAGE', payload: copypagemusicplayedalbume });
                    await dispatch({ type: "ADD_PAGEPLAYEDMUSIC", payload: copypagemusicplayedalbume })
                }
                const findindexalbumeorginaly = backupdetailsalbumsforplaylist[0].findIndex(o => o.namesong === namesongsended)
                const accessalbumeorginaly = backupdetailsalbumsforplaylist[0][findindexalbumeorginaly]
                accessalbumeorginaly.like = false
                const copypagemusicplayedalbumeorginaly = [...backupdetailsalbumsforplaylist[0]];
                copypagemusicplayedalbumeorginaly[findindexalbumeorginaly] = accessalbumeorginaly;
                await dispatch({ type: 'INITIALIZE_BACKUPDETAILSALBUMSFORPLAYLIST', payload: [copypagemusicplayedalbumeorginaly] });
                break;
            case "chartinpagechart":
                if (playlisttrackschartforcountrie.length !== 0) {
                    const findindexchartinpagechart = playlisttrackschartforcountrie.findIndex(o => o.namesong === namesongsended)
                    const accesschartinpagechart = playlisttrackschartforcountrie[findindexchartinpagechart]
                    accesschartinpagechart.like = false
                    const copypagemusicplayedchartinpagechart = [...playlisttrackschartforcountrie];
                    copypagemusicplayedchartinpagechart[findindexchartinpagechart] = accesschartinpagechart;
                    await dispatch({ type: 'INITIALIZE_PLAYLISTTRACKSCHARTFORCOUNTRIE', payload: copypagemusicplayedchartinpagechart });
                    await dispatch({ type: "ADD_PAGEPLAYEDMUSIC", payload: copypagemusicplayedchartinpagechart })
                }
                const findindexcharthomeorginaly = listtopmusicforcountriecahrts[0].findIndex(o => o.namesong === namesongsended)
                const accessaccessorginaly = listtopmusicforcountriecahrts[0][findindexcharthomeorginaly]
                accessaccessorginaly.like = false
                const copypagemusicplayedcharthomeorginaly = [...listtopmusicforcountriecahrts[0]];
                copypagemusicplayedcharthomeorginaly[findindexcharthomeorginaly] = accessaccessorginaly;
                await dispatch({ type: 'INITIALIZELISTTOPMUSICFORCOUNTRIECHATS', payload: [copypagemusicplayedcharthomeorginaly] });
                break;
            case "favourite":
                const findindexfavourite = playlistfavouritetracks.findIndex(o => o.namesong === namesongsended)
                const accessfavourite = playlistfavouritetracks[findindexfavourite]
                accessfavourite.like = false
                const copypagemusicplayedfavourite = [...playlistfavouritetracks];
                copypagemusicplayedfavourite[findindexfavourite] = accessfavourite;
                await dispatch({ type: 'INITIALIZE_PLAYLISTFAVOURITETRACKS', payload: copypagemusicplayedfavourite });
                await dispatch({ type: "ADD_PAGEPLAYEDMUSIC", payload: copypagemusicplayedfavourite })
                break;
            default:
                break;
        }

        const copystate = [...getState().tracksfavourite.tracks];
        const indexToRemove = copystate.findIndex(item => item.namesong === namesongsended);
        if (indexToRemove !== -1)
            copystate.splice(indexToRemove, 1);
        await dispatch({ type: "DELETEED_TRACKSFAVOURITE", payload: copystate });
    }
}

export const initializeplaylistfavouritetracks = (playlistfavouritetracks) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZE_PLAYLISTFAVOURITETRACKS", payload: playlistfavouritetracks })
    }
}

export const playlistfavouritetrackspage = (value, namemusic) => {
    return (dispatch) => {
        if (localStorage.getItem("namemusicplayingorplayed") === namemusic) {
            dispatch(changevalueorplayorpause())
        } else {
            dispatch(initialseforclosemusiccontrol(true))
            dispatch(changevalueorplayorpausewithprops(true))
            dispatch(changevolumemusicwithprops(false))
            dispatch(changeactiverendomwithprops(false))
            dispatch(findindexmusic(namemusic, value))
            dispatch(initializeplaylistfavouritetracks(value));
            dispatch(addpageplayedmusic(value))
        }
    }
}