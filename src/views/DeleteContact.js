import React from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from 'react-apollo-hooks';
import Layout from '../common/Layout';
import {Link} from 'react-router-dom';
import authenticate from '../utils/authenticate';
import authHOC from '../utils/authHOC';
import { Redirect } from 'react-router-dom';

const SINGLE_CONTACT = gql`
    query getOneContact($id:ID!){
        getSingleContact(id:$id){
            _id
            first_name
            last_name
            title
        }
    }
`;

const DELETE_CONTACT = gql`
    mutation deleteContact($id:ID!){
        deleteOneContact(id:$id)
    }
`;

function DeleteContact({match, history}){
    const { isAuthenticated, payload } = authenticate();
    const [ deleteOneContact ] = useMutation(DELETE_CONTACT);

    const {id} = match.params;
    const { data, loading, error } = useQuery(SINGLE_CONTACT, {variables: {id}});

    if(loading) return <h2>Cargando ...</h2>
    if(error) return <h2>Hubo un error</h2>

    return (
        <>
        <Layout head="Contactos" subheading="Eliminar Contacto" >
            <div className="media">
                <img src="..." className="align-self-start mr-3" alt="..." />
                <div className="media-body">
                    <h5 className="mt-0">{data.getSingleContact.first_name} {data.getSingleContact.last_name}</h5>
                    <p>Este contacto es un tratarlo con el siguiente titulo {data.getSingleContact.title}</p>
                    <p></p>
                </div>
            </div>
            <div class="alert alert-danger" role="alert">
                ¿Estas seguro de eliminar este contacto?
            </div>
            <form>
                <div className="clearfix mt-4">
                    <button type="button" className="btn btn-danger" 
                    onClick={(e) => {
                        e.preventDefault();
                        deleteOneContact({variables: {id}}).then(() => {
                            window.location.href = "/contacts";
                        })
                    }}
                    >Eliminar</button>
                    <Link className="btn btn-light" to="/contacts" >Cancelar</Link>
                </div>
            </form>
        </Layout>
        </>
    );
};

export default authHOC(DeleteContact);