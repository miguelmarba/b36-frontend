import React from 'react';

function LayoutLogin({head, subheading, children}) {
    return (
        <>
        <div className="container">
            <div className="card card-login mx-auto mt-5">
                {children}
            </div>
        </div>
        </>
    );
}

export default LayoutLogin;