export const detailsalbums = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZE_DETAILSALBUM":
            return action.payload
        default:
            return state;
    }
}

export const backupdetailsalbumsforplaylist = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZE_BACKUPDETAILSALBUMSFORPLAYLIST":
            return action.payload
        default:
            return state;
    }
}

export const playlistalbumpage = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZE_PLAYLISTALBUMPAGE":
            return action.payload
        default:
            return state;
    }
}

export const loadingalbums = (state = false, action) => {
    switch (action.type) {
        case "CHANGE_LOADINGALBUMS":
            return action.payload
        default:
            return state;
    }
}
