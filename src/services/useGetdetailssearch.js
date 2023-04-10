import axios from "axios";
import { initializedetailssearched } from "../redux/actions/search";
import { changeforloadingsearch } from "../redux/actions/truefalse";

export const getdailstextsearch = async (dispatch, textsearch) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: { term: textsearch, locale: 'en-US', offset: '0', limit: '5' },
        headers: {
            'X-RapidAPI-Key': '728cd60dacmsh74f0780cb00eb90p1eda2cjsn4300a1df01fb',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(changeforloadingsearch(true))
    await axios.request(options).then(function (response) {
        dispatch(initializedetailssearched(response.data))
        dispatch(changeforloadingsearch(false))
    }).catch(function (error) {
        dispatch(changeforloadingsearch(false))
    });
}