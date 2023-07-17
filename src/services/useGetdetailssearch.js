import axios from "axios";
import { changeforloadingsearch, initializedetailssearched } from "../redux/actions/search";

export const getdailstextsearch = async (dispatch, textsearch) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: { term: textsearch, locale: 'en-US', offset: '0', limit: '5' },
        headers: {
            'X-RapidAPI-Key': '0ecaea8e8emshface22eb1c51059p12cc2djsn342a6cff667f',
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
