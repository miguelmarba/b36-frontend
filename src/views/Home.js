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
        <Layout head="Bienvenidos" subheading="Sientete libre" >
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
        </Layout>
        </>
    );
}

export default Home;