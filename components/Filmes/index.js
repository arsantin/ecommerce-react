import Link from "next/link";
import styled from "styled-components";
import React, { lazy, Suspense } from "react";

const Card = lazy(() => import("../Card"));

const renderLoader = () => <p>Carregando...</p>;

const FilmesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  h1 {
    flex-basis: 100%;
  }
`;

const Filmes = (props) => {
  return (
    <Suspense fallback={renderLoader()}>
      <FilmesWrapper>
        {props.data && (
          <Link href="/movie/[id]" as={`/movie/${props.data.id}`}>
            <a>
              <Card filme={props.data} />
            </a>
          </Link>
        )}
      </FilmesWrapper>
    </Suspense>
  );
};

export default Filmes;
