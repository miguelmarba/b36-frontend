import React from 'react';

import { Link } from 'react-router-dom';

function ContactPreview({_id, first_name, last_name, title}){
    return (
        <tr>
            <td><Link to={`/contact/${_id}`}>{first_name}</Link></td>
            <td>{last_name}</td>
            <td>{title}</td>
            <td><Link to={`/contact/edit/${_id}`}>Editar</Link></td>
            <td><Link to={`/contact/delete/${_id}`}>Eliminar</Link></td>
        </tr>
    );
}

export default ContactPreview;