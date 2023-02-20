export const updateallplayermusic = (payloadd) => {
    return async (dispatch) => {
        await dispatch({ type: "UPDATEALLPLAYERMUSIC", payload: payloadd })
    }
}

export const addmusicplaying = (idaudio) => {
    return async (dispatch) => {
        await dispatch({ type: "ADDMUSICPLAYING", payload: idaudio })
    }
}

export const addlastmusicplayed = (idaudio) => {
    return async (dispatch) => {
        await dispatch({ type: "ADDLASTMUSICPLAYED", payload: idaudio })
    }
}


export const addminuteduration = (minuteduration) => {
    return async (dispatch) => {
        await dispatch({ type: "ADDMINUTEDURATION", payload: minuteduration })
    }
}
export const addsecondduration = (secondduration) => {
    return async (dispatch) => {
        await dispatch({ type: "ADDSECONDDURATION", payload: secondduration })
    }
}
export const addminutecurrenttime = (minutecurrenttime) => {
    return async (dispatch) => {
        await dispatch({ type: "ADDMINUTECURRENTTIME", payload: minutecurrenttime })
    }
}
export const addsecondcurrenttime = (secoundcurrenttime) => {
    return async (dispatch) => {
        await dispatch({ type: "ADDSECONDCURRENTTIME", payload: secoundcurrenttime })
    }
}

export const incrementnumberloop = () => {
    return async (dispatch, getState) => {
        let statenumber = getState().numeberloop
        console.log(statenumber)
        statenumber++
        if (statenumber === 3) statenumber = 0
        console.log(statenumber)
        await dispatch({ type: "INCREMENTNUMBERLOOP", payload: statenumber })
    }
}

export const clearnumberloop = () => {
    return async (dispatch, getState) => {
        let statenumber = getState().numeberloop
        console.log(statenumber)
        statenumber = 0
        console.log(statenumber)
        await dispatch({ type: "CLEARNUMBERLOOP", payload: statenumber })
    }
}