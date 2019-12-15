import React from 'react';
import qql from 'graphql-tag';
import Layout from './../common/Layout';
import Input from '../common/Input';
import useForm from '../hooks/useForm';

const CREATE_MUTATION = qql`
    mutation AddAuthor
`;


function Signup({ history }){
    const [sendSignup] = useMutation(CREATE_MUTATION);
    
    const catchData = async (inputs) => {
        // Crear author
        if(inputs.password === inputs.confirm_password){
            delete inputs.confirm_password;
            console.log(inputs);
            const { data } = await sendSignup({variables:{data:{...inputs}}});
            if(data){
                if(data.errors) console.log();
            }
        } else {
            alert('Tu contraseña no coincide');
        }
    }

    const {
        inputs,
        handleSubmit,
        handleInputChange

    } = useForm(catchData);

    return(
        <>
            <Layout head="Registrate para empezar a postear."
            subhead="Procura recordar tu contraseña">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <form onSubmit={handleSubmit}>
                                <Input
                                    name="firs_name"
                                    label="Nombre"
                                    type="text"
                                    placeholder="Escribe tu nombre"
                                    value={inputs.last_name}
                                    onChange={handleInputChange}
                                    requerid={true}
                                />
                                <Input
                                    name="last_name"
                                    label="Apellido paterno"
                                    type="text"
                                    placeholder="Escribe tu apellido paterno"
                                    value={inputs.last_name}
                                    onChange={handleInputChange}
                                    requerid={true}
                                />
                                <a className="btn btn-primary btn-block" href="login.html">Register</a>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}