import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Layout from './../common/Layout';
import Input from '../common/Input';
import useForm from '../hooks/useForm';
import authHOC from '../utils/authHOC';
import { Link } from 'react-router-dom';

const CREATE_CONTACT = gql`
    mutation createContact($data:ContactInput!){
        createNewContact(data:$data){
            _id
            first_name
            last_name
        }
    }
`;

function CreateContact({history}){
    const [ sendContact ] = useMutation(CREATE_CONTACT);
    const [cover, setCover] = useState('');
    const [coverPreview, setCoverPreview] = useState('');

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
        const { data, errors} = await sendContact({variables:{data:{...inputs}}}); 
        if (data) history.push('/contacts');
        if(errors) alert(errors); 
    };

    const {
        inputs,
        handleInputChange,
        handleSubmit
    } = useForm(catchData);

    return (
        <>
        <Layout head="Contactos" subheading="Crear nuevo contacto">
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
                                required={true}
                            />
                            < Input
                                name = "last_name"
                                label = "Apellidos"
                                type = "text"
                                placeholder = "Apellidos"
                                value={inputs.last_name}
                                change={handleInputChange}
                                required={true}
                            />
                            < Input
                                name = "account_name"
                                label = "Nombre de la cuenta"
                                type = "text"
                                placeholder = "Nombre de la cuenta"
                                value={inputs.account_name}
                                change={handleInputChange}
                                required={true}
                            />
                            < Input
                                name = "title"
                                label = "Titulo"
                                type = "text"
                                placeholder = "Ing, Lic, etc."
                                value={inputs.title}
                                change={handleInputChange}
                                required={true}
                            />
                            < Input
                                name = "email"
                                label = "Correo electrónico"
                                type = "text"
                                placeholder = "micorreo@correo.com"
                                value={inputs.email}
                                change={handleInputChange}
                                required={true}
                            />
                            < Input
                                name = "phone"
                                label = "telefono"
                                type = "text"
                                placeholder = ""
                                value={inputs.phone}
                                change={handleInputChange}
                                required={true}
                            />
                            < Input
                                name = "mobile"
                                label = "Celular"
                                type = "text"
                                placeholder = ""
                                value={inputs.mobile}
                                change={handleInputChange}
                                required={true}
                            />
                            < Input
                                name = "birth_date"
                                label = "Fecha de nacimiento"
                                type = "text"
                                placeholder = "2019-12-15"
                                value={inputs.birth_date}
                                change={handleInputChange}
                                required={true}
                            />
                            < Input
                                name = "country"
                                label = "Pais"
                                type = "text"
                                placeholder = ""
                                value={inputs.country}
                                change={handleInputChange}
                                required={true}
                            />
                            < Input
                                name = "city"
                                label = "Ciudad"
                                type = "text"
                                placeholder = ""
                                value={inputs.city}
                                change={handleInputChange}
                                required={true}
                            />
                            < Input
                                name = "address"
                                label = "Dirección"
                                type = "text"
                                placeholder = ""
                                value={inputs.address}
                                change={handleInputChange}
                                required={true}
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

export default authHOC(CreateContact);