import './styles.css'
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="navbar bg-body-tertiary bg-primary main-nav" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Github API</Link>
            </div>
        </nav>
    );
}


export default NavBar;