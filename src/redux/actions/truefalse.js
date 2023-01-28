export const changemousedown = () => {
    return async dispatch => {
        await dispatch({ type: "CHANGEMOUSEDOWN" })
    }
}

export const chnagemusicended = (result) => {
    return async dispatch => {
        await dispatch({ type: "CHANGEMUSICENDED", payload: result })
    }
}

export const changerandomplaymusic = () => {
    return async (dispatch) => {
        await dispatch({ type: "CHANGEINRANDOMPLAYMUSIC" })
    }
}

export const muteandopen = () => {
    return async (dispatch) => {
        await dispatch({ type: "MUTEANDOPEN" })
    }
}

export const changeheadermobileshow = () => {
    return async (dipatch) => {
        await dipatch({ type: "CHANGEHEADERMOBILESHOW" })
    }
}