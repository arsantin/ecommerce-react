import React, {useState} from "react";
import styled from "styled-components";
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from "react-redux";
import { adicionarAoCarrinho } from "../../store/actions/CarrinhoAction";

const MainCard = styled.div`
  margin: 5px;
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
  .ativo{
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
  const [ativado, setAtivado] = useState(false)

  function incluiNoCarrinho(){
    const item = props.produto;
    const qt = quantidade;
    const obj = {...item, qt, valor}  
    setAtivado(true);  
    dispatch(adicionarAoCarrinho(obj))
  }
 
  return (
    <MainCard>      
        <div className="card_pic" key={props.produto.id}>
        <Image
            src={"https://baconmockup.com/200/120"}
            alt=""
            layout="fixed"
            width={200}
            height={120}
          />
          <h2 className="average">{props.produto.vote_average}</h2>
          <Link href="/produtos/[id]" as={`/produtos/${props.produto.id}`}>
            <a>
          <h3>{props.produto.title}</h3></a></Link>
          <p><label>Valor:</label>R${props.produto.vote_count}</p>
          {quantidade > 1 && <button onClick={()=> setQuantidade(quantidade - 1)}>-</button>}          
          <div>Quero {quantidade} desse!!!</div>
                    
          <button onClick={()=> setQuantidade(quantidade + 1)}>+</button>
          <hr/>
          {quantidade > 1 && <div>Total itens: ({quantidade}) - {quantidade * valor} reais</div>}
          <hr/>
          {quantidade > 0 && <button className={ativado ? "inativo" : "ativo"} disabled={ativado} onClick={incluiNoCarrinho} value={props.produto}>{ativado ? "PRODUTO NO CARRINHO" : "ADICIONAR AO CARRINHO"}</button>}          
          
        </div>               
    </MainCard>
  );
};

export default Card;
