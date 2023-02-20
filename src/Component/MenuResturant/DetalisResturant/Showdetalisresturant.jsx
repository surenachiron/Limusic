import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCreditCard, faInfo, faMap, faShoppingCart, faStar } from '@fortawesome/fontawesome-free-solid'
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './fordetalisresturants.css'
import { useLocation } from 'react-router-dom'
import ContextOrderFood from "../../../context/ContextOrderFood";

const Showdetalisresturant = () => {

    const location = useLocation();

    const context = useContext(ContextOrderFood)
    const findindexresturant = context.resturant.findIndex(p => ("/" + p.name) === location.pathname)
    const Accebility_resturant = context.resturant[findindexresturant]

    const findgoodlemap = context.image.findIndex(p => p.id === 6)
    const Accebility_googlemap = context.image[findgoodlemap]

    const [show, setShow] = useState(false);
    const handleModal = () => setShow(!show);


    return (
        <div className="m-2 position-sticky" style={{ top: '4.4rem' }}>

            <div className={`d-flex p-2`}>
                <div>
                    <img src={Accebility_resturant.logo} className={`forsizeimagcomponnentshowresturant rounded shadow`} alt={Accebility_resturant.name} />
                </div>
                <div className="d-flex flex-column" style={{ marginLeft: "6px" }}>
                    <div className="d-flex" style={{ marginBottom: "-10px" }}>
                        <div className='d-flex'>
                            <FontAwesomeIcon icon={faStar} color='yellow' style={{ margin: "5px 0 1px 0" }} />
                            <p className="fw-normal">4.3</p>
                        </div>
                        <p className="ms-1 fw-normal">(327comment)</p>
                    </div>
                    <div style={{ width: "200px", height: "65px", overflow: "hidden" }}>
                        <h5 className="text-dark">{Accebility_resturant.name}</h5>
                    </div>
                </div>
            </div>

            <div className="mb-4 mt-2 p-2 d-flex align-items-center justify-content-center" style={{ cursor: "pointer", boxShadow: '0px 1px 0px 2px rgba(0 0 0 / 10%)', borderRadius: "18px", color: 'rgb(0, 184, 98)' }}>
                <Button variant="success" onClick={handleModal} className="w-100 p-2">
                    <FontAwesomeIcon icon={faInfo} className='mx-1' />
                    information and comment
                </Button>
            </div>

            <Modal
                size="lg"
                show={show}
                onHide={handleModal}
                centered
            >
                <Modal.Header closeButton />
                <Modal.Body>
                    <div className="row d-flex">
                        <div className="col-12 col-xl-3 col-lg-3">
                            <img src={Accebility_resturant.logo} className={`forsizeimagcomponnentshowresturant rounded shadow`} alt={Accebility_resturant.name} />
                        </div>
                        <div className="d-flex flex-column col-12 col-xl-6 col-lg-6">
                            <h2>{Accebility_resturant.name}</h2>
                            <p>Iranian, kebab, meat, cholo stew</p>
                            <p>
                                <FontAwesomeIcon className="pe-2" color='orange' icon={faMap} />
                                No. 8, Hostal, next to Shirin Sarai Laden, Yasman Square, Velenjak, Student Blvd
                            </p>
                        </div>
                        <div className="col-12 col-xl-3 col-lg-3">
                            <img {...Accebility_googlemap.img.props} alt="googlemap" />
                        </div>
                    </div>
                    <div className="row d-flex mt-2">
                        <div className="d-flex flex-column text-center col-12 col-xl-4 col-lg-4">
                            <FontAwesomeIcon icon={faClock} color='gray' />
                            <p className="mb-0">Hours of work</p>
                            <strong className="text-success">open</strong>
                        </div>
                        <div className="d-flex flex-column text-center col-12 col-xl-4 col-lg-4">
                            <FontAwesomeIcon icon={faCreditCard} color='gray' />
                            <p className="mb-0">Payment methods</p>
                            <strong>Online</strong>
                        </div>
                        <div className="d-flex flex-column text-center col-12 col-xl-4 col-lg-4">
                            <FontAwesomeIcon icon={faShoppingCart} color='gray' />
                            <p className="mb-0">Minimum shopping cart</p>
                            <strong>does not have</strong>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div >
    )
}

export default Showdetalisresturant;