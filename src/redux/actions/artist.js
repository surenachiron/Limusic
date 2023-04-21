import ananymousfase from '../../assets/images/ananymousformusicorartist.png'
import { addpageplayedmusic, changeactiverendomwithprops, changevalueorplayorpause, changevalueorplayorpausewithprops, changevolumemusicwithprops, findindexmusic, initialseforclosemusiccontrol } from "./forplayermusic"

export const initializeartist = (alldetailsartist) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZEARTIST", payload: alldetailsartist })
    }
}

export const initializetopsongartist = (topsongartist) => {
    return async (dispatch, getState) => {
        const linkartist = getState().artistdetails.data.map(id => id.id)[0]
        const topsongsArray = topsongartist.data.map((topsong) => {
            return {
                namesong: (topsong.attributes.name !== undefined ? topsong.attributes.name : ""),
                nameartist: (topsong.attributes.artistName !== undefined ? topsong.attributes.artistName : ""),
                imagesong: (topsong.attributes.artwork.url !== undefined ? topsong.attributes.artwork.url.slice(0, topsong.attributes.artwork.url.length - 13) + topsong.attributes.artwork.width + "x" + topsong.attributes.artwork.height + "bb.jpg" : ananymousfase),
                soundsong: (topsong.attributes.previews !== undefined ? topsong.attributes.previews.map((previews) => previews.url)[0] : ""),
                linkpagesong: "",
                linkpageartist: (linkartist !== undefined ? linkartist : ""),
                like: false
            };
        });
        await dispatch({ type: "INITIALIZETOPSONGARTIST", payload: [topsongsArray] })
    }
}

export const initializeshowtopsongorno = (value) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZE_TOPSONG", payload: value })
    }
}

export const initializelatestreleaseartist = (latestreleaseartist) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZELATESTRELEASEARTIST", payload: latestreleaseartist })
    }
}

export const initializeshowlatestrelease = (value) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZE_SHOWLATESTRELEASE", payload: value })
    }
}

export const initializealbumsartist = (albumsartist) => {
    return async (dispatch) => {
        const formatingdata = Object.values(albumsartist.albums).map(value => value);
        Object.values(albumsartist.albums).map(value => value).map(o => o.attributes).map(p => p.releaseDate = parseInt(p.releaseDate.slice(0, 4)))
        const formatingdata2 = formatingdata.map(o => o.attributes).filter(p => p.trackCount > 1).sort((a, b) => b.trackCount - a.trackCount).slice(0, 50).sort((a, b) => b.releaseDate - a.releaseDate).slice(0, 15)
        await dispatch({ type: "INITIALIZEALBUMSARTIST", payload: formatingdata2 })
    }
}

export const initializeshowalbumartist = (value) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZE_SHOWALBUMARTIST", payload: value })
    }
}

/// playlist

export const initializeplaylisttopsongmusicartistpage = (playlisytopsongartistmusic) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZE_PLAYLISTTOPSONGMUSIC", payload: playlisytopsongartistmusic })
    }
}

export const playlisttopsongartisti = (value, namemusic) => {
    return (dispatch) => {
        if (localStorage.getItem("namemusicplayingorplayed") === namemusic) {
            dispatch(changevalueorplayorpause())
        } else {
            dispatch(initialseforclosemusiccontrol(true))
            dispatch(changevalueorplayorpausewithprops(true))
            dispatch(changevolumemusicwithprops(false))
            dispatch(changeactiverendomwithprops(false))
            dispatch(findindexmusic(namemusic, value))
            dispatch(initializeplaylisttopsongmusicartistpage(value));
            dispatch(addpageplayedmusic(value))
        }
    }
}

///
export const actionloading = (result) => {
    return async dispatch => {
        await dispatch({ type: "ACTIONLOADING", payload: result })
    }
}