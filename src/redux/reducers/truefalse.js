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