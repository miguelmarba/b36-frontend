import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function ContactPreview({_id, first_name, last_name, title}){
    return (
        <tr>
            <td><Link to={`/contact/${_id}`}>{first_name}</Link></td>
            <td>{last_name}</td>
            <td>{title}</td>
            <td className="text-center"><Link to={`/contact/edit/${_id}`}><FontAwesomeIcon icon={faUserEdit} /></Link></td>
            <td className="text-center"><Link to={`/contact/delete/${_id}`}><FontAwesomeIcon icon={faUserMinus} /></Link></td>
        </tr>
    );
}

export default ContactPreview;