import styled from "styled-components";

const CategoriasEscolhidasWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  h1 {
    flex-basis: 100%;
  }
  button.chooseds {
    font-size: 12px;
    background-color: #1b1b1b;
    border-radius: 5px;
    margin: 3px;
    border: none;
    background-image: url(/img/checked.png);
    color: #fff;
    background-repeat: no-repeat;
    padding: 5px 5px 5px 24px;
    background-position: 7px 7px;
    &:hover {
      cursor: pointer;
      background-color: #000;
      background-image: url(/img/x.png);
    }
  }
`;

const CategoriasEscolhidas = (props) => {
  return (
    
      <CategoriasEscolhidasWrapper>
        <button
          className="chooseds"
          key={props.id}
          onClick={props.removeFromChoices}
          value={props.cats.id}
        >
          {props.cats.name}
        </button>
      </CategoriasEscolhidasWrapper>
    
  );
};

export default CategoriasEscolhidas;
