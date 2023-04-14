import axios from "axios";
import { actionloading } from "../redux/actions/truefalse";
import { initializealbumsartist, initializeartist, initializelatestreleaseartist, initializeshowalbumartist, initializeshowtopsongorno, initializeshowlatestrelease, initializetopsongartist } from '../redux/actions/artist'

export const getalldetailsartist = async (dispatch, idartist) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/artists/get-details',
        params: { id: idartist, l: 'en-US' },
        headers: {
            'X-RapidAPI-Key': '8c6feac019mshba9d640dfc67c3ap119555jsna7c605a30b66',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(actionloading(true))
    await axios.request(options).then(function (response) {
        dispatch(initializeartist(response.data))
        dispatch(actionloading(false))
    }).catch(function (error) {
        dispatch(actionloading(false))
        console.error(error);
    });
}

export const gettopsongartist = async (dispatch, idartist) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/artists/get-top-songs',
        params: { id: idartist, l: 'en-US' },
        headers: {
            'X-RapidAPI-Key': '8c6feac019mshba9d640dfc67c3ap119555jsna7c605a30b66',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(initializeshowtopsongorno(true))
    await axios.request(options).then(function (response) {
        dispatch(initializeshowtopsongorno(false))
        dispatch(initializetopsongartist(response.data))
    }).catch(function (error) {
        dispatch(initializeshowtopsongorno(false))
        console.error(error);
    });
}

export const getlatestreleaseartist = async (dispatch, idartist) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/artists/get-latest-release',
        params: { id: idartist, l: 'en-US' },
        headers: {
            'X-RapidAPI-Key': '8c6feac019mshba9d640dfc67c3ap119555jsna7c605a30b66',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(initializeshowlatestrelease(true))
    await axios.request(options).then(function (response) {
        dispatch(initializeshowlatestrelease(false))
        dispatch(initializelatestreleaseartist(response.data))
    }).catch(function (error) {
        console.error(error);
        dispatch(initializeshowlatestrelease(false))
    });
}

export const getalbumsartist = async (dispatch, idartist) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/artists/get-summary',
        params: { id: idartist, l: 'en-US' },
        headers: {
            'X-RapidAPI-Key': '8c6feac019mshba9d640dfc67c3ap119555jsna7c605a30b66',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(initializeshowalbumartist(true))
    await axios.request(options).then(function (response) {
        dispatch(initializeshowalbumartist(false))
        dispatch(initializealbumsartist(response.data.resources))
    }).catch(function (error) {
        console.error(error);
        dispatch(initializeshowalbumartist(false))
    });
}