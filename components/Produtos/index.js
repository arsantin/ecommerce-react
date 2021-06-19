import Link from "next/link";
import styled from "styled-components";
import React, { lazy, Suspense } from "react";

const Card = lazy(() => import("../Card"));

const renderLoader = () => <p>Carregando...</p>;

const ProdutosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  h1 {
    flex-basis: 100%;
  }
`;

const Produtos = (props) => {
  return (
    <Suspense fallback={renderLoader()}>
      <ProdutosWrapper>
        {props.data && (
          <Link href="/produto/[id]" as={`/produto/${props.data.id}`}>
            <a>
              <Card filme={props.data} />
            </a>
          </Link>
        )}
      </ProdutosWrapper>
    </Suspense>
  );
};

export default Produtos;
