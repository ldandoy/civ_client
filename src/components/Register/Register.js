import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { register } from '../../redux/actions/authActions'

const Register =  () => {
    const initialState = { name: "", account: "", password: "", cf_password: "" }
    const [form, setForm] = useState(initialState)
    const {name, account, password, cf_password} = form
    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)
    const dispatch = useDispatch()

    const onChangeInputHandler = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(register(form))
    }

    return (
        <form className="form-no-bordered" onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" name="name" value={name} className="form-input" onChange={onChangeInputHandler} placeholder="Nom" />
            </div>
            <div className="form-group">
                <label htmlFor="" className="form-label">Identifiant</label>
                <input type="text" name="account" value={account} className="form-input" onChange={onChangeInputHandler} placeholder="Email ou numéro de téléphone" />
            </div>
            <div className="form-group">
                <label htmlFor="" className="form-label">Mot de passe</label>
                <input type={typePass ? "text" : "password" } name="password" value={password} className="form-input" onChange={onChangeInputHandler} placeholder="Mot de passe" />
                <small onClick={() => setTypePass(!typePass)}>
                    { typePass ? 'Hide' : "Show" }
                </small>
            </div>
            <div className="form-group">
                <label htmlFor="" className="form-label">Confirmez votre mot de passe</label>
                <input type={typeCfPass ? "text" : "password" } name="cf_password" value={cf_password} className="form-input" onChange={onChangeInputHandler} placeholder="Confirmez Mot de passe" />
                <small onClick={() => setTypeCfPass(!typeCfPass)}>
                    { typeCfPass ? 'Hide' : "Show" }
                </small>
            </div>
            <div className="form-group">
                <button className="btn bg-purple-600 txt-white-100 hover:bg-purple-900 w-100 p-20"
                disabled={(name && account && password) ? false : true}
                >
                    Enregistrez
                </button>
            </div>
        </form>
    )
}

export default Register