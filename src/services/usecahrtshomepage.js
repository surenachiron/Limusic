import axios from "axios";
import { initializechartsspecificsong } from "../redux/actions/chartshome";

export const usegetspecificchartsong = async (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/charts/track',
        params: { locale: 'en-US', pageSize: '20', startFrom: '0' },
        headers: {
            'X-RapidAPI-Key': '73b0c57e7dmshfc234d7c5ddefe9p1c562fjsn5ca792270ed1',
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