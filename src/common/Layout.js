import React from 'react';
import Navbar from './Navbar'
import Head from './Head';
import Sidebar from './Sidebar';

function Layout({head, subheading, children}) {
    return (
        <>
        <Navbar title="Postealo" />
        <Head title={head} subheading={subheading} />
        {children}
        <div className="wrapper">
            {/* Sidebar */}
            <Sidebar />
        </div>
        </>
    );
}

export default Layout;