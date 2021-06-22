import styled from "styled-components";
import CategoriasEscolhidas from "../CategoriasEscolhidas";

const MeusFiltrosWrapper = styled.div`
  background-color: #131313;
  padding: 5px;
  border-radius: 5px;
  .wrap-cat {
    display: flex;
    flex-wrap: wrap;
  }
  h6 {
    flex-basis: 100%;
    margin: 10px 0px;
  }
  button {
    background-color: #910404;
    border-radius: 5px;
    margin: 3px;
    border: none;
    color: #fff;
    padding: 5px;
    &:hover {
      cursor: pointer;
      background-color: #cb1515;
    }
  }
`;

const MeusFiltros = (props) => {
  return (
    
      <MeusFiltrosWrapper>
        <h6>MEUS FILTROS</h6>
        {props.listaDeProdutosFiltrados &&
          props.listaDeProdutosFiltrados.map((cats) => {
            return (
              <CategoriasEscolhidas
                key={cats.id}
                className="wrap-cat"
                cats={cats}
                removeDasCategoriasEscolhidas={props.removeDasCategoriasEscolhidas}
              />
            );
          })}
        <button onClick={props.resetaFiltroCategoria}>LIMPAR FILTROS</button>
      </MeusFiltrosWrapper>
    
  );
};

export default MeusFiltros;
