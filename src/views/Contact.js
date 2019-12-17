import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import Layout from '../common/Layout';

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

function Contact({match}){
    const {id} = match.params;
    const { data, loading, error } = useQuery(SINGLE_CONTACT, {variables: {id}});

    if(loading) return <h2>Cargando ...</h2>
    if(error) return <h2>Hubo un error</h2>

    return (
        <>
        <Layout head="Bienvenidos" subheading="Detalle del Contacto" >
            <div className="media">
                <img src="..." className="align-self-start mr-3" alt="..." />
                <div className="media-body">
                    <h5 className="mt-0">{data.getSingleContact.first_name} {data.getSingleContact.last_name}</h5>
                    <p>Este contacto es un tratarlo con el siguiente titulo {data.getSingleContact.title}</p>
                    <p></p>
                </div>
            </div>
        </Layout>
        </>
    );
};

export default Contact;