import axios from "axios";
import { initializechartsspecificsong } from "../redux/actions/chartshome";

export const usegetspecificchartsong = async (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/charts/track',
        params: { locale: 'en-US', pageSize: '20', startFrom: '0' },
        headers: {
            'X-RapidAPI-Key': '827dd9bf9amsh1ecc6131ba5e29ep1a78f0jsnd5ea98293515',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    await axios.request(options).then(function (response) {
        dispatch(initializechartsspecificsong(response.data))
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}