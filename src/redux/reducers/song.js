export const savesongselected = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZESONG":
            return action.payload
        default:
            return state;
    }
}

export const countplaysong = (state = "", action) => {
    switch (action.type) {
        case "INITIALIZECOUNTPLAYSONG":
            return action.payload
        default:
            return state
    }
}

export const topsongbyartist = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZETOPSONG":
            return action.payload
        default:
            return state;
    }
}

export const showtopsongorno = (state = true, action) => {
    switch (action.type) {
        case "CHANGE_SHOWTOPSONGORNO":
            return action.payload
        default:
            return state;
    }
}

export const similarsong = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZESIMILARSONG":
            return action.payload
        default:
            return state;
    }
}


export const littlesimilarsong = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZELITTLESIMILARSONG":
            return action.payload
        default:
            return state;
    }
}

export const showsimilatsongorno = (state = true, action) => {
    switch (action.type) {
        case "CHANGE_SHOWSIMILARSONGORNO":
            return action.payload
        default:
            return state;
    }
}

export const playlistpagesongorginalyorginaly = (state = { songs: [] }, action) => {
    switch (action.type) {
        case "SET_PLAYLIST_SONGS_ORGINALY":
            return { ...state, songs: [action.payload] };
        case "ADD_SONGS_TO_PLAYLIST_ORGINALY":
            return { ...state, songs: state.songs.concat(...action.payload) };
        default:
            return state;
    }
}

export const playlistpagesongorginalyfake = (state = [], action) => {
    switch (action.type) {
        case "SET_PLAYLIST_SONGS_ORGINALY_FAKE":
            return action.payload;
        default:
            return state;
    }
}