import React, {useState} from 'react';

import { Link } from 'react-router-dom';

function Breadcrumb(props){
    const [subheading] = useState(props.subheading);
    return (
        <>
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/" >Inicio</Link>
            </li>
            <li className="breadcrumb-item active"> {subheading} </li>
        </ol>
        </>
    );
}

export default Breadcrumb;