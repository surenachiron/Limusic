import axios from "axios";
import { addsonginplaysitsongorginaly, changeshowsimilarsongorno, changeshowtopsongorno, initializecountsong, initializelittlesimilarsong, initializeplaylistpagesongorginalysorginaly, initializesimilarsong, initializesong, initializetopsong } from "../redux/actions/song";
import { actionloading } from "../redux/actions/truefalse";

export const callsongdetails = async (dispatch, keysong) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/songs/get-details',
        params: { key: keysong, locale: 'en-US' },
        headers: {
            'X-RapidAPI-Key': '73b0c57e7dmshfc234d7c5ddefe9p1c562fjsn5ca792270ed1',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(actionloading(true))
    await axios.request(options).then(function (response) {
        dispatch(actionloading(false))
        dispatch(initializesong(response.data))
        dispatch(initializeplaylistpagesongorginalysorginaly())
        if (response.data.artists.map(o => o.adamid)[0] !== undefined) {
            calltopsongartistinsong(dispatch, response.data.artists.map(o => o.adamid)[0])
        }
    }).catch(function (error) {
        dispatch(actionloading(false))
        console.error(error);
    });
}

export const getcountplaysong = async (dispatch, keysong) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/songs/get-count',
        params: { key: keysong },
        headers: {
            'X-RapidAPI-Key': '73b0c57e7dmshfc234d7c5ddefe9p1c562fjsn5ca792270ed1',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    await axios.request(options).then(function (response) {
        dispatch(initializecountsong(response.data.total))
    }).catch(function (error) {
        console.error(error);
    });
}

export const calltopsongartistinsong = async (dispatch, idartist) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/artists/get-top-songs',
        params: { id: idartist, l: 'en-US' },
        headers: {
            'X-RapidAPI-Key': '73b0c57e7dmshfc234d7c5ddefe9p1c562fjsn5ca792270ed1',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    await axios.request(options).then(function (response) {
        dispatch(addsonginplaysitsongorginaly(response.data))
        dispatch(changeshowtopsongorno(true))
        if (response.data.data.length !== 0 && response.data.data.length !== undefined) {
            dispatch(initializetopsong(response.data))
        } else {
            dispatch(changeshowtopsongorno(false))
        }
    }).catch(function (error) {
        console.error(error);
        dispatch(changeshowtopsongorno(false))
    });
}

export const callsimilarsongs = async (dispatch, keysong) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
        params: { key: keysong, locale: 'en-US' },
        headers: {
            'X-RapidAPI-Key': '73b0c57e7dmshfc234d7c5ddefe9p1c562fjsn5ca792270ed1',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    await axios.request(options).then(function (response) {
        dispatch(changeshowsimilarsongorno(true))
        if (response.data.tracks.length !== 0 && response.data.tracks.length !== undefined) {
            dispatch(initializesimilarsong(response.data))
            if (response.data.tracks.length >= 5) {
                dispatch(initializelittlesimilarsong(response.data.tracks.slice(0, 5)))
            }
        } else {
            dispatch(changeshowsimilarsongorno(false))
        }
    }).catch(function (error) {
        console.error(error);
        dispatch(changeshowsimilarsongorno(false))
    });
}
