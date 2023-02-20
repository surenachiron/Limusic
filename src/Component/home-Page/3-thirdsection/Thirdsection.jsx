import React, { Fragment, useState, useEffect } from "react";
import testKebab from './kebabforOrderFood.jpg'
import '../layout/forsectionhomepage.css'

const Thirdsection = () => {

    let hidedivimag = ""

    const [widthwindow, setWidthwindow] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidthwindow(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    if (widthwindow < "1200") {
        hidedivimag = 'd-none'
    } else {
        hidedivimag = 'd-block'
    }

    return (
        <Fragment>
            <div className="container">
                <div className="divmainsection3 pb-3">
                    <div className="d-flex row">
                        <div className="d-flex flex-column col-12 col-xl-6 col-lg-12 col-sm-12 p-5 mt-5">
                            <h2 className="mb-4">Apllication Chef-Food</h2>
                            <p className="mb-5 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In voluptates ducimus quidem illum expedita soluta commodi possimus, voluptatem nam obcaecati reprehenderit, velit, autem totam laudantium. Et tempora laboriosam itaque, sunt commodi dolorem impedit iure? Impedit dolorem error voluptatibus sed nesciunt!
                            </p>
                            <h6>Lorem ipsum dolor sit amet, consectetur</h6>
                            <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-12 d-flex rounded bg-light p-2">
                                <input type="phone" className="inputnewstelersection3 col-6 col-lg-8 col-sm-6" placeholder="09*********" />
                                <button className="btn btn-warning col-6 col-lg-4 col-sm-6">get Link</button>
                            </div>
                        </div>
                        <div className={`${hidedivimag} col-12 col-xl-6 p-5`}>
                            <img src={testKebab} className="w-100 h-100" alt="testkebab" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 col-sm-12 ps-5">
                            <button className="btn btn-dark me-2">bazar</button>
                            <button className="btn btn-info me-2">myket</button>
                            <button className="btn btn-danger me-2">googleplay</button>
                            <button className="btn btn-primary">apple store</button>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default Thirdsection