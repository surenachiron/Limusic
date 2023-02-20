import React, { Fragment, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom'
import { testformforloginorno } from "../../../../services/useServices";
import SimpleReactValidator from 'simple-react-validator';
import { toast } from "react-toastify";
import ReactLoading from 'react-loading';
import Cookies from 'universal-cookie';

const Modallogin = ({ nameresturant, handelopen }) => {

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
                        localStorage.setItem('nameresturantforshoworder', nameresturant)
                        toast.success("You have successfully entered the site", { position: "top-left" })
                        cookies.set('user', dt.username, { path: '/' })
                        settestforloading(false)
                        epmtystate()
                        navigate('/shoppingcart')
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
            {testforloading ? (<div className="container"><div className="d-flex flex-column align-items-center justify-content-center p-3">
                <ReactLoading type={"spin"} color={"orange"} height={172} width={149} />
                <h4>Checking information</h4>
            </div></div>) : ""}

            <div className={`${showhide} container`}>
                <div className="mb-2 d-flex align-items-center justify-content-center px-4">
                    <div className="d-flex flex-column align-items-start justify-content-start">
                        <div className="form-layer d-flex flex-column align-items-start justify-content-start w-100">
                            <div className="w-100 text-center">
                                <h5>Sign-in</h5>
                            </div>
                            <form className="form-layer d-flex flex-column align-items-start justify-content-start w-100" onSubmit={logiwithapi}>

                                <p className="text-danger">
                                    {error}
                                </p>
                                <div className="input-group">

                                    <label for='inputEmail' className="mt-2 forlabel">enter Email</label>
                                    <input type='email' name="email" id="inputEmail" className="form-control mt-2 w-100 text-start" value={getemail} aria-describedby="email-address" aria onChange={e => {
                                        setEmail(e.target.value);
                                        Validator.current.showMessageFor('email')
                                    }} />

                                    {Validator.current.message('email', getemail, 'required|email')}

                                </div>

                                <div className="input-group">
                                    <label for='password' className="forlabel mt-3">enter Password</label>

                                    <input type='password' name="password" id="password" className='form-control mt-2 w-100 text-start boxshadowbutton' aria-describedby="password" value={getpassword} onChange={e => {
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
                            <div className="d-flex flex-column align-items-center m-auto">
                                <p className="mb-1">New To chef-food ?</p>
                                <p className="btn text-primary" onClick={handelopen}>Create your Chef-Food account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default Modallogin