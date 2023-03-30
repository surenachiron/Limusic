export const initializedetailssearched = (detailsearch) => {
    return async (dispatch) => { 
        await dispatch({ type: "INITIALIZEDETAILSSEARCHED", payload: detailsearch })

    }
}