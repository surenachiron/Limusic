export const updateallstateplayermusic = (state = 0, action) => {
    switch (action.type) {
        case "UPDATEALLPLAYERMUSIC":
            return action.payload
        default:
            return state
    }
}

export const musicplaying = (state = "", action) => {
    switch (action.type) {
        case "ADDMUSICPLAYING":
            return action.payload;
        default:
            return state;
    }
};

export const lastmusicplayed = (state = "", action) => {
    switch (action.type) {
        case "ADDLASTMUSICPLAYED":
            return action.payload;
        default:
            return state;
    }
}

export const minuteduration = (state = 0, action) => {
    switch (action.type) {
        case "ADDMINUTEDURATION":
            return action.payload;
        default:
            return state
    }
}

export const secondduration = (state = 0, action) => {
    switch (action.type) {
        case "ADDSECONDDURATION":
            return action.payload;
        default:
            return state
    }
}

export const minutecurrenttime = (state = 0, action) => {
    switch (action.type) {
        case "ADDMINUTECURRENTTIME":
            return action.payload;
        default:
            return state
    }
}

export const secondcurrenttime = (state = 0, action) => {
    switch (action.type) {
        case "ADDSECONDCURRENTTIME":
            return action.payload;
        default:
            return state
    }
}

export const numeberloop = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENTNUMBERLOOP":
            return action.payload
        case "CLEARNUMBERLOOP":
            return action.payload
        default:
            return state
    }
}