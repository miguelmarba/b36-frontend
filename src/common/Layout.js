import React from 'react';
import Navbar from './Navbar'
import Head from './Head';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';

function Layout({head, subheading, children}) {
    return (
        <>
        <Navbar title="Postealo" />
        {/* <Head title={head} subheading={subheading} /> */}
        {/* {children} */}
        <div id="wrapper">
            {/* Sidebar */}
            <Sidebar />
            <div id="content-wrapper">
                <div className="container-fluid">
                    <Breadcrumb subheading={subheading} />
                    {children}
                </div>
                <Footer />
            </div>
        </div>
        </>
    );
}

export default Layout;