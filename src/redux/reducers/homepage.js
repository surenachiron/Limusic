export const loadinghomepage = (state = false, action) => {
    switch (action.type) {
        case "ACTIVELOADINGHOMEPAGE":
            return action.payload;
        default:
            return state
    }
}

/// trend music home page
export const songtrendhomepage = (state = [], action) => {
    switch (action.type) {
        case "INITIIALIZE_SONGTRENDOHOMEPAGE":
            return action.payload;
        default:
            return state
    }
}

export const plylisttrendmusic = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZE_PLAYLISTTRENDMUSIC":
            return action.payload;
        default:
            return state
    }
}

/// chart home page

export const chartsspecificsong = (state = null, action) => {
    switch (action.type) {
        case ("INITIALIZECHARTSSPECIFICSONG"):
            return action.payload;
        default:
            return state
    }
}

export const plylistcharttopmusic = (state = null, action) => {
    switch (action.type) {
        case "INITIALIZE_PLAYLISTCHARTTOPMUSIC":
            return action.payload;
        default:
            return state
    }
}