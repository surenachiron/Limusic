export const listcountrieforcharts = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZELISTCOUNTRIEFORCHARTS":
            return action.payload
        default:
            return state
    }
}

export const loadinglistchart = (state = false, action) => {
    switch (action.type) {
        case "CHANGELOADINGLISTCHART":
            return action.payload
        default:
            return state
    }
}

export const disableorallowtop100 = (state = true, action) => {
    switch (action.type) {
        case "CHANGEDISABLEORALLOWTOP100":
            return action.payload
        default:
            return state
    }
}

export const listtopmusicforcountriecahrts = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZELISTTOPMUSICFORCOUNTRIECHATS":
            return action.payload
        default:
            return state
    }
}

export const playlisttrackschartforcountrie = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZE_PLAYLISTTRACKSCHARTFORCOUNTRIE":
            return action.payload
        default:
            return state
    }
}

export const loadingtracktopcountrie = (state = true, action) => {
    switch (action.type) {
        case "CHANGELOADINGTRACKTOPFORCOUNTRIE":
            return action.payload
        default:
            return state
    }
}