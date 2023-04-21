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
            const uniqueNames = new Set()
            const payloadObjects = action.payload.data
            const newList = []
            for (let i = 0; i < payloadObjects.length; i++) {
                const obj = payloadObjects[i].attributes
                const name = obj.name.slice(0, 8)
                if (!uniqueNames.has(name)) {
                    uniqueNames.add(name)
                    newList.push(obj)
                }
            }
            return { ...state, topsongs: newList }
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

export const overvieworlyricsforsong = (state = false, action) => {
    switch (action.type) {
        case "CHANGEOVERVIEWORLYRICS":
            return action.payload;
        default:
            return state
    }
}

export const showlittleorgreatsimilarsong = (state = false, action) => {
    switch (action.type) {
        case "CHANGESIMILARSONGLENGTH":
            return !state;
        default:
            return state
    }
}