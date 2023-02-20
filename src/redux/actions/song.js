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