import React from 'react';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import InputLogin from '../common/InputLogin';
import Input from '../common/Input';
import useForm from '../hooks/useForm';
import LayoutLogin from './../common/LayoutLogin';
import { Link } from 'react-router-dom';

const LOG_IN = gql`
        mutation LOGIN($email: EmailAddress!,$password: String!){
            login(email: $email, password: $password){
            token
        }
    }
`;

function Login( {history} ){
    const [ sendLogin ] = useMutation(LOG_IN);

    const catchData = async (inputs) => {
        const {data, errors} = await sendLogin({variables: { ...inputs}});
        
        if(data) {
            const { login } = data;
            sessionStorage.setItem('blogToken', login.token);
            history.push('/');
        }
        if (errors) alert(`Error con tu login: ${errors}`);
    };

    const {
        inputs,
        handleInputChange,
        handleSubmit
    } = useForm(catchData);

    return (
        <>
        <LayoutLogin head="Contactos" subheading="Iniciar Sesión">
            <div className="card-header">Iniciar Sesión</div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    < InputLogin
                        name="email"
                        label="Correo electrónico"
                        type="text"
                        placeholder=""
                        value={inputs.email}
                        change={handleInputChange}
                        required={true}
                    />
                    < InputLogin
                        name="password"
                        label="Contraseña"
                        type="password"
                        placeholder= ""
                        value={inputs.password}
                        change={handleInputChange}
                        required={true}
                    />
                    <button type="submit" className="btn btn-primary btn-block" >Entrar</button>
                </form>
                <div className="text-center">
                    <a className="d-block small mt-3" href="register.html">Registrar una cuenta</a>
                    <a className="d-block small" href="forgot-password.html">Olvidé mi contraseña</a>
                </div>
            </div>
        </LayoutLogin>
        </>
    )
};

export default Login;