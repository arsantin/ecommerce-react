
import React from 'react';
import Layout from '../../../components/Layout'
import { useSelector } from 'react-redux'

const MeuPerfil = () => {

    const user = useSelector(state => state.user);

    const perfil = user.user.user
    return(
    <Layout>
    <h5>MEU PERFIL</h5>    
    <h2>{perfil.user_metadata.full_name}</h2>
    <img src={perfil.user_metadata.avatar_url} />
    </Layout>
    )
}

export default MeuPerfil;