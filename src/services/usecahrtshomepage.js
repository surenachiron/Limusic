import axios from "axios";
import { initializechartsspecificsong } from "../redux/actions/chartshome";

export const usegetspecificchartsong = (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/charts/track',
        params: { locale: 'en-US', pageSize: '20', startFrom: '0' },
        headers: {
            'X-RapidAPI-Key': 'cd4b6d0810mshd7f35afecfa9de6p12fc65jsn1469dfea0d69',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        dispatch(initializechartsspecificsong(response.data))
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}