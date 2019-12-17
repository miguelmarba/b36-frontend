import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import ContactPreview from '../components/ContactPreview';
import Layout from '../common/Layout';
import { Link } from 'react-router-dom';

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

function Contacts(){
    const {data, loading, error} = useQuery(ALL_CONTACTS);
    if(loading) return <h2>Cargando...</h2>
    if(error) return <h2>Hubo un error :(</h2>
    return (
        <>
        <Layout head="Bienvenidos" subheading="Contactos" >
            <div className="card mb-3">
                <div className="card-header">
                    <div className="row">
                        <div className="col-8">
                            <i className="fas fa-table"></i>
                            <h3>Contactos</h3>
                        </div>
                        <div className="col-4 text-right">
                            <Link className="btn btn-success" to="/contact/create" >Nuevo contacto</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Titulo</th>
                                    <th colSpan="2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.getContacts.map((contact) => (
                                        <ContactPreview _id={contact._id}
                                            first_name={contact.first_name}
                                            last_name={contact.last_name}
                                            title={contact.title}
                                            key={contact._id}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    );
}

export default Contacts;