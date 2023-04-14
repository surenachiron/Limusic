export const changevalueorplayorpause = () => {
    return async (dispatch) => {
        await dispatch({ type: "CHANGEVALUETOPLAYORPAUSE" })
    }
}

export const changevalueorplayorpausewithprops = (value) => {
    return async (dispatch) => {
        await dispatch({ type: "CHANGEVALUETOPLAYORPAUSEWITHPROPS", payload: value })
    }
}

export const initialseforclosemusiccontrol = (valueclose) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALISEFORCLOSEMUSICCONTROL", payload: valueclose })
    }
}

export const changevolumemusic = () => {
    return async (dispatch) => {
        await dispatch({ type: "CHANGEVOLUMEMUSIC" })
    }
}

export const changevolumemusicwithprops = (value) => {
    return async (dispatch) => {
        await dispatch({ type: "CHANGEVOLUMEMUSICWITHPROPS", payload: value })
    }
}

export const changecurrenttimemusic = (value) => {
    return async (dispatch) => {
        await dispatch({ type: "CHANGECURRENTTIMEMUSIC", payload: value })
    }
}
export const changedurationtimemusic = (value) => {
    return async (dispatch) => {
        await dispatch({ type: "CHANGEDURATIONTIMEMUSIC", payload: value })
    }
}

export const changeactiverendom = () => {
    return async (dispatch) => {
        await dispatch({ type: "CHANGE_ACTIVERANDOM" })
    }
}

export const changeactiverendomwithprops = (value) => {
    return async (dispatch) => {
        await dispatch({ type: "CHANGE_ACTIVERANDOMWITHPROPS", payload: value })
    }
}

export const createnumberrandomforplay = () => {
    return async (dispatch, getState) => {
        const lingthmax = getState().howpageplayedmusic.length;
        console.log(lingthmax)
        const numberrandom = Math.floor((Math.random() * (lingthmax)));
        console.log(numberrandom)
        await dispatch({ type: "FINDINDEXMUSIC", payload: numberrandom })
    }
}

export const changenumberretweet = () => {
    return async (dispatch, getState) => {
        let numberretweettt = getState().numberretweet
        let orginalydataforsend = 0;
        if (numberretweettt === 0) orginalydataforsend = 1
        else if (numberretweettt === 1) orginalydataforsend = 2
        else orginalydataforsend = 0
        await dispatch({ type: "CHANGENUMBERRETWEET", payload: orginalydataforsend })
    }
}

export const changenumberretweetwithprops = (value) => {
    return async (dispatch) => {
        await dispatch({ type: "CHANGENUMBERRETWEETWITHPROPS", payload: value })
    }
}

export const lowoffnumberplaysonginplaylist = (stateused) => {
    return async (dispatch, getState) => {
        const state = stateused
        const computing = getState().numberplaysonginplaylist - 1
        if (computing < 0) await dispatch({ type: "LOWOFF_NUMBERPLAYSONGINPLAYLIST", payload: (state.length - 1) })
        else await dispatch({ type: "LOWOFF_NUMBERPLAYSONGINPLAYLIST", payload: computing })
    }
}

export const addnumberplaysonginplaylist = (stateused) => {
    return async (dispatch, getState) => {
        const state = stateused
        const result = getState().numberplaysonginplaylist + 1
        if (result >= state.length) await dispatch({ type: "ADD_NUMBERPLAYSONGINPLAYLIST", payload: 0 })
        else await dispatch({ type: "ADD_NUMBERPLAYSONGINPLAYLIST", payload: result })
    }
}

export const findindexmusic = (namemusic, playlist) => {
    return async (dispatch) => {
        const state = playlist
        const findindex = state.findIndex(e => e.namesong === namemusic)
        await dispatch({ type: "ADD_NUMBERPLAYSONGINPLAYLIST", payload: findindex })
    }
}

export const addpageplayedmusic = (result) => {
    return async (dispatch) => {
        await dispatch({ type: "ADD_PAGEPLAYEDMUSIC", payload: result })
        await dispatch(initialseforclosemusiccontrol(true))
    }
}

export const changeismusicwaiting = (result) => {
    return async (dispatch) => {
        await dispatch({ type: "CHANGE_ISMUSICWAITING", payload: result })
    }
}