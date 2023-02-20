import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/fontawesome-free-solid'
import '../ShowFood/Csspartsshowfood.css'

const HeaderOrder = ({lenghorder}) => {

    let truee = ""
    if (lenghorder === 0) {
        truee =
            <div className="mt-3 mb-5 d-flex flex-column align-items-center justify-content-center">
                <FontAwesomeIcon icon="shopping-cart" className="text-muted mb-2">
                </FontAwesomeIcon>
                <h6 className="text-muted" style={{ fontSize: "20px", fontWeight: "700" }}>Your shopping cart is empty!
                </h6>
            </div>
    }

    return (
        <div className="mt-3 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center">
                <p className="fw-bold mx-2">Seller Courier : 5$</p>
                <FontAwesomeIcon icon={faMotorcycle} color="orange" className="ms-1 mb-3" />
            </div>
            {truee}
        </div>
    )

}

export default HeaderOrder