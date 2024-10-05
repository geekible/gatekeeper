import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = ({ onRemoveCookie }) => {
    function handleRemoveCookie() {
        onRemoveCookie();
    }

    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">GateKeeper</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user/useredit">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Claims</Link>
                        </li>
                    </ul>
                    <div className="dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownLogout" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-camera"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownLogout">
                            <li><a className="dropdown-item" href="#" onClick={handleRemoveCookie}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
          </nav>
    
          <div className="mt-3 mb-3">
            <div className="container">
                <Outlet />
            </div>
          </div>
        </div>
    );
}

export default Layout;