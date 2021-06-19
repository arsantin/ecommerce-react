import Link from "next/link";
import styled from "styled-components";
import React, { lazy, Suspense } from "react";

const Card = lazy(() => import("../Card"));
const CategoriasEscolhidas = lazy(() => import("../CategoriasEscolhidas"));

const renderLoader = () => <p>Carregando...</p>;

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
    <Suspense fallback={renderLoader()}>
      <MeusFiltrosWrapper>
        <h6>MEUS FILTROS</h6>
        {props.filteredList &&
          props.filteredList.map((cats) => {
            return (
              <CategoriasEscolhidas
                className="wrap-cat"
                cats={cats}
                removeFromChoices={props.removeFromChoices}
              />
            );
          })}
        <button onClick={props.cleanAllFilter}>LIMPAR FILTROS</button>
      </MeusFiltrosWrapper>
    </Suspense>
  );
};

export default MeusFiltros;
