import React, {useState} from "react";
import styled from "styled-components";
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from "react-redux";
import { adicionarAoCarrinho } from "../../store/actions/CarrinhoAction";


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
  button:hover{
    cursor: pointer;
  }
  .envia{
    border: none;
    background-color: #440b3a;
    padding: 10px;
    color: #ebecd0;

  }
`;

const Card = (props) => {    
  const dispatch = useDispatch();

  const[quantidade, setQuantidade] = useState(1);
  const[valor, setValor] = useState(60.00);

  function incluiNoCarrinho(){   
    const item = props.produto;
    const qt = quantidade;
    const obj = {...item, qt}
    console.log("obj", obj);
    dispatch(adicionarAoCarrinho(obj))
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
          <p><label>Valor:</label>R${valor}</p>
          {quantidade > 1 && <button onClick={()=> setQuantidade(quantidade - 1)}>-</button>}
          <input type="text" placeholder={quantidade} maxLength="3" width="90"/><button onClick={()=> setQuantidade(quantidade + 1)}>+</button>
          <hr/>
          {quantidade > 1 && <div>Total itens: ({quantidade}) - {quantidade * valor} reais</div>}
          <hr/>
          {quantidade > 0 && <button className="envia" onClick={incluiNoCarrinho} value={props.produto}>ADICIONAR AO CARRINHO</button>}          
          
        </div>               
    </MainCard>
  );
};

export default Card;
