import React from "react";
import styled from "styled-components";
import Image from 'next/image'

const MainCard = styled.div`
  margin: 20px;
  padding: 20px;
  background: #131313;
  max-width: 200px;
  color: #fff;
  position: relative;
  a {
    text-decoration: none;
    color: orange;
  }
  &:hover {
    background: #353535;
    cursor: pointer;
  }
  img {
    max-width: 250px;
    width: 100%;
    height: auto;
  }
  .card_name {
    color: #000;
    font-weight: 700;
  }
  .average{
    background-color: #154052;
    border-radius: 0px 0px 0px 10px;
    padding: 8px;
    position: absolute;
    z-index: 100;
    right: 20px;
    top: 0px;
  }
`;

const Card = (props) => {
  return (
    <MainCard>      
        <div className="card_pic" key={props.filme.id}>
        <Image
            src={`https://image.tmdb.org//t//p//w1280//${props.filme.poster_path}`}
            alt=""
            layout="fixed"
            width={200}
            height={300}
          />
          <h2 className="average">{props.filme.vote_average}</h2>
          <h3>{props.filme.title}</h3>
        </div>       
        
    </MainCard>
  );
};

export default Card;
