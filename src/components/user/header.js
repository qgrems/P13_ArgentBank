import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png"
import { addToken, addFirstName, addLastName, userLogin} from '../../redux/redux';
export function HeaderUser() {
    const dispatch = useDispatch()
    function signOut()
    {
        dispatch(addToken(''))
        dispatch(addFirstName(''))
        dispatch(addLastName(''))
        dispatch(userLogin(false))
    }
    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo" >
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <a className="main-nav-item" href="./user.html">
                    <i className="fa fa-user-circle"></i>
                    Tony
                </a>
                <Link onClick={signOut} className="main-nav-item">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </Link>
            </div>
        </nav>
    )
}