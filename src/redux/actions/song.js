import { addpageplayedmusic, changeactiverendomwithprops, changevalueorplayorpause, changevalueorplayorpausewithprops, changevolumemusicwithprops, findindexmusic, initialseforclosemusiccontrol } from "./forplayermusic"
import { initializeplaylistcharttopmusic, initializeplaylisttrendmusic } from "./homepage"

export const initializesong = (songalldetail) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZESONG", payload: songalldetail })
    }
}

export const initializecountsong = (countplaysong) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZECOUNTPLAYSONG", payload: countplaysong })
    }
}

export const initializetopsong = (topsong) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZETOPSONG", payload: topsong })
    }
}

export const changeshowtopsongorno = (value) => {
    return async (dispatch) => {
        await dispatch({ type: "CHANGE_SHOWTOPSONGORNO", payload: value })
    }
}

export const initializesimilarsong = (similarsong) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZESIMILARSONG", payload: similarsong })
    }
}

export const initializelittlesimilarsong = (similarsongg) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZELITTLESIMILARSONG", payload: similarsongg })
    }
}

export const changeshowsimilarsongorno = (value) => {
    return async (dispatch) => {
        await dispatch({ type: "CHANGE_SHOWSIMILARSONGORNO", payload: value })
    }
}

export const initializeplaylistpagesongorginalysorginaly = () => {
    return async (dispatch, getState) => {
        const songalldetails = getState().songselected
        const songsobject = {
            namesong: songalldetails.title,
            nameartist: songalldetails.subtitle,
            imagesong: songalldetails.images.coverart,
            soundsong: songalldetails.hub.actions.slice(1, 2).map(o => o.uri)[0],
            linkpagesong: songalldetails.key,
            linkpageartist: songalldetails.artists.map(o => o.adamid)[0],
            like: false
        }
        await dispatch({ type: 'SET_PLAYLIST_SONGS_ORGINALY', payload: songsobject });
    }
}

export const addsonginplaysitsongorginaly = (topsongs) => {
    return async (dispatch, getState) => {
        const songsArray = topsongs.data.map((song) => {
            return {
                namesong: song.attributes.name,
                nameartist: song.attributes.artistName,
                imagesong: song.attributes.artwork.url.slice(0, song.attributes.artwork.url.length - 13) + song.attributes.artwork.width + "x" + song.attributes.artwork.height + "bb.jpg",
                soundsong: song.attributes.previews.map((previews) => previews.url)[0],
                linkpagesong: "",
                linkpageartist: getState().songselected.artists.map(o => o.adamid)[0],
                like: false
            };
        });
        await dispatch({ type: 'ADD_SONGS_TO_PLAYLIST_ORGINALY', payload: [songsArray] });
    }
}

export const setplaylistsongsotginalyfake = (value, namemusic) => {
    return (dispatch) => {
        initializeplaylistcharttopmusic([])
        initializeplaylisttrendmusic([])
        if (localStorage.getItem("namemusicplayingorplayed") === namemusic) {
            dispatch(changevalueorplayorpause())
        } else {
            dispatch(initialseforclosemusiccontrol(true))
            dispatch(changevalueorplayorpausewithprops(true))
            dispatch(changevolumemusicwithprops(false))
            dispatch(changeactiverendomwithprops(false))
            dispatch(findindexmusic(namemusic, value))
            dispatch({ type: 'SET_PLAYLIST_SONGS_ORGINALY_FAKE', payload: value });
            dispatch(addpageplayedmusic(value))

        }
    }
}

/////
export const changeovervieworlyrics = (result) => {
    return async dispatch => {
        await dispatch({ type: "CHANGEOVERVIEWORLYRICS", payload: result })
    }
}

export const changesimilarsonglength = () => {
    return async dispatch => {
        await dispatch({ type: "CHANGESIMILARSONGLENGTH" })
    }
}