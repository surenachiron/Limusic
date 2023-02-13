import React, { Fragment } from "react";
import axios from "axios";
import Main from '../component/home/Main'

const Homelayout = () => {

    const options = {
        method: 'GET',
        url: 'https://shazam-core.p.rapidapi.com/v2/artists/details',
        params: { artist_id: '136975' },
        headers: { 'X-RapidAPI-Key': '44ac19c88emsh1b739f841285dd0p1a84adjsn50cd0f34d018', 'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com' }
    };

    const testforapi = () => {
        axios.request(options)
            .then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
    }

    return (
        <Fragment>
            <div id="mainhome" className="mt-7 rounded-3xl flex flex-col w-full mb-5 justify-center px-5">
                <Main />
                {/* <button onClick={testforapi}>
                    test
                </button> */}
            </div>
        </Fragment>
    )
}

export default Homelayout