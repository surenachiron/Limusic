import React, { Fragment, useState, useRef } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';

import { testformforloginorno } from '../../services/useServices'
import SimpleReactValidator from 'simple-react-validator';
import { toast } from "react-toastify";
import { Helmet } from 'react-helmet'
import ReactLoading from 'react-loading';

import LogoWebSite from '../../img/logo.jpg'
import './loginandregistercss.css'

const Loginn = () => {

    const cookies = new Cookies();

    const [getemail, setEmail] = useState("")
    const [getpassword, setPassword] = useState("")
    const [, setData] = useState([])
    const [testforloading, settestforloading] = useState(false)
    const [error, seterror] = useState('')
    const [, forupdaterender] = useState("")

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

    const epmtystate = () => {
        setEmail("")
        setPassword('')
        seterror('')
    }

    const logiwithapi = async event => {
        event.preventDefault();
        try {
            if (Validator.current.allValid()) {
                settestforloading(true);
                const { data } = await testformforloginorno()
                setData(data)
                data.map(dt => {
                    if (getemail === dt.email && getpassword === dt.username) {
                        toast.success("You have successfully entered the site", { position: "top-left" })
                        cookies.set('user', dt.username, { path: '/' })
                        settestforloading(false)
                        epmtystate()
                        navigate('/', { replace: true })
                    }
                    else {
                        settestforloading(false)
                        seterror('email or password invalid')
                    }
                })
            } else {
                Validator.current.showMessages()
                forupdaterender(1)
            }
        } catch (err) {
            settestforloading(false)
        }
    }


    return (
        <Fragment>

            {testforloading ? (<div className="container"><div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
                <ReactLoading type={"spin"} color={"orange"} height={172} width={149} />
                <h4>Checking information</h4>
            </div></div>) : ""}

            <Helmet>
                <title>chef-food - login</title>
            </Helmet>

            <div className={`${showhide} container`}>
                <div className="row" style={{ height: "100vh" }}>

                    <div className="col-12 col-xl-4 col-lg-3 col-md-3"></div>

                    <div className="col-12 col-xl-4 col-lg-6 col-md-6 d-flex align-items-center justify-content-center px-4">

                        <div className="d-flex flex-column align-items-start justify-content-start">

                            <div className="d-flex align-items-center justify-content-center w-100">
                                <NavLink to='/'>
                                    <img src={LogoWebSite} alt='logosite' width="100px" height="100px" />
                                </NavLink>
                            </div>

                            <div className="form-layer d-flex flex-column align-items-start justify-content-start w-100">
                                <h5>Hi</h5>

                                <h5>Sign-in</h5>

                                <form className="form-layer d-flex flex-column align-items-start justify-content-start w-100" onSubmit={logiwithapi}>

                                    <p className="text-danger">
                                        {error}
                                    </p>
                                    <div className="input-group">

                                        <label for='inputEmail' className="mt-2 forlabel">enter Email</label>
                                        <input type='email' name="email" id="inputEmail" className="form-control mt-2 w-100 text-start rounded" value={getemail} aria-describedby="email-address" aria onChange={e => {
                                            setEmail(e.target.value);
                                            Validator.current.showMessageFor('email')
                                        }} />

                                        {Validator.current.message('email', getemail, 'required|email')}

                                    </div>

                                    <div className="input-group">
                                        <label for='password' className="forlabel mt-3">enter Password</label>

                                        <input type='password' name="password" id="password" className='form-control mt-2 w-100 text-start rounded' aria-describedby="password" value={getpassword} onChange={e => {
                                            setPassword(e.target.value);
                                            Validator.current.showMessageFor('password')
                                        }} />

                                        {Validator.current.message('password', getpassword, 'required|min:6')}
                                    </div>

                                    <button className="btn btn-warning w-100 mt-3 mb-2">
                                        Sign-in
                                    </button>
                                </form>
                            </div>

                            <div className="w-100">
                                <p className="fortagp">
                                    Your entry means acceptance of
                                    <NavLink to='/'> website terms </NavLink>
                                    and
                                    <NavLink to='/'> privacy rules </NavLink>
                                </p>
                                <div className="d-flex flex-column align-items-center m-auto">
                                    <p className="mb-1">New To chef-food ?</p>
                                    <NavLink to='/register' className='fornavlinkcreateaccunt'>Create your Chef-Food account</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 col-lg-3 col-md-3"></div>
                </div>
            </div>
        </Fragment>
    )

}

export default Loginn