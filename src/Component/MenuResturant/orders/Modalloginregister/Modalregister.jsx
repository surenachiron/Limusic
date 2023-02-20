import React, { Fragment, useRef, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'

import { toast } from "react-toastify";
import SimpleReactValidator from 'simple-react-validator';
import ReactLoading from 'react-loading';
import Cookies from 'universal-cookie';

const Modallregister = ({ nameresturant, handelopen }) => {

    const cookies = new Cookies();

    const [getusername, setUsername] = useState("");
    const [getemail, setEmail] = useState("");
    const [getpassword, setPassword] = useState("");
    const [, forupdaterender] = useState()
    const [testforloading, settestforloading] = useState(false)

    const reset = () => {
        setUsername("");
        setEmail("");
        setPassword("");
    };

    let navigate = useNavigate();
    const Validator = useRef(new SimpleReactValidator({
        element: message => <div style={{ fontFamily: "cursive", color: "rgb(255 79 96)" }} > <p>{message} </p></div>
    }))

    const handleSubmit = async event => {
        event.preventDefault();
        if (Validator.current.allValid()) {
            settestforloading(true)
            localStorage.setItem('nameresturantforshoworder', nameresturant)
            cookies.set('user', getusername, { path: '/' })
            toast.success('Registration was successful', {
                position: "top-left",
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: true,
            });
            settestforloading(false)
            reset();
            navigate('/shoppingcart')
        } else {
            Validator.current.showMessages()
            forupdaterender(1)
        }
    };

    let showhide = ""
    if (testforloading) {
        showhide = "d-none"
    } else {
        showhide = "d-block"
    }

    return (
        <Fragment>
            {testforloading ? (<div className="container"><div className="d-flex flex-column align-items-center justify-content-center p-3">
                <ReactLoading type={"spin"} color={"orange"} height={172} width={149} />
                <h4>Checking information</h4>
            </div></div>) : ""}

            <div className={`${showhide} container`}>
                <div className="row">
                    <div className="col-12 col-xl-12 col-lg-12 col-md-12 d-flex align-items-center justify-content-center px-4">
                        <div className="d-flex flex-column align-items-start justify-content-start">
                            <div className="form-layer d-flex flex-column align-items-start justify-content-start w-100">
                                <div className="w-100 text-center">
                                    <h5>register</h5>
                                </div>
                                <label for='fullname' className="mt-2 forlabel">Your name</label>

                                <input type='text' id="fullname" name="fullname" className="form-control mt-2 w-100 text-start" onChange={event => {
                                    setUsername(event.target.value)
                                    Validator.current.showMessageFor('fullname')
                                }} />
                                {Validator.current.message('fullname', getusername, 'required')}

                                <label for='email' className="mt-3 forlabel">Mobile number or email
                                </label>

                                <input type='text' id="email" namer="email" className="form-control mt-2 w-100 text-start" onChange={event => {
                                    setEmail(event.target.value)
                                    Validator.current.showMessageFor('email')
                                }} />
                                {Validator.current.message('email', getemail, 'required|email')}

                                <label for='password' className="forlabel mt-3">Enter password</label>

                                <input type='password' id="password" name="password" className='form-control mt-2 w-100 text-start' placeholder="At least 6 characters" onChange={event => {
                                    setPassword(event.target.value)
                                    Validator.current.showMessageFor('password')
                                }} />
                                {Validator.current.message('password', getpassword, 'required|min:6')}

                                <input type="submit" value="Continue" className="btn btn-warning w-100 mt-3 mb-2" onClick={handleSubmit} />

                                <p className="fortagp">By creating an account, you agree to Amazon's <NavLink to='/'>Conditions of Use</NavLink> and <NavLink to='/'>Privacy Notice</NavLink></p>
                                <div className="d-flex flex-column align-items-center m-auto">
                                    <p className="btn text-primary" onClick={handelopen}>Already have an account ? Sign-In</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Modallregister