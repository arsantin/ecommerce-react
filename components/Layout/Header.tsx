import Link from "next/link";
import { useState, useEffect, createContext } from "react";
import styled from "styled-components";
import { supabase } from "../../services/supabase";
import Image from "next/image";

const HeaderWrapper = styled.div`
  text-align: right;
  display: flex;
  background-color: #000;
  color: #fff
`;

const Header = () => {
  const [perfil, setPerfil] = useState(null);

  const initialState = {}
  const perfilLogado = createContext(initialState);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(session);
      setPerfil(session);
    });
    //  dispatch(fetchProdutos(comercio));
  }, []);
 
  async function logout() {
    const { error } = await supabase.auth.signOut();  
  }

  return (
    <HeaderWrapper>
      <img src="/img/logo.png"/>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/produtos">
          <a>Produtos</a>
        </Link>
        <Link href="/login">
          <a>login</a>
        </Link>
      </nav>    
      {perfil && (
        <>
          <div>Bem vindo(a) {perfil.user.user_metadata.full_name}</div>
          <Image width={50} height={50} src={perfil.user.user_metadata.avatar_url} />
          <button onClick={logout}>logout</button>
        </>
      )}   
     
    </HeaderWrapper>
  );
};

export default Header;
