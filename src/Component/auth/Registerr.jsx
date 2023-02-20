import React, { Fragment, useRef, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'

import SimpleReactValidator from 'simple-react-validator';
// import { registerUser } from '../../services/useServices';
import Helmet from "react-helmet";
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify'
import Cookies from 'universal-cookie';

import LogoWebSite from '../../img/logo.jpg'
import './loginandregistercss.css'

const Registerr = () => {

    const cookies = new Cookies();

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [, forupdaterender] = useState()
    const [testforloading, settestforloading] = useState(false)

    const reset = () => {
        setFullname("");
        setEmail("");
        setPassword("");
    };

    let navigate = useNavigate();
    const Validator = useRef(new SimpleReactValidator({
        element: message => <div style={{ fontFamily: "cursive", color: "rgb(255 79 96)" }} > <p>{message} </p></div>
    }))

    let showhide = ""
    if (testforloading) {
        showhide = "d-none"
    } else {
        showhide = "d-block"
    }

    // const handleSubmit = async event => {
    // event.preventDefault();
    // const user = {
    //     fullname,
    //     email,
    //     password
    // };
    // console.log(user)
    // try {
    //     if (Validator.current.allValid()) {
    //         settestforloading(true)
    //         const { status, data } = await registerUser(user);
    //         if (status === 201) {
    //             toast.success('Registration was successful', {
    //                 position: "top-left",
    //                 autoClose: 3000,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //             });
    //             localStorage.setItem("token", data.token);
    //             settestforloading(false)
    //             navigate('/', { replace: true })
    //             reset();
    //             console.log(status, data)
    //         } else {
    //             toast.error("Registration was not successful", { position: "top-left" })
    //             console.log(status, data)
    //         }
    //         console.log(status, data)
    //     } else {
    //         Validator.current.showMessages()
    //         forupdaterender(1)
    //     }
    // } catch (ex) {
    //     settestforloading(false)
    //     toast.error("An error has occurred in the system", { position: "top-left" })
    //     console.log(ex, ex.response.data.message)
    // }
    // };

    const handleSubmit = async event => {
        event.preventDefault();
        if (Validator.current.allValid()) {
            settestforloading(true)
            cookies.set('user', fullname, { path: '/' })
            toast.success('Registration was successful', {
                position: "top-left",
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: true,
            });
            settestforloading(false)
            reset();
            navigate('/')
        } else {
            Validator.current.showMessages()
            forupdaterender(1)
        }
    };

    return (
        <Fragment>
            {testforloading ? (<div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
                <ReactLoading type={"spin"} color={"orange"} height={250} width={200} />
                <h5>is conection</h5>
            </div>) : ""}
            <div className={`${showhide} container`}>
                <Helmet>
                    <title>chef-food - register</title>
                </Helmet>


                <div className="row" style={{ height: "100vh" }}>
                    <div className="col-12 col-xl-4 col-lg-3 col-md-3"></div>
                    <div className="col-12 col-xl-4 col-lg-6 col-md-6 d-flex align-items-center justify-content-center p-4">
                        <div className="d-flex flex-column align-items-start justify-content-start">

                            <div className="d-flex justify-content-between w-100">
                                <div className="mt-2">
                                    <h5>Hi</h5>
                                    <h5>Register</h5>
                                </div>
                                <NavLink to='/'>
                                    <img src={LogoWebSite} alt='logosite' width="100px" height="100px" />
                                </NavLink>
                            </div>


                            <label for='fullname' className="mt-2 forlabel">Your name</label>

                            <input type='text' id="fullname" name="fullname" className="form-control mt-2 w-100 text-start" onChange={event => {
                                setFullname(event.target.value)
                                Validator.current.showMessageFor('fullname')
                            }} />
                            {Validator.current.message('fullname', fullname, 'required')}

                            <label for='email' className="mt-3 forlabel">Mobile number or email
                            </label>

                            <input type='text' id="email" namer="email" className="form-control mt-2 w-100 text-start" onChange={event => {
                                setEmail(event.target.value)
                                Validator.current.showMessageFor('email')
                            }} />
                            {Validator.current.message('email', email, 'required|email')}

                            <label for='password' className="forlabel mt-3">Enter password</label>

                            <input type='password' id="password" name="password" className='form-control mt-2 w-100 text-start' placeholder="At least 6 characters" onChange={event => {
                                setPassword(event.target.value)
                                Validator.current.showMessageFor('password')
                            }} />
                            {Validator.current.message('password', password, 'required|min:6')}

                            <input type="submit" value="Continue" className="btn btn-warning w-100 mt-3 mb-2" onClick={handleSubmit} />

                            <p className="fortagp">By creating an account, you agree to Amazon's <NavLink to='/'>Conditions of Use</NavLink> and <NavLink to='/'>Privacy Notice</NavLink></p>
                            <div className="d-flex flex-column align-items-center m-auto">
                                <p className="mb-1">Already have an account ? <NavLink to='/login' className='fornavlinkcreateaccunt'>Sign-In</NavLink></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 col-lg-3 col-md-3"></div>
                </div>
            </div>
        </Fragment>
    )

}

export default Registerr