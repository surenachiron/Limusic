import { addpageplayedmusic, changeactiverendomwithprops, changevalueorplayorpause, changevalueorplayorpausewithprops, changevolumemusicwithprops, findindexmusic, initialseforclosemusiccontrol } from "./forplayermusic"
import ananymousfase from '../../assets/images/ananymousformusicorartist.png'

export const activeloadinghomepage = (value) => {
    return async (dispatch) => {
        await dispatch({ type: "ACTIVELOADINGHOMEPAGE", payload: value })
    }
}

/// tren music
export const initializesongtrendhomepage = (trenmusic) => {
    return async (dispatch) => {
        const songtrend = {
            namesong: trenmusic.title,
            nameartist: trenmusic.subtitle,
            imagesong: trenmusic.images.coverart,
            soundsong: trenmusic.hub.actions.slice(1, 2).map(o => o.uri)[0],
            linkpagesong: trenmusic.key,
            linkpageartist: trenmusic.artists.map(o => o.adamid)[0],
        };
        await dispatch({ type: "INITIIALIZE_SONGTRENDOHOMEPAGE", payload: [songtrend] })
    }
}

export const initializeplaylisttrendmusic = (playlisytrensmuci) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZE_PLAYLISTTRENDMUSIC", payload: playlisytrensmuci })
    }
}

export const setplaylisttrendmusicorginalyfake = (value, namemusic) => {
    return async (dispatch) => {
        console.log(value, namemusic)
        if (localStorage.getItem("namemusicplayingorplayed") === namemusic) {
            await dispatch(changevalueorplayorpause())
        } else {
            await dispatch(initialseforclosemusiccontrol(true))
            await dispatch(changevalueorplayorpausewithprops(true))
            await dispatch(changevolumemusicwithprops(false))
            await dispatch(changeactiverendomwithprops(false))
            await dispatch(findindexmusic(namemusic, value))
            await dispatch(initializeplaylisttrendmusic(value));
            await dispatch(addpageplayedmusic(value))
        }
    }
}

/// chart home page
export const initializechartsspecificsong = (chartsspecifice) => {
    return async (dispatch) => {
        const newArray = chartsspecifice.tracks.slice(0, 5).concat(chartsspecifice.tracks.slice(6));
        console.log(newArray);
        const songsArray = newArray.map((song) => {
            return {
                namesong: (song.title !== undefined ? song.title : ""),
                nameartist: (song.subtitle !== undefined ? song.subtitle : ""),
                imagesong: (song.images !== undefined ? song.images.coverart : ananymousfase),
                soundsong: (song.hub.actions[1].uri !== undefined ? song.hub.actions[1].uri : ""),
                linkpagesong: (song.key !== undefined ? song.key : ""),
                linkpageartist: (song.artists !== undefined ? song.artists.map(o => o.adamid)[0] : ""),
            };
        });
        await dispatch({ type: 'INITIALIZECHARTSSPECIFICSONG', payload: [songsArray] });
    }
}

export const initializeplaylistcharttopmusic = (playlisytrensmuci) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZE_PLAYLISTCHARTTOPMUSIC", payload: playlisytrensmuci })
    }
}

export const setplaylistcharttopmusicorginalyfake = (value, namemusic) => {
    return async (dispatch) => {
        console.log(value, namemusic)
        if (localStorage.getItem("namemusicplayingorplayed") === namemusic) {
            await dispatch(changevalueorplayorpause())
        } else {
            await dispatch(initialseforclosemusiccontrol(true))
            await dispatch(changevalueorplayorpausewithprops(true))
            await dispatch(changevolumemusicwithprops(false))
            await dispatch(changeactiverendomwithprops(false))
            await dispatch(findindexmusic(namemusic, value))
            await dispatch(initializeplaylistcharttopmusic(value));
            await dispatch(addpageplayedmusic(value))
        }
    }
}