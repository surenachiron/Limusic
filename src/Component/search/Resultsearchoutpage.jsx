import React, { Fragment, useContext, useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import ContextOrderFood from "../../context/ContextOrderFood";
import './styleforresultsearch.css';

const Resultsearchoutpage = () => {

    const location = useLocation();
    const context = useContext(ContextOrderFood)

    const [gettextsearch, settextsearch] = useState("")
    const [getresultsearch, setresultsearch] = useState([])
    let statesearchfake = []

    const handleshowfoodfortextsearch = async () => {
        for (let i = 0; i <= context.resturant.length; i++) {
            let motherfucker = await context.resturant[i].foods.length
            for (let m = 0; m < motherfucker; m++) {
                let namefoodse = await context.resturant[i].foods[m].namefood
                if (gettextsearch === namefoodse.slice(0, gettextsearch.length) && gettextsearch.length >= 1) {
                    let testressear = {
                        img: context.resturant[i].foods[m].picture,
                        namefood: context.resturant[i].foods[m].namefood,
                        description: context.resturant[i].foods[m].descriptionfood,
                        nameres: context.resturant[i].name,
                    }
                    statesearchfake.push(testressear)
                }
            }
            setresultsearch(statesearchfake)
        }
    }

    useEffect(() => {
        settextsearch(location.pathname.slice(14))
        handleshowfoodfortextsearch()
    }, [location.pathname])

    useEffect(() => {
        handleshowfoodfortextsearch()
    }, [gettextsearch])

    useEffect(() => {
        settextsearch(location.pathname.slice(14))
        handleshowfoodfortextsearch()
    }, [])



    return (
        <Fragment>
            <div className="container mt-4 h-100">
                <h3>result search for " {gettextsearch} " : </h3>
                <div className="row gy-4 my-2">
                    {getresultsearch.length >= 1 ? (getresultsearch.map(o =>
                        <div className="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12 h-100" role="button">
                            <NavLink to={`/${o.nameres}`} className='textcolor'>
                                <div className="card d-flex flex-column text-center stylehovercard">
                                    <div className="mt-3 card-img-right" style={{ marginRight: "5px", padding: "0px 9px" }}>
                                        <img src={o.img} alt={o.description} width='112' height='112' className="rounded" />
                                    </div>
                                    <div className="card-body d-flex flex-column w-100" style={{ padding: "14px", overflowX: "auto" }}>
                                        <h6 className="card-title w-100">{o.namefood}
                                        </h6>
                                        <p className="card-text mt-1 textdescription" >{o.description}</p>
                                    </div>
                                    <div className="text-center pb-2">
                                        <button className="btn btn-warning w-25">buy</button>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    )) :
                        <div className="text-center text-danger">
                            <h3>Unfortunately, we could not find the food you are looking for</h3>
                        </div>
                    }
                </div>
            </div>
        </Fragment >
    )
}

export default Resultsearchoutpage;