export const isplayorispause = (state = false, action) => {
    switch (action.type) {
        case "CHANGEVALUETOPLAYORPAUSE":
            return !state
        case "CHANGEVALUETOPLAYORPAUSEWITHPROPS":
            return action.payload
        case "UPDATEISPLAYORPAUSE":
            return state
        default:
            return state
    }
}

export const forclosemusiccontrol = (state = false, action) => {
    switch (action.type) {
        case "INITIALISEFORCLOSEMUSICCONTROL":
            return action.payload
        default:
            return state
    }
}

export const volumemusic = (state = false, action) => {
    switch (action.type) {
        case "CHANGEVOLUMEMUSIC":
            return !state
        case "CHANGEVOLUMEMUSICWITHPROPS":
            return action.payload
        default:
            return state
    }
}

export const currenttimemusic = (state = [], action) => {
    switch (action.type) {
        case "CHANGECURRENTTIMEMUSIC":
            return action.payload
        default:
            return state
    }
}

export const durationtimemusic = (state = [], action) => {
    switch (action.type) {
        case "CHANGEDURATIONTIMEMUSIC":
            return action.payload
        default:
            return state
    }
}

export const activerandom = (state = false, action) => {
    switch (action.type) {
        case "CHANGE_ACTIVERANDOM":
            return !state;
        case "CHANGE_ACTIVERANDOMWITHPROPS":
            return action.payload
        default:
            return state;
    }
}

export const numberretweet = (state = 0, action) => {
    switch (action.type) {
        case "CHANGENUMBERRETWEET":
            return action.payload
        case "CHANGENUMBERRETWEETWITHPROPS":
            return action.payload
        default:
            return state
    }
}

export const numberplaysonginplaylist = (state = 0, action) => {
    switch (action.type) {
        case "ADD_NUMBERPLAYSONGINPLAYLIST":
            return action.payload;
        case "LOWOFF_NUMBERPLAYSONGINPLAYLIST":
            return action.payload;
        case "FINDINDEXMUSIC":
            return action.payload;
        default:
            return state;
    }
}

export const howpageplayedmusic = (state = [], action) => {
    switch (action.type) {
        case "ADD_PAGEPLAYEDMUSIC":
            return action.payload;
        default:
            return state;
    }
}

export const ismusicwaiting = (state = false, action) => {
    switch (action.type) {
        case "CHANGE_ISMUSICWAITING":
            return action.payload;
        default:
            return state;
    }
}