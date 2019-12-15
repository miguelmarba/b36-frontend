import React from 'react';

import { Link } from 'react-router-dom';

function ClientPreview({_id, client, title}){
    return (
        <div className="client-preview">
            <Link to={`/client/${_id}`}>
                <h2 className="client-title">
                    {title}
                </h2>
            </Link>
            <p className="post-meta">
                Created by <a href="/">
                    {/* 
                    {client.first_name} {client.last_name}
                    */}
                </a>
            </p>
        </div>
    );
}

export default ClientPreview;