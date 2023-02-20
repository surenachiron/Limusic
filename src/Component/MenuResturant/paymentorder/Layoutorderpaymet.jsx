import React, { Fragment } from "react";
import Informationpayment from "./Informationpayment";
import MapforOrderResponsiv from './MapforOrderResponsiv'
import Payment from "./Payment";

const Layoutorderpaymet = () => {

    return (
        <Fragment>
            <div className="container px-3 h-100">
                <div className="row d-flex mt-5">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 mb-4">
                        <h3 className="text-center mb-3">information payment</h3>
                        <Informationpayment />
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <h3 className="text-center mb-3">order resturant {localStorage.getItem("nameresturantforshoworder")}</h3>
                        <div className="row w-100 border rounded m-0">
                            <MapforOrderResponsiv />
                        </div>
                        <Payment />
                        <button className="mt-4 btn btn-warning w-100 py-2">Payment</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default Layoutorderpaymet