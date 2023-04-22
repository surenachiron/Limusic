import axios from "axios";
import { actionloading } from "../redux/actions/artist";
import { addsonginplaysitsongorginaly, changeshowsimilarsongorno, changeshowtopsongorno, initializecountsong, initializelittlesimilarsong, initializeplaylistpagesongorginalysorginaly, initializesimilarsong, initializesong, initializetopsong } from "../redux/actions/song";

export const callsongdetails = async (dispatch, keysong) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/songs/get-details',
        params: { key: keysong, locale: 'en-US' },
        headers: {
            'X-RapidAPI-Key': 'f3f49bd040msh479bd23a719047fp179b3ajsn630099597a8a',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(actionloading(true))
    await axios.request(options).then(function (response) {
        dispatch(initializesong(response.data))
        dispatch(initializeplaylistpagesongorginalysorginaly())
        if (response.data.artists.map(o => o.adamid)[0] !== undefined) {
            calltopsongartistinsong(dispatch, response.data.artists.map(o => o.adamid)[0])
        }
        dispatch(actionloading(false))
    }).catch(function (error) {
        dispatch(actionloading(false))
    });
}

export const getcountplaysong = async (dispatch, keysong) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/songs/get-count',
        params: { key: keysong },
        headers: {
            'X-RapidAPI-Key': 'f3f49bd040msh479bd23a719047fp179b3ajsn630099597a8a',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    await axios.request(options).then(function (response) {
        dispatch(initializecountsong(response.data.total))
    }).catch(function (error) {
    });
}

export const calltopsongartistinsong = async (dispatch, idartist) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/artists/get-top-songs',
        params: { id: idartist, l: 'en-US' },
        headers: {
            'X-RapidAPI-Key': 'f3f49bd040msh479bd23a719047fp179b3ajsn630099597a8a',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(changeshowtopsongorno(true))
    await axios.request(options).then(function (response) {
        dispatch(changeshowtopsongorno(false))
        dispatch(addsonginplaysitsongorginaly(response.data))
        dispatch(initializetopsong(response.data))
    }).catch(function (error) {
        dispatch(changeshowtopsongorno(false))
    });
}

export const callsimilarsongs = async (dispatch, keysong) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
        params: { key: keysong, locale: 'en-US' },
        headers: {
            'X-RapidAPI-Key': 'f3f49bd040msh479bd23a719047fp179b3ajsn630099597a8a',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(changeshowsimilarsongorno(true))
    await axios.request(options).then(function (response) {
        dispatch(changeshowsimilarsongorno(false))
        dispatch(initializesimilarsong(response.data))
        if (response.data.tracks.length >= 5) {
            dispatch(initializelittlesimilarsong(response.data.tracks.slice(0, 5)))
        }
    }).catch(function (error) {
        dispatch(changeshowsimilarsongorno(false))
    });
}
