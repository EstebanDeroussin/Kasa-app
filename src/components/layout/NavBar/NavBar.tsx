import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav-main">
            <div className="nav-container">
                <img src="/logo/LOGO.png" alt="" />
                <div className="links">
                    <Link className="link" to="/">Acceuil</Link>
                    <Link className="link" to="/about">A-Propos</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
