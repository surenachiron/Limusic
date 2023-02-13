export const artistdetails = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZEARTIST":
            return action.payload
        default:
            return state
    }
}

export const topsongsartist = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZETOPSONGARTIST":
            return action.payload
        default:
            return state
    }
}

export const latestreleaseartist = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZELATESTRELEASEARTIST":
            return action.payload
        default:
            return state
    }
}

export const albumsartist = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZEALBUMSARTIST":
            return action.payload
        default:
            return state
    }
}