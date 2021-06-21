import styled from "styled-components";

const CategoriasWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;  
  h5{
    flex-basis: 100%;
  }
  button{
    font-size: 12px;
    background-color: #062d38;    
    border-radius: 5px;    
    margin: 3px;
    border: none;    
    color: #fff;    
    padding: 5px;
    &:hover{
      cursor: pointer;
      background-color: 
    }
  }

`;

const Categorias = (props) => {
  return (
    <CategoriasWrapper>
      <h5>Categorias</h5>      
      {props.categorias.genres &&
        props.categorias.genres.map((genre) => {
          return (
            <button
              key={genre.id}
              className="red"
              onClick={props.adicionaCategoriaAoFiltro}
              value={genre.id}
            >
              {genre.name}
            </button>
          );
        })}
    </CategoriasWrapper>
  );
};

export default Categorias;
