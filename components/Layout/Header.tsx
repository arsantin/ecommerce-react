import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { supabase } from "../../services/supabase";
import { useSelector } from 'react-redux'
import Image from "next/image";

const HeaderWrapper = styled.div`
  text-align: right;
  display: flex;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  nav{
    display: flex;
    a{
      background-color: #f0495b;
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    color: #fff;
    margin: 0px 10px;
    &:hover{
      background-color: #fec929;
      color: #e1792b;
    }
    }
  }
`;

const Header = () => { 
 
  const { user } = useSelector((state: RootState) => state.user);

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
        <Link href="/classificados">
          <a>Classificados</a>
        </Link>
        <Link href="/produtos">
          <a>Produtos</a>
        </Link>
        <Link href="/imoveis">
          <a>Imóveis</a>
        </Link>
        
      </nav>    
        {user != null &&  
        <>
          <div>Olá {user.user.user_metadata.full_name}</div>
          <p>
          <Link href="/dashboard">
          <a>meu perfil</a>
          </Link>
          </p>
          <button onClick={logout}>logout</button>
        </>
      }
        {user == null &&
        <Link href="/login">
          <a>login</a>
        </Link>
}
    
    </HeaderWrapper>
  );
};

export default Header;
