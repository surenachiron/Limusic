export const detailssearched = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZEDETAILSSEARCHED":
            return action.payload
        default:
            return state
    }
}

export const focusinputsearch = (state = false, action) => {
    switch (action.type) {
        case "CHANGEFOCUSINPUTSEACH":
            return action.payload;
        default:
            return state
    }
}

export const forloadingsearch = (state = false, action) => {
    switch (action.type) {
        case "ACTIONLOADINGSEARCH":
            return action.payload;
        default:
            return state
    }
}

export const showsongorartistinsearching = (state = false, action) => {
    switch (action.type) {
        case "SHOWSONGORARTISTINSEARCHING":
            return action.payload;
        default:
            return state
    }
}