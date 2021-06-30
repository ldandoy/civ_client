import { useLocation, Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Navbar =  () => {
    const { pathname } = useLocation()
    const { auth } = useSelector(state => state)

    const isActive = (pn) => {
        if (pn === pathname) return 'active'
    }

    return (
        <nav className="navbar navbar-v navbar-bordered-b sticky-top">
            <div className="navbar-title">
                <a id="home" href="/" className="navbar-link">Civilisation <small>v0.5</small></a>
            </div>
            <div className="navbar-content-menu">
                <ul className="navbar-menu-left">
                    {
                        auth.user && <>
                            <li className="navbar-item"><Link to="/univers" className={ `navbar-link ${isActive('/univers')}` }>L'univers</Link></li>
                        </>
                    }
                </ul>
                <ul className="navbar-menu-right">
                    {
                        !auth.user && <>
                            <li className="navbar-item"><Link to="/login" className="navbar-link">Login</Link></li>
                            <li className="navbar-item"><Link to="/register" className="navbar-link">Register</Link></li>
                        </>
                    }
                    {
                        auth.user && <>
                            <li className="navbar-item"><Link to="/my-account" className={ `navbar-link ${isActive('/my-account')}` }>{auth.user.name}</Link></li>
                            <li className="navbar-item"><Link to="/logout" className="navbar-link">Logout</Link></li>
                        </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar