import axios from "axios";
import { changeloadinglistchart, changeloadingtracktopforcountrie, initializelistcountrieforcharts, listtopmusicforcountriecharts } from "../redux/actions/charts";

export const usegetlistcountirechart = (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/charts/list',
        headers: {
            'X-RapidAPI-Key': '80e18ff079msh2944b16fa1e654fp19830fjsneea22c004e2b',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(changeloadinglistchart(true))
    axios.request(options).then(function (response) {
        dispatch(initializelistcountrieforcharts(response.data))
        dispatch(changeloadinglistchart(false))
    }).catch(function (error) {
        dispatch(changeloadinglistchart(false))
    });
}

export const usegettrackschart = (dispatch, countriesid, listidd) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/charts/track',
        params: { locale: countriesid, listId: listidd, pageSize: '50', startFrom: '0' },
        headers: {
            'X-RapidAPI-Key': '80e18ff079msh2944b16fa1e654fp19830fjsneea22c004e2b',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(changeloadingtracktopforcountrie(true))
    axios.request(options).then(function (response) {
        dispatch(listtopmusicforcountriecharts(response.data))
        dispatch(changeloadingtracktopforcountrie(false))
    }).catch(function (error) {
        dispatch(changeloadingtracktopforcountrie(false))
    });
}