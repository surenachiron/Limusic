import axios from "axios";
import { initializedetailssearched } from "../redux/actions/search";
import { changeforloadingsearch } from "../redux/actions/truefalse";

export const getdailstextsearch = async (dispatch, textsearch) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: { term: textsearch, locale: 'en-US', offset: '0', limit: '5' },
        headers: {
            'X-RapidAPI-Key': '73b0c57e7dmshfc234d7c5ddefe9p1c562fjsn5ca792270ed1',
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