import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Sidebar(props){
    const [title, setTitle] = useState(props.title);
    return (
        <ul className="sidebar navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contacts">Contacts</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span></a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/logout">Cerrar sesión</Link>
            </li>
        </ul>
    );
}

export default Sidebar;