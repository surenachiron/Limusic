export const widthplayermusic = (state = 0, action) => {
    switch (action.type) {
        case "UODATEWIDTCHPLAYERMUSIC":
            return action.payload
        default:
            return state
    }
}