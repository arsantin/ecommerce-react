import React, {useState} from "react";
import styled from "styled-components";
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from "react-redux";
import { adicionarAoCarrinho } from "../../store/actions/CarrinhoAction";

const MainCardImoveis = styled.div`
  margin: 50px;
  padding: 20px;
  border-radius: 25px;
background: linear-gradient(145deg, #cacaca, #f0f0f0);
box-shadow:  24px 24px 48px #b8b8b8,
             -24px -24px 48px #ffffff;
  max-width: 350px;
  color: #fff;
  position: relative;
  flex-basis: 50%;
  a {
    text-decoration: none;
    color: #333;
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
  .ativo{
    border: none;
    background-color: #440b3a;
    padding: 10px;
    color: #ebecd0;

  }  
`;

const CardImoveis = (props) => {    
  const dispatch = useDispatch();

  const[quantidade, setQuantidade] = useState(1);
  const[valor, setValor] = useState(60.00);
  const [ativado, setAtivado] = useState(false)

  function incluiNoCarrinho(){
    const item = props.imovel;
    const qt = quantidade;
    const obj = {...item, qt, valor}  
    setAtivado(true);  
    dispatch(adicionarAoCarrinho(obj))
  }
 
  return (
    <MainCardImoveis>  
     <div>
        <div className="card_pic" key={props.imovel.id}>        
          </div>          
          <Link href="/imoveis/[id]" as={`/imoveis/${props.imovel.id}`}>
            <a>{props.imovel.titulo}</a></Link>
          
          {quantidade > 1 && <button onClick={()=> setQuantidade(quantidade - 1)}>-</button>}          
          <div>Quero {quantidade} desse!!!</div>
               <p>{props.imovel.valor}</p>     
          <button onClick={()=> setQuantidade(quantidade + 1)}>+</button>
          <hr/>
          {quantidade > 1 && <div>Total itens: ({quantidade}) - {quantidade * valor} reais</div>}
          <hr/>
          {quantidade > 0 && <button className={ativado ? "inativo" : "ativo"} disabled={ativado} onClick={incluiNoCarrinho} value={props.imovel}>{ativado ? "PRODUTO NO CARRINHO" : "ADICIONAR AO CARRINHO"}</button>}          
          
        </div>               
    </MainCardImoveis>
  );
};

export default CardImoveis;
