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

export const actionloading = (result) => {
    return async dispatch => {
        await dispatch({ type: "ACTIONLOADING", payload: result })
    }
}

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

/// loading

// export const changeloadingtopsong = () => {
//     return async dispatch => {
//         await dispatch({ type: "CHANGELOADINGTOPSONG" })
//     }
// }

// export const changeloadingsimilarsong = () => {
//     return async dispatch => {
//         await dispatch({ type: "CHANGELOADINGSIMILARSONG" })
//     }
// }