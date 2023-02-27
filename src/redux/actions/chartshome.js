export const initializechartsspecificsong = (chartsspecifice) => {
    return async (dispatch) => {
        await dispatch({ type: "INITIALIZECHARTSSPECIFICSONG", payload: chartsspecifice })
    }
}