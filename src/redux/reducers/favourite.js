export const tracksfavourite = (state = { tracks: [] }, action) => {
    switch (action.type) {
        case "ADDED_TRACKSFAVOURITE":
            const newTrack = action.payload;
            const updatedTracks = [newTrack, ...state.tracks];
            return { ...state, tracks: updatedTracks }
        case "DELETEED_TRACKSFAVOURITE":
            return { ...state, tracks: action.payload }
        default:
            return state
    }
}

export const playlistfavouritetracks = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZE_PLAYLISTFAVOURITETRACKS":
            return action.payload
        default:
            return state
    }
}