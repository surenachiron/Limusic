import ananymousfase from '../../assets/images/ananymousformusicorartist.png'
import { addpageplayedmusic, changeactiverendomwithprops, changevalueorplayorpause, changevalueorplayorpausewithprops, changevolumemusicwithprops, findindexmusic, initialseforclosemusiccontrol } from './forplayermusic'

export const changeloadingalbums = (value) => {
    return async dispatch => {
        dispatch({ type: "CHANGE_LOADINGALBUMS", payload: value })
    }
}

export const initializealbumsartist = (details) => {
    return async dispatch => {
        dispatch({ type: "INITIALIZE_DETAILSALBUM", payload: details })
    }
}

export const initializebackupdetailsalbumsforplaylist = (details) => {
    return async (dispatch, getState) => {
        const artistdetails = getState().artistdetails
        let newarray = details.data[0].relationships.tracks.data.map(o => o.attributes)

        const songsArray = newarray.map((song, index) => {
            return {
                namesong: (song.name !== undefined ? song.name : ""),
                nameartist: (song.artistName !== undefined ? song.artistName : ""),
                imagesong: (song.artwork.url !== undefined ? song.artwork.url.slice(0, song.artwork.url.length - 13) + song.artwork.width + "x" + song.artwork.height + "bb.jpg" : ananymousfase),
                soundsong: (song.previews !== undefined ? song.previews.map((previews) => previews.url)[0] : ""),
                linkpageartist: (artistdetails.data !== undefined ? artistdetails.data.map(o => o.id)[0] : ""),
                numberinalbum: index + 1
            };
        });
        dispatch({ type: "INITIALIZE_BACKUPDETAILSALBUMSFORPLAYLIST", payload: [songsArray] })
    }
}

export const initializeplaylistalbumpage = (playlist) => {
    return async (dispatch) => {
        dispatch({ type: "INITIALIZE_PLAYLISTALBUMPAGE", payload: playlist })
    }
}

export const playlistmusicspageabum = (value, namemusic) => {
    return async (dispatch) => {
        if (localStorage.getItem("namemusicplayingorplayed") === namemusic) {
            await dispatch(changevalueorplayorpause())
        } else {
            await dispatch(initialseforclosemusiccontrol(true))
            await dispatch(changevalueorplayorpausewithprops(true))
            await dispatch(changevolumemusicwithprops(false))
            await dispatch(changeactiverendomwithprops(false))
            await dispatch(findindexmusic(namemusic, value))
            await dispatch(initializeplaylistalbumpage(value));
            await dispatch(addpageplayedmusic(value))
            localStorage.setItem("whichplayinginalbume", document.title)
        }
    }
}

export const playlistmusicspageabumincopmonentdetailsalbum = (namealbume) => {
    return async (dispatch, getState) => {
        const playlistalbumpage = getState().playlistalbumpage
        const howplaylistisactive = getState().howpageplayedmusic
        const backupdetailsalbumsforplaylist = getState().backupdetailsalbumsforplaylist[0]

        if (howplaylistisactive === playlistalbumpage && namealbume === localStorage.getItem("whichplayinginalbume")) {
            await dispatch(changevalueorplayorpause())
        } else {
            await dispatch(initialseforclosemusiccontrol(true))
            await dispatch(changevalueorplayorpausewithprops(true))
            await dispatch(changevolumemusicwithprops(false))
            await dispatch(changeactiverendomwithprops(false))
            await dispatch({ type: "ADD_NUMBERPLAYSONGINPLAYLIST", payload: 0 })
            await dispatch(initializeplaylistalbumpage(backupdetailsalbumsforplaylist));
            await dispatch(addpageplayedmusic(backupdetailsalbumsforplaylist))
            localStorage.setItem("whichplayinginalbume", namealbume)
        }
    }
}