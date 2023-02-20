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