import React, { useState} from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Layout from './../common/Layout';
import Input from '../common/Input';
import useForm from '../hooks/useForm';
import authHOC from '../utils/authHOC';
import { Link } from 'react-router-dom';

const UPDATE_CONTACT = gql`

    mutation updateContact($id:ID!, $data:ContactInputUpdate!){
        updateOneContact(id:$id, data:$data){
            _id
        }
    }

`;

const GET_CONTACT = gql`

    query getOneContact($id:ID!){
        getSingleContact(id:$id){
            first_name
            last_name
            title
        }
    }
    
`;

function EditContact({ match, history }){
    const [ updateContact ] = useMutation(UPDATE_CONTACT);
    const [cover, setCover] = useState('');
    const [coverPreview, setCoverPreview] = useState('');
    
    const {id} = match.params;
    const { data, loading } = useQuery(GET_CONTACT, {variables: {id}});

    const catchCover = event =>{
        const reader = new FileReader();
        const file = event.target.files[0];

        reader.onloadend = () => {
            setCover(file);
            setCoverPreview(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const catchData = async (inputs) => {
        delete inputs.cover;
        const newData = cover ? {
            ...inputs,
            cover,
        }: {
            ...inputs,
        }

        const { data, errors} = await updateContact({variables:{id:match.params.id, data:newData}}); 
        if (data) history.push('/contacts');
        if(errors) alert(errors); 
    };

    const {
        inputs,
        handleInputChange,
        handleSubmit
    } = useForm(catchData, data);

    if(loading) return <h1>Cargando...</h1>

    return (
        <>
        <Layout head="Contactos" subheading="Editar contacto">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <form onSubmit={handleSubmit}>
                            < Input
                                name = "first_name"
                                label = "Nombre"
                                type = "text"
                                placeholder = "Nombre"
                                value={inputs.first_name}
                                change={handleInputChange}
                            />
                            < Input
                                name = "last_name"
                                label = "Apellidos"
                                type = "text"
                                placeholder = "Apellidos"
                                value={inputs.last_name}
                                change={handleInputChange}
                            />
                            < Input
                                name = "account_name"
                                label = "Nombre de la cuenta"
                                type = "text"
                                placeholder = "Nombre de la cuenta"
                                value={inputs.account_name}
                                change={handleInputChange}
                            />
                            < Input
                                name = "title"
                                label = "Titulo"
                                type = "text"
                                placeholder = "Ing, Lic, etc."
                                value={inputs.title}
                                change={handleInputChange}
                            />
                            < Input
                                name = "email"
                                label = "Correo electrónico"
                                type = "text"
                                placeholder = "micorreo@correo.com"
                                value={inputs.email}
                                change={handleInputChange}
                            />
                            < Input
                                name = "phone"
                                label = "telefono"
                                type = "text"
                                placeholder = ""
                                value={inputs.phone}
                                change={handleInputChange}
                            />
                            < Input
                                name = "mobile"
                                label = "Celular"
                                type = "text"
                                placeholder = ""
                                value={inputs.mobile}
                                change={handleInputChange}
                            />
                            < Input
                                name = "birth_date"
                                label = "Fecha de nacimiento"
                                type = "text"
                                placeholder = "2019-12-15"
                                value={inputs.birth_date}
                                change={handleInputChange}
                            />
                            < Input
                                name = "country"
                                label = "Pais"
                                type = "text"
                                placeholder = ""
                                value={inputs.country}
                                change={handleInputChange}
                            />
                            < Input
                                name = "city"
                                label = "Ciudad"
                                type = "text"
                                placeholder = ""
                                value={inputs.city}
                                change={handleInputChange}
                            />
                            < Input
                                name = "address"
                                label = "Dirección"
                                type = "text"
                                placeholder = ""
                                value={inputs.address}
                                change={handleInputChange}
                            />
                            <div className="clearfix mt-4">
                                <button type="submit" className="btn btn-primary" >Guardar</button>
                                <Link className="btn btn-light" to="/contacts" >Cancelar</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    );
};

//export default authHOC(EditContact);
export default EditContact;