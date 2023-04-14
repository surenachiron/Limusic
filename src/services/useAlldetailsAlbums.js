import { changeloadingalbums, initializealbumsartist, initializebackupdetailsalbumsforplaylist } from "../redux/actions/albums";
import axios from "axios";
import { getalldetailsartist } from "./useEndpointspageartist";

export const usealldetailsalbums = async (dispatch, idalbum) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/albums/get-details',
        params: { id: idalbum, l: 'en-US' },
        headers: {
            'X-RapidAPI-Key': '8c6feac019mshba9d640dfc67c3ap119555jsna7c605a30b66',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(changeloadingalbums(true))
    await axios.request(options).then(function (response) {
        dispatch(initializealbumsartist(response.data))
        dispatch(initializebackupdetailsalbumsforplaylist(response.data))
        getalldetailsartist(dispatch, response.data.data.map(o => o.relationships).map(o => o.artists.data).map(o => o[0])[0].id)
        dispatch(changeloadingalbums(false))
    }).catch(function (error) {
        dispatch(changeloadingalbums(false))
        console.error(error);
    });
}