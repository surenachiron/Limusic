import axios from "axios";
import { initializesongtrendhomepage, initializechartsspecificsong, activeloadinghomepage } from "../redux/actions/homepage";

export const usegetspecificchartsong = async (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/charts/track',
        params: { locale: 'en-US', pageSize: '20', startFrom: '0' },
        headers: {
            'X-RapidAPI-Key': '0ecaea8e8emshface22eb1c51059p12cc2djsn342a6cff667f',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(activeloadinghomepage(true))
    axios.request(options).then(function (response) {
        dispatch(initializechartsspecificsong(response.data))
    }).catch(function (error) {
    });
}

export const usegetsongtrend = async (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/songs/get-details',
        params: { key: "543335256", locale: 'en-US' },
        headers: {
            'X-RapidAPI-Key': '0ecaea8e8emshface22eb1c51059p12cc2djsn342a6cff667f',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(activeloadinghomepage(true))
    axios.request(options).then(function (response) {
        dispatch(initializesongtrendhomepage(response.data))
    }).catch(function (error) {
    });
}
