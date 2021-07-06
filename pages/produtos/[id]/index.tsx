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
const id = router.query;

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchpostdetails(id));
  }, []);

  return (
    <Suspense fallback={renderLoader()}>
      <Layout title={postdetails[0].nome}>
        <Head>
          <meta name={postdetails[0].title} content={postdetails[0].nome} />
          <meta property="og:title" content={postdetails[0].nome} />
          <meta property="og:description" content={postdetails[0].nome} />
          <meta property="og:url" content="https://urldeploy.com/" />
          <meta property="og:type" content="website"></meta>
        </Head>
        <DetailsWrapper>
          <div className="left">
            <Image
              src={`https://guiadeitapoa.com.br/assets/img/${postdetails[0].avatar}`}
              alt={postdetails[0]._id}
              width={220}
              height={220}
              className="poster"
            />
          </div>
          <div className="right">
            <h1>{postdetails[0].original_title}</h1>
            <p>{postdetails[0].nome}</p>
           
            
           
          </div>
          <Link href="/">
            <a className="back">voltar</a>
          </Link>
          <Link href="/produtos/[id]/editar" as={`/produtos/${postdetails[0].id}/editar`}>
            <a>editar</a>
          </Link>
        </DetailsWrapper>
      </Layout>
    </Suspense>
  );
};

export default movieDetails;

export async function getServerSideProps(context) {  

	const res = await fetch(`http://localhost:5000/1`)
  const data = await res.json()  
  return { 
    props:{
      comercio:  data
    }
  }
}