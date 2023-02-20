import React, { Fragment, useState, useEffect } from "react";
import testKebab from './kebabforOrderFood.jpg'

const Fourthsection = () => {

    let hideinscreenunderlg = ""

    const [widthwindow, setWidthwindow] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidthwindow(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    if (widthwindow <= "1200") {
        hideinscreenunderlg = 'd-none'
    } else {
        hideinscreenunderlg = 'd-block'
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row formargintopsection4">
                    <div className="col-12 col-xl-8 col-lg-12 col-md-12 col-sm-12 p-4">
                        <h2 className="mt-4 h2">Are you a business owner?</h2>
                        <h6 className="mt-5 h6 text-muted">Bring your business online with Chef-Food and increase your sales</h6>
                        <button className="btn btn-warning mt-5">Registration of sellers</button>
                    </div>
                    <div className={`${hideinscreenunderlg} col-12 col-lg-4 col-sm-12 p-4`}>
                        <img src={testKebab} className="w-100 h-75" alt="testkebab" />
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default Fourthsection