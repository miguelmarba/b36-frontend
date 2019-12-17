import React, {useState} from 'react';
import { Link } from 'react-router-dom';
//mport authenticate from '../utils/authenticate';

function Navbar(props) {
    const [title] = useState(props.title);
    return(
        <>
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
            <Link className="navbar-brand mr-1" to="/">{title}</Link>

            <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                <i className="fas fa-bars"></i>
            </button>

            {/* Navbar Search */}
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>

            {/* Navbar */}
            <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown no-arrow mx-1">
                <Link className="nav-link dropdown-toggle" to="/" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-bell fa-fw"></i>
                <span className="badge badge-danger">9+</span>
                </Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                <Link className="dropdown-item" to="/">Action</Link>
                <Link className="dropdown-item" to="/">Another action</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/">Something else here</Link>
                </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
                <Link className="nav-link dropdown-toggle" to="/" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-envelope fa-fw"></i>
                <span className="badge badge-danger">7</span>
                </Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                <Link className="dropdown-item" to="/">Action</Link>
                <Link className="dropdown-item" to="/">Another action</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/">Something else here</Link>
                </div>
            </li>
            <li className="nav-item dropdown no-arrow">
                <Link className="nav-link dropdown-toggle" to="/" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user-circle fa-fw"></i>
                </Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <Link className="dropdown-item" to="/">Settings</Link>
                <Link className="dropdown-item" to="/">Activity Log</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/" data-toggle="modal" data-target="#logoutModal">Logout</Link>
                </div>
            </li>
            </ul>
        </nav>
        </>
    );
}

export default Navbar;