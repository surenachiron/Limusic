import axios from "axios";
import { initializesongtrendhomepage, initializechartsspecificsong, activeloadinghomepage } from "../redux/actions/homepage";

export const usegetspecificchartsong = async (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/charts/track',
        params: { locale: 'en-US', pageSize: '20', startFrom: '0' },
        headers: {
            'X-RapidAPI-Key': '728cd60dacmsh74f0780cb00eb90p1eda2cjsn4300a1df01fb',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(activeloadinghomepage(true))
    await axios.request(options).then(function (response) {
        dispatch(initializechartsspecificsong(response.data))
        dispatch(activeloadinghomepage(false))
    }).catch(function (error) {
        dispatch(activeloadinghomepage(false))
        console.error(error);
    });
}

export const usegetsongtrend = async (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/songs/get-details',
        params: { key: "543335256", locale: 'en-US' },
        headers: {
            'X-RapidAPI-Key': '728cd60dacmsh74f0780cb00eb90p1eda2cjsn4300a1df01fb',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
    dispatch(activeloadinghomepage(true))
    axios.request(options).then(function (response) {
        dispatch(initializesongtrendhomepage(response.data))
        dispatch(activeloadinghomepage(false))
    }).catch(function (error) {
        dispatch(activeloadinghomepage(false))
        console.error(error);
    });
}