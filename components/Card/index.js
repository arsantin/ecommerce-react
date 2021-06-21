import React from "react";
import styled from "styled-components";
import Image from 'next/image'
import Link from 'next/link'

const MainCard = styled.div`
  margin: 20px;
  padding: 20px;
  background: #131313;
  max-width: 200px;
  color: #fff;
  position: relative;
  a {
    text-decoration: none;
    color: orange;
  }
  &:hover {
    background: #353535;
    cursor: pointer;
  }
  img {
    max-width: 250px;
    width: 100%;
    height: auto;
  }
  .card_name {
    color: #000;
    font-weight: 700;
  }
  .average{
    background-color: #154052;
    border-radius: 0px 0px 0px 10px;
    padding: 8px;
    position: absolute;
    z-index: 100;
    right: 20px;
    top: 0px;
  }
  input{
    width: 30px;
    text-align: center;
    margin: 5px;
  }
`;

const Card = (props) => {

  function adicionarAoCarrinho(e){
    console.log(e);
  }

  return (
    <MainCard>      
        <div className="card_pic" key={props.produto.id}>
        <Image
            src={`https://image.tmdb.org//t//p//w1280//${props.produto.poster_path}`}
            alt=""
            layout="fixed"
            width={200}
            height={300}
          />
          <h2 className="average">{props.produto.vote_average}</h2>
          <Link href="/produto/[id]" as={`/produto/${props.produto.id}`}>
            <a>
          <h3>{props.produto.title}</h3></a></Link>
          <p><label>Valor:</label>R$54,90</p>
          <button>-</button>
          <input type="text" value="1" maxLength="3" width="90"/><button>+</button>
          <hr/>          
          <button onClick={adicionarAoCarrinho}>ADICIONAR AO CARRINHO</button>
        </div>       
        
    </MainCard>
  );
};

export default Card;
