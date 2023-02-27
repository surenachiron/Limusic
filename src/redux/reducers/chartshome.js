export const chartsspecificsong = (state = [], action) => {
    switch (action.type) {
        case ("INITIALIZECHARTSSPECIFICSONG"):
            return action.payload;
        default:
            return state
    }
} 