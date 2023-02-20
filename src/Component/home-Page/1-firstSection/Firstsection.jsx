import React, { Fragment } from "react";
import '../layout/forsectionhomepage.css'

const Firstsection = () => {

    return (
        <Fragment>
            <div className="backgroundfirstsection">
                <div className="mx-5 d-flex h-100 ">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-md-10 col-sm-12 d-flex flex-column align-items-start justify-content-center divcollesftsection1">
                            <h3 className="forh1firstsection">WELLCOME TO CHEF-FOOD</h3>
                            <p className="text-white mt-3 fw-bold">Online ordering of food, fruit, bread, sweets and...</p>
                            <a href="#StartOrderFood" style={{ textDecoration: "none", color: 'black' }}>
                                <button className="btn btn-warning p-3 mt-3 fw-bold" >
                                    start Food in Chef-Food
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default Firstsection