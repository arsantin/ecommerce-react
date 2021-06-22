import styled from "styled-components";
import Card from "../Card";

const ProdutosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  h1 {
    flex-basis: 100%;
  }
`;

const Produtos = (props) => {

  return (    
      <ProdutosWrapper>       
        {props.produtos && props.produtos.map(produto => {
          return <Card produto={produto} key={produto.id}/>  
        })}
      </ProdutosWrapper>    
  );
};

export default Produtos;
