import axios from "axios";
import { changeloadinglistchart, changeloadingtracktopforcountrie, initializelistcountrieforcharts, listtopmusicforcountriecharts } from "../redux/actions/charts";

export const usegetlistcountirechart = (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/charts/list',
        headers: {
            'X-RapidAPI-Key': '8c6feac019mshba9d640dfc67c3ap119555jsna7c605a30b66',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(changeloadinglistchart(true))
    axios.request(options).then(function (response) {
        console.log(response.data);
        dispatch(initializelistcountrieforcharts(response.data))
        dispatch(changeloadinglistchart(false))
    }).catch(function (error) {
        console.error(error);
        dispatch(changeloadinglistchart(false))
    });
}

export const usegettrackschart = (dispatch, countriesid, listidd) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/charts/track',
        params: { locale: countriesid, listId: listidd, pageSize: '50', startFrom: '0' },
        headers: {
            'X-RapidAPI-Key': '8c6feac019mshba9d640dfc67c3ap119555jsna7c605a30b66',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    dispatch(changeloadingtracktopforcountrie(true))
    axios.request(options).then(function (response) {
        dispatch(listtopmusicforcountriecharts(response.data))
        dispatch(changeloadingtracktopforcountrie(false))
        console.log(response.data)
    }).catch(function (error) {
        console.error(error);
        dispatch(changeloadingtracktopforcountrie(false))
    });
}