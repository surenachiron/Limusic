export const initializeartist = (alldetailsartist) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZEARTIST", payload: alldetailsartist })
    }
}
export const initializetopsongartist = (topsongartist) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZETOPSONGARTIST", payload: topsongartist })
    }
}
export const initializelatestreleaseartist = (latestreleaseartist) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZELATESTRELEASEARTIST", payload: latestreleaseartist })
    }
}
export const initializealbumsartist = (albumsartist) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZEALBUMSARTIST", payload: albumsartist })
    }
}