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

export const showtopsongornoartist = (state = false, action) => {
    switch (action.type) {
        case "INITIALIZE_TOPSONG":
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

export const showlatestrelaseorno = (state = false, action) => {
    switch (action.type) {
        case "INITIALIZE_SHOWLATESTRELEASE":
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

export const playlisttopsongartist = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZE_PLAYLISTTOPSONGMUSIC":
            return action.payload
        default:
            return state
    }
}

export const showalbumartist = (state = false, action) => {
    switch (action.type) {
        case "INITIALIZE_SHOWALBUMARTIST":
            return action.payload
        default:
            return state
    }
}