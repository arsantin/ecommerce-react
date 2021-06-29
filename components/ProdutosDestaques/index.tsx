import styled from "styled-components";
import Card from "../Card";

const ProdutosDestaquesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  h1 {
    flex-basis: 100%;
  }
`;

const ProdutosDestaques = (props) => {

  return (    
      <ProdutosDestaquesWrapper>       
        {props.produtos && props.produtos.map(produto => {
          return <Card produto={produto} key={produto.id}/>  
        })}
      </ProdutosDestaquesWrapper>    
  );
};

export default ProdutosDestaques;
