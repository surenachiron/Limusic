import ananymousfase from '../../assets/images/ananymousformusicorartist.png'
import { addpageplayedmusic, changeactiverendomwithprops, changevalueorplayorpause, changevalueorplayorpausewithprops, changevolumemusicwithprops, findindexmusic, initialseforclosemusiccontrol } from './forplayermusic';

export const initializelistcountrieforcharts = (result) => {
    return async (dispatch) => {
        let sortingcountries = result.countries.sort((a, b) => a.name.localeCompare(b.name));
        await dispatch({ type: "INITIALIZELISTCOUNTRIEFORCHARTS", payload: [result, sortingcountries] })
    }
}

export const changeloadinglistchart = (value) => {
    return async (dispatch) => {
        await dispatch({ type: "CHANGELOADINGLISTCHART", payload: value })
    }
}

export const changedisableorallowtop100 = (value) => {
    return async (dispatch) => {
        await dispatch({ type: "CHANGEDISABLEORALLOWTOP100", payload: value })
    }
}

export const changeloadingtracktopforcountrie = (result) => {
    return async (dispatch) => {
        await dispatch({ type: "CHANGELOADINGTRACKTOPFORCOUNTRIE", payload: result })
    }
}

export const listtopmusicforcountriecharts = (result) => {
    return async (dispatch) => {
        const newArray = result.tracks.filter(obj => obj.hub.actions !== undefined);
        const songsArray = newArray.map((song, index) => {
            return {
                namesong: (song.title !== undefined ? song.title : ""),
                nameartist: (song.subtitle !== undefined ? song.subtitle : ""),
                imagesong: (song.images !== undefined ? song.images.coverart : ananymousfase),
                soundsong: (song.hub.actions[1].uri !== undefined ? song.hub.actions[1].uri : ""),
                linkpagesong: (song.key !== undefined ? song.key : ""),
                linkpageartist: (song.artists !== undefined ? song.artists[0].adamid : ""),
                numberinalbum: index + 1,
            };
        });
        await dispatch({ type: "INITIALIZELISTTOPMUSICFORCOUNTRIECHATS", payload: [songsArray] })
    }
}

export const initializeplaylisttrackschartforcountrie = (playlisytrensmuci) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZE_PLAYLISTTRACKSCHARTFORCOUNTRIE", payload: playlisytrensmuci })
    }
}

export const playlisttrackstopforcountrie = (value, namemusic) => {
    return async (dispatch) => {
        if (localStorage.getItem("namemusicplayingorplayed") === namemusic) {
            await dispatch(changevalueorplayorpause())
        } else {
            await dispatch(initialseforclosemusiccontrol(true))
            await dispatch(changevalueorplayorpausewithprops(true))
            await dispatch(changevolumemusicwithprops(false))
            await dispatch(changeactiverendomwithprops(false))
            await dispatch(findindexmusic(namemusic, value))
            await dispatch(initializeplaylisttrackschartforcountrie(value));
            await dispatch(addpageplayedmusic(value))
            localStorage.setItem("whichplayingincountrie", document.title)
        }
    }
}

export const playlisttrackscharttopmusicforcountrie = (namecountrie) => {
    return async (dispatch, getState) => {
        const playlisttrackschartforcountrie = getState().playlisttrackschartforcountrie
        const howplaylistisactive = getState().howpageplayedmusic
        const listtopmusicforcountriecahrts = getState().listtopmusicforcountriecahrts[0]
        
        if (howplaylistisactive === playlisttrackschartforcountrie && namecountrie === localStorage.getItem("whichplayingincountrie")) {
            await dispatch(changevalueorplayorpause())
        } else {
            await dispatch(initialseforclosemusiccontrol(true))
            await dispatch(changevalueorplayorpausewithprops(true))
            await dispatch(changevolumemusicwithprops(false))
            await dispatch(changeactiverendomwithprops(false))
            await dispatch({ type: "ADD_NUMBERPLAYSONGINPLAYLIST", payload: 0 })
            await dispatch(initializeplaylisttrackschartforcountrie(listtopmusicforcountriecahrts));
            await dispatch(addpageplayedmusic(listtopmusicforcountriecahrts))
            localStorage.setItem("whichplayingincountrie", namecountrie)
        }
    }
}