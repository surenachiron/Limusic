import axios from "axios";
import { initializedetailssearched } from "../redux/actions/search";
import { changeforloadingsearch } from "../redux/actions/truefalse";

export const getdailstextsearch = async (dispatch, textsearch) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: { term: textsearch, locale: 'en-US', offset: '0', limit: '5' },
        headers: {
            'X-RapidAPI-Key': '8c6feac019mshba9d640dfc67c3ap119555jsna7c605a30b66',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(changeforloadingsearch(true))
    await axios.request(options).then(function (response) {
        dispatch(initializedetailssearched(response.data))
        console.log(response.data.tracks)
        dispatch(changeforloadingsearch(false))
    }).catch(function (error) {
        dispatch(changeforloadingsearch(false))
    });
}