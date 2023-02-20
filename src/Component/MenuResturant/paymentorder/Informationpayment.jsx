import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faMapMarkerAlt } from "@fortawesome/fontawesome-free-solid";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

const Informationpayment = () => {

    return (
        <Fragment>
            <div className="border rounded w-100">
                <div className="p-4">
                    <div className="d-flex justify-content-between">
                        <p>location</p>
                        <button className="btn">change location</button>
                    </div>
                    <div className="d-flex justify-content-between align-items-center rounded px-3" style={{ border: "1px solid #00b862" }}>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-sm me-3" style={{ height: "25px" }} color="orange" />
                            <div className="mt-2">
                                <h6>test</h6>
                                <p>Tehran, Pasdaran ....</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faCheckCircle} className="fa-sm" style={{ height: "25px" }} color="green" />
                    </div>
                </div>
                <div className="p-4">
                    <p>Payment Method</p>
                    <div className="d-flex justify-content-between align-items-center rounded px-3" style={{ border: "1px solid #00b862" }}>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faPaypal} className="fa-sm me-3" style={{ height: "25px" }} color="orange" />
                            <div className="mt-2">
                                <h6>online payment</h6>
                                <p>application online</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faCheckCircle} className="fa-sm" style={{ height: "25px" }} color="green" />
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default Informationpayment;