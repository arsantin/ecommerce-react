import Link from "next/link";
import styled from "styled-components";
import React, { lazy, Suspense } from "react";

const Card = lazy(() => import("../Card"));

const renderLoader = () => <p>Carregando...</p>;

const FiltradosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h4 {
    flex-basis: 100%;
  }
  .count {
    flex-basis: 100%;
    text-align: center;
    color: color;
    span {
      color: orange;
      font-size: 24px;
    }
  }
`;

const Filtrados = (props) => {
  return (
    <Suspense fallback={renderLoader()}>
    <FiltradosWrapper>      
      <div className="count">
        Foram encontrados{" "}
        <span>
          {props.filmesFiltrados &&
            JSON.stringify(props.filmesFiltrados.length)}
        </span>
      </div>
      {props.filmesFiltrados &&
        props.filmesFiltrados.map((produto) => {
          return (
          <Card produto={produto} key={produto.id}/>            
          );
        })}
    </FiltradosWrapper>
    </Suspense>
  );
};

export default Filtrados;
