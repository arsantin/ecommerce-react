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




const movieDetails = ({comercioDetails}) => {
  const { postdetails } = useSelector((state: RootState) => state.produto);


console.log()
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(fetchpostdetails(comercioDetails[0]));
  }, []);

  return (
    <Suspense fallback={renderLoader()}>
      <Layout title={postdetails.nome}>
        <Head>
          <meta name={postdetails.title} content={postdetails.nome} />
          <meta property="og:title" content={postdetails.nome} />
          <meta property="og:description" content={postdetails.nome} />
          <meta property="og:url" content="https://guiadeitapoa.herokuapp.com/" />
          <meta property="og:type" content="website"></meta>
        </Head>
        <DetailsWrapper>
          <div className="left">            
          </div>
          <div className="right">
            <Image 
            src={`https://vxmhqwsaxnlvxruoplrq.supabase.co/storage/v1/object/public/public/${postdetails.img}`}
            width={220}
            height={220} />
            <h1>{postdetails.nome}</h1>
            <p>{postdetails.descricao}</p>
            <p>{postdetails.telefone}</p>
            <p>{postdetails.endereco}</p>
            <p>coordenadas: {postdetails.lat} - {postdetails.lon}</p>
            <p>{postdetails.valor}</p>
          </div>
          <Link href="/">
            <a className="back">voltar</a>
          </Link>
          <Link href="/produtos/[id]/editar" as={`/produtos/${postdetails.id}/editar`}>
            <a>editar</a>
          </Link>
        </DetailsWrapper>
      </Layout>
    </Suspense>
  );
};

export default movieDetails;

export async function getServerSideProps({ query }) {  
  const id = query.id;
  console.log("id", id)
	const res = await fetch(`http://localhost:3000/api/produtos/${id}`)
  const data = await res.json()  
  return { 
    props:{
      comercioDetails:  data
    }
  }
}