import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import ClientPreview from '../components/ClientPreview';
import Layout from '../common/Layout';
import { Link } from 'react-router-dom';

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
                            <div class="mr-5">26 nuevos Contactos!</div>
                        </div>
                        <Link className="card-footer text-white clearfix small z-1" to="/contacts">
                            <span class="float-left">Ver detalles</span>
                                <span class="float-right">
                                <i class="fas fa-angle-right"></i>
                            </span>
                        </Link>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-3">
                    <div class="card text-white bg-warning o-hidden h-100">
                        <div class="card-body">
                            <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                            </div>
                            <div class="mr-5">11 Nuevas Tareas!</div>
                        </div>
                        <Link className="card-footer text-white clearfix small z-1" to="/contacts">
                            <span class="float-left">Ver detalles</span>
                                <span class="float-right">
                                <i class="fas fa-angle-right"></i>
                            </span>
                        </Link>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-3">
                    <div class="card text-white bg-success o-hidden h-100">
                        <div class="card-body">
                            <div class="card-body-icon">
                            <i class="fas fa-fw fa-shopping-cart"></i>
                            </div>
                            <div class="mr-5">123 Nuevos clientes!</div>
                        </div>
                        <Link className="card-footer text-white clearfix small z-1" to="/contacts">
                            <span class="float-left">Ver detalles</span>
                                <span class="float-right">
                                <i class="fas fa-angle-right"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            </>
        </Layout>
        </>
    );
}

export default Home;