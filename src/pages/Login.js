import { Link, useHistory } from "react-router-dom"
import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"

import Alert from '../components/Alert/Alert'
import LoginPass from "../components/LoginPass/LoginPass"
import LoginSms from "../components/LoginSms/LoginSms"
import GoogleAuthButton from "../components/GoogleAuthButton/GoogleAuthButton"

const Login = () => {
    const [sms, setSms] = useState(false)
    const history = useHistory()

    const { auth } = useSelector(state => state)

    useEffect(() => {
        if (auth.access_token) history.push('/')
    }, [auth.access_token, history])

    return (<>
        <div className="card-title txt-center txt-gray-900">
            { sms ? <h1>Connexion par SMS</h1> : <h1>Connexion au service</h1> }
        </div>
        <div className="card-body">
            <Alert />
            { sms ? <LoginSms /> : <LoginPass /> }
            <div className="txt-center mt-50">
                <GoogleAuthButton />
            </div>
            <div className="txt-center mt-50">
                <div className="grid grid-cols-2">
                    <div>
                        <p><Link to={`/register`} className="txt-size-14 txt-gray-800">Pas encore de compte ?</Link></p>
                        <p><Link to={`/forget_password`} className="txt-size-14 txt-gray-800">Mot de passe oublié ?</Link></p>
                    </div>
                    <div onClick={() => setSms(!sms)}>
                        {sms ? <p className="txt-size-14 txt-gray-800">Connexion via Login</p> : <p className="txt-size-14 txt-gray-800">Connexion via SMS</p>}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Login