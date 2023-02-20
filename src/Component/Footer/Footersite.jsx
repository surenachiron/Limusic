import React, { Fragment } from "react";
import { NavLink } from 'react-router-dom';

import Logosite from '../../img/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faTwitter, faInstagram, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'
import './cssforFooter.css'


const Footersite = () => {

    return (
        <Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="row d-flex flex-column col-12 col-lg-5 col-md-12 col-sm-12 mt-5">
                        <div className="d-flex">
                            <NavLink to='/'>
                                <img src={Logosite} alt='logosite' width="100px" height="100px" />
                            </NavLink>
                            <div className="d-flex flex-column">
                                <h5 className="h5">Chef-Food</h5>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <div className="d-flex">
                                    <FontAwesomeIcon icon={faTelegram} size='1x' color="orange" className="styleicon" style={{ marginLeft: "0" }} />
                                    <FontAwesomeIcon icon={faTwitter} size='1x' color="orange" className="styleicon" />
                                    <FontAwesomeIcon icon={faInstagram} size='1x' color="orange" className="styleicon" />
                                    <FontAwesomeIcon icon={faLinkedin} size='1x' color="orange" className="styleicon" />
                                    <FontAwesomeIcon icon={faDiscord} size='1x' color="orange" className="styleicon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-6 mt-5">
                        <ul>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Site Rules</li>
                            <li>Privacy</li>
                            <li>Registration of sellers</li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-6 mt-5">
                        <ul>
                            <li>Contact Chef-Food</li>
                            <li>Blog</li>
                            <li>Register complaints</li>
                            <li>Application</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default Footersite