export const initializedetailssearched = (detailsearch) => {
    return async (dispatch) => { 
        await dispatch({ type: "INITIALIZEDETAILSSEARCHED", payload: detailsearch })

    }
}

export const changefocusinputsearch = (result) => {
    return async dispatch => {
        await dispatch({ type: "CHANGEFOCUSINPUTSEACH", payload: result })
    }
}

export const changeforloadingsearch = (result) => {
    return async dispatch => {
        await dispatch({ type: "ACTIONLOADINGSEARCH", payload: result })
    }
}

export const changeshowsongorartistinsearching = (result) => {
    return async dispatch => {
        await dispatch({ type: "SHOWSONGORARTISTINSEARCHING", payload: result })
    }
}