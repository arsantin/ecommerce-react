import { fetchpostdetails } from "../../../store/actions/ProdutosAction";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../../store/store";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import React, { lazy, Suspense, useEffect } from "react";

const Layout = lazy(() => import("../../../components/Layout"));

const renderLoader = () => <p>Carregando...</p>;

const DetailsWrapper = styled.div`
  max-width: 600px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  .left {
    flex-basis: 40%;
    @media(max-width: 767px){
      flex-basis: 100%;
    }
    .poster {
      max-width: 350px;
      margin: auto;
      text-align: center;
      border: solid 20px #f1f1f1 !important;
      width: 100%;
      height: auto;
    }
  }
  .right {
    flex-basis: calc(60% - 40px);
    padding: 0px 20px;
    @media(max-width: 767px){
      flex-basis: calc(100% - 40px);
    }
  }
  .back{
    background: orange;
    padding: 5px;
    border-radius: 5px;
    
  }
  a{
      color: #000;
      text-decoration: none;
    }
`;

const movieDetails = () => {
  const { postdetails } = useSelector((state: RootState) => state.produto);

  const router = useRouter();

  const dispatch = useDispatch();
  const id = router.query;

  useEffect(() => {
    dispatch(fetchpostdetails(id));
  }, []);

  return (
    <Suspense fallback={renderLoader()}>
      <Layout title={postdetails.title}>
        <Head>
          <meta name={postdetails.title} content={postdetails.overview} />
          <meta property="og:title" content={postdetails.overview} />
          <meta property="og:description" content={postdetails.overview} />
          <meta property="og:url" content="https://urldeploy.com/" />
          <meta property="og:type" content="website"></meta>
        </Head>
        <DetailsWrapper>
          <div className="left">
            <Image
              src={`https://image.tmdb.org//t//p//w1280//${postdetails.poster_path}`}
              alt={postdetails.title}
              width={350}
              height={500}
              className="poster"
            />
          </div>
          <div className="right">
            <h1>{postdetails.original_title}</h1>
            <p>{postdetails.overview}</p>
            <p>
              <strong>Categorias:</strong>
            </p>
            
              {postdetails.genres &&
                postdetails.genres.map((categoria) => {
                  return <div key={categoria.id}>{categoria.name}</div>;
                })}
           
          </div>
          <Link href="/">
            <a className="back">voltar</a>
          </Link>
        </DetailsWrapper>
      </Layout>
    </Suspense>
  );
};

export default movieDetails;
