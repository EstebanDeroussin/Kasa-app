import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav-main">
            <div className="nav-container">
                <img src="/logo/LOGO.png" alt="" />
                <div className="links">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "link link--active" : "link"
                        }
                    >
                        Acceuil
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "link link--active" : "link"
                        }
                    >
                        A-Propos
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
