import React, { Fragment } from "react";
import { useContext } from "react";
import ContextOrderFood from "../../../context/ContextOrderFood";

const Payment = () => {

    const context = useContext(ContextOrderFood)
    const nameresturantt = localStorage.getItem("nameresturantforshoworder")
    const resturant = context.resturant.findIndex(o => o.name === nameresturantt)

    let sum = 0
    for (let i = 0; i < context.resturant[resturant].orderfood.length; i++) {
        let result = context.resturant[resturant].orderfood[i].numberorderr * context.resturant[resturant].orderfood[i].price
        sum += result
    }

    return (
        <Fragment>
            <div className="mt-5">
                <div className="d-flex align-items-center justify-content-center p-3 border border-muted rounded">
                    <div className="d-flex flex-column align-items-start justify-content-center">
                        <div className="d-flex">
                            <h6 className="text-dark fw-bold">Total :</h6>
                            <h6 className="text-muted mx-3 ">${sum}</h6>
                        </div>
                        <div className="d-flex">
                            <h6 className="text-dark fw-bold">TX :</h6>
                            <h6 className="text-muted mx-3">9%</h6>
                        </div>
                        <div className="d-flex">
                            <h6 className="text-dark fw-bold">Seller Courier :</h6>
                            <h6 className="text-muted mx-3 ">$5</h6>
                        </div>
                        <div className="d-flex">
                            <h6 className="text-dark fw-bold">Payable :</h6>
                            <h6 className="text-muted mx-3">${((sum * 109) / 100) + 5}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default Payment;