import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import ClientPreview from '../components/ClientPreview';
import Layout from '../common/Layout';

const ALL_CLIENTS =  gql`
    query getAllPosts{
        getPosts{
            _id
            title
            author{
                first_name
                last_name
            }
        }
    }
`;

const ALL_CONTACTS =  gql`
    query getAllContacts{
        getContacts{
            _id
            first_name
            last_name
            title
        }
    }
`;

function Home(){
    const {data, loading, error} = useQuery(ALL_CLIENTS);
    if(loading) return <h2>Cargando...</h2>
    if(error) return <h2>Hubo un error :(</h2>
    return (
        <>
        <Layout head="Bienvenidos" subheading="Dashboard" >
            <>
            <div className="row">
                <div class="col-xl-3 col-sm-6 mb-3">
                    <div class="card text-white bg-primary o-hidden h-100">
                        <div class="card-body">
                            <div class="card-body-icon">
                            <i class="fas fa-fw fa-comments"></i>
                            </div>
                            <div class="mr-5">26 New Messages!</div>
                        </div>
                        <a class="card-footer text-white clearfix small z-1" href="#">
                            <span class="float-left">View Details</span>
                            <span class="float-right">
                            <i class="fas fa-angle-right"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-3">
                    <div class="card text-white bg-warning o-hidden h-100">
                        <div class="card-body">
                            <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                            </div>
                            <div class="mr-5">11 New Tasks!</div>
                        </div>
                        <a class="card-footer text-white clearfix small z-1" href="#">
                            <span class="float-left">View Details</span>
                            <span class="float-right">
                            <i class="fas fa-angle-right"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-3">
                    <div class="card text-white bg-success o-hidden h-100">
                        <div class="card-body">
                            <div class="card-body-icon">
                            <i class="fas fa-fw fa-shopping-cart"></i>
                            </div>
                            <div class="mr-5">123 New Orders!</div>
                        </div>
                        <a class="card-footer text-white clearfix small z-1" href="#">
                            <span class="float-left">View Details</span>
                            <span class="float-right">
                            <i class="fas fa-angle-right"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            
            <h1>Blank Page</h1>
            <hr />
            <p>This is a great starting point for new custom pages.</p>
            <main className="container">
                <section className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {
                            data.getPosts.map((post) => (
                                <ClientPreview _id={post._id}
                                    title={post.title}
                                    author={post.author}
                                    key={post._id}
                                />
                            ))
                        }
                    </div>
                </section>
            </main>
            </>
        </Layout>
        </>
    );
}

export default Home;