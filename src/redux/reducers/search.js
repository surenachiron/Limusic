export const detailssearched = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZEDETAILSSEARCHED":
            return action.payload
        default:
            return state
    }
}