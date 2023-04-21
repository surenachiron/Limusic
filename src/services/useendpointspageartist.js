import axios from "axios";
import { initializealbumsartist, initializeartist, initializelatestreleaseartist, initializeshowalbumartist, initializeshowtopsongorno, initializeshowlatestrelease, initializetopsongartist, actionloading } from '../redux/actions/artist'

export const getalldetailsartist = async (dispatch, idartist) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/artists/get-details',
        params: { id: idartist, l: 'en-US' },
        headers: {
            'X-RapidAPI-Key': '695d520e3cmsh8c864660f412e8cp10f6c8jsn786925583432',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(actionloading(true))
    await axios.request(options).then(function (response) {
        dispatch(initializeartist(response.data))
        dispatch(actionloading(false))
    }).catch(function (error) {
        dispatch(actionloading(false))
    });
}

export const gettopsongartist = async (dispatch, idartist) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/artists/get-top-songs',
        params: { id: idartist, l: 'en-US' },
        headers: {
            'X-RapidAPI-Key': '695d520e3cmsh8c864660f412e8cp10f6c8jsn786925583432',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(initializeshowtopsongorno(true))
    await axios.request(options).then(function (response) {
        dispatch(initializeshowtopsongorno(false))
        dispatch(initializetopsongartist(response.data))
    }).catch(function (error) {
        dispatch(initializeshowtopsongorno(false))
    });
}

export const getlatestreleaseartist = async (dispatch, idartist) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/artists/get-latest-release',
        params: { id: idartist, l: 'en-US' },
        headers: {
            'X-RapidAPI-Key': '695d520e3cmsh8c864660f412e8cp10f6c8jsn786925583432',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(initializeshowlatestrelease(true))
    await axios.request(options).then(function (response) {
        dispatch(initializeshowlatestrelease(false))
        dispatch(initializelatestreleaseartist(response.data))
    }).catch(function (error) {
        dispatch(initializeshowlatestrelease(false))
    });
}

export const getalbumsartist = async (dispatch, idartist) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/artists/get-summary',
        params: { id: idartist, l: 'en-US' },
        headers: {
            'X-RapidAPI-Key': '695d520e3cmsh8c864660f412e8cp10f6c8jsn786925583432',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(initializeshowalbumartist(true))
    await axios.request(options).then(function (response) {
        dispatch(initializeshowalbumartist(false))
        dispatch(initializealbumsartist(response.data.resources))
    }).catch(function (error) {
        dispatch(initializeshowalbumartist(false))
    });
}