import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import Modallogin from "./Modalloginregister/Modallogin";
import Modallregister from "./Modalloginregister/Modalregister";

const FooterOrder = ({ resturantorder, nameresturant }) => {

    let navigate = useNavigate();

    let sum = 0
    for (let i = 0; i < resturantorder.length; i++) {
        let result = resturantorder[i].numberorderr * resturantorder[i].price
        sum += result
    }

    const [showlogin, setShowlogin] = useState(false);
    const handleModallogin = () => setShowlogin(!showlogin);
    const [showregister, setShowregister] = useState(false);
    const handleModalregister = () => setShowregister(!showregister);

    const closeloginopenregister = () => {
        handleModallogin();
        handleModalregister();
    }

    let loginmodal =
        <Modal
            size="md"
            show={showlogin}
            onHide={handleModallogin}
            centered
        >
            <Modal.Header closeButton className="mx-3" />
            <Modal.Body>
                <Modallogin nameresturant={nameresturant} handelopen={() => closeloginopenregister()} />
            </Modal.Body>
        </Modal>;

    let registermodal =
        <Modal
            size="md"
            show={showregister}
            onHide={handleModalregister}
            centered
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <Modallregister nameresturant={nameresturant} handelopen={() => closeloginopenregister()} />
            </Modal.Body>
        </Modal>;

    const setnameresturan = () => {
        if (document.cookie !== null && document.cookie !== undefined && document.cookie !== '') {
            localStorage.removeItem('nameresturantforshoworder');
            localStorage.setItem('nameresturantforshoworder', nameresturant)
            navigate('/shoppingcart')
            setShowlogin(false)
            setShowregister(false)
        } else {
            handleModallogin()
        }
    }



    let offfalse = ""
    if (resturantorder.length >= 1) {
        offfalse =
            <div className="mt-5">
                <div className="d-flex align-items-center justify-content-center p-3 border border-muted rounded">
                    <div className="d-flex flex-column align-items-start justify-content-center">
                        <div className="d-flex">
                            <h6 className="text-dark">Total :</h6>
                            <h6 className="text-muted mx-3">${sum}</h6>
                        </div>
                        <div className="d-flex">
                            <h6 className="text-dark">TX :</h6>
                            <h6 className="text-muted mx-3">9%</h6>
                        </div>
                        <div className="d-flex">
                            <h6 className="text-dark">Seller Courier :</h6>
                            <h6 className="text-muted mx-3">$5</h6>
                        </div>
                        <div className="d-flex">
                            <h6 className="text-dark">Payable :</h6>
                            <h6 className="text-muted mx-3">${((sum * 109) / 100) + 5}</h6>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-2 mb-3">
                    <button onClick={setnameresturan} className="btnproforadd" style={{ fontWeight: "bold", padding: "14px 41px" }}>the payment</button>
                </div>
                {loginmodal}
                {registermodal}
            </div>
    }

    return (
        <Fragment>
            {offfalse}
        </Fragment >
    )
}

export default FooterOrder