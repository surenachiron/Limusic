export const mouseDownOnSlider = (state = false, action) => {
    switch (action.type) {
        case "CHANGEMOUSEDOWN":
            return !state;
        default:
            return state;
    }
}

export const musicended = (state = false, action) => {
    switch (action.type) {
        case "CHANGEMUSICENDED":
            return action.payload;
        default:
            return state;
    }
}
export const randomeplaymusic = (state = false, action) => {
    switch (action.type) {
        case "CHANGEINRANDOMPLAYMUSIC":
            return !state
        default:
            return state
    }
}

export const volumeallmusic = (state = true, action) => {
    switch (action.type) {
        case "INCREMENTANDDECREMENTINVOLUME":
            return action.payload
        case "MUTEANDOPEN":
            return !state
        default:
            return state
    }
}

export const headermobileshow = (state = false, action) => {
    switch (action.type) {
        case "CHANGEHEADERMOBILESHOW":
            return !state
        default:
            return state
    }
}

export const forloading = (state = false, action) => {
    switch (action.type) {
        case "ACTIONLOADING":
            return action.payload;
        default:
            return state
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

/// page searching

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

//// loading

// export const loadingfortopsong = (state = false, action) => {
//     switch (action.type) {
//         case "CHANGELOADINGTOPSONG":
//             return !state;
//         default:
//             return state
//     }
// }

// export const loadingforsimilarsong = (state = false, action) => {
//     switch (action.type) {
//         case "CHANGELOADINGSIMILARSONG":
//             return !state;
//         default:
//             return state
//     }
// }