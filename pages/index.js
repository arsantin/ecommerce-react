import React, { lazy, Suspense } from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchmovies,
  sendToFiltered,
  removeFromFiltered,
  cleanFilters
} from "../store/actions/moviesAction";
import { genreList } from "../store/actions/genreAction";
import styled from "styled-components";

const Filmes = lazy(() => import('../components/Filmes'))
const MeusFiltros = lazy(() => import('../components/MeusFiltros'))
const Categorias = lazy(() => import('../components/Categorias'));
const Layout = lazy(() => import('../components/layout/Layout'))
const Filtrados = lazy(() => import('../components/Filtrados'));

const renderLoader = () => <p>Carregando...</p>;

const IndexWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  a{
    text-decoration: none;
  }
  .fixed {
    display: block;
    opacity: 0.98;
    padding: 20px;
    flex-basis: 20%;
    position: fixed;
    z-index: 200;
    top: 0px;
    left: 0px;
    width: 200px;
    background: #000000;
    height: 100%;
    font-size: 14px;
    &.show{
      @media(max-width: 767px){        
        display: none;
      }
    }
    .logo{
      max-width: 100%;
      height: auto;
    }
    @media(max-width: 767px){      
      width: calc(100% - 40px);     
    }
  }
  .content {
    flex-basis: 80%;
    padding-left: 220px;
    display: flex;
    justify-content: center;
    @media(max-width: 767px){
      flex-basis: 100%;
      padding-left: 0px;
    }
  }
  .dataContainer{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    div{
      flex-basis: 30%;
    }
  }
  .pagination{
    width: 100%;
    max-width: 140px;
    margin: auto;
    button{
      border: none;
      background: orange;
      border-radius: 125px;
      text-indent: -9999px;
      width: 15px;
      height: 15px;
      margin: 10px;
      &.active{
        background-color: red;
      }
      &:hover{
        cursor: pointer;
      }
    }
  }
  h1{
    text-align: center;
  }
  .ham{
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 22px;
    z-index: 100;
    &:hover{
      cursor: pointer;
    }
    @media(min-width: 768px){
      display: none;
    }
  }
  .show{
    display: block;
  }
  .hidden{
    display: none;
    @media(max-width: 767px){      
      display: block;    
    }
  }
  .fechar{
    text-align: right;
    font-size: 24px;
    margin-bottom: 10px;
    &:hover {
      cursor: pointer;
    }
    @media(min-width: 768px){
      display: none;
    }
  }
`;

const Index = () => {

const [menuMob, setmenuMob] = useState(false)

  function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {    
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);     
    
    function changePage(event) {
      const pageNumber = Number(event.target.textContent);
      setCurrentPage(pageNumber);
    }
  
    const getPaginatedData = () => {
      const startIndex = currentPage * dataLimit - dataLimit;
      const endIndex = startIndex + dataLimit;
      return data.slice(startIndex, endIndex);
    };
  
    const getPaginationGroup = () => {
      let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
      return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
  
    return (
      <div>
      <h1>{title}</h1>
      <div className="dataContainer">
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>
  
    
      <div className="pagination">
      
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${currentPage === item ? 'active' : null}`}
          >
            <span>{item}</span>
          </button>
        ))}
  
       
      </div>
    </div>
    )
  }
  
  const dispatch = useDispatch();
  const [filmesFiltrados, setfilmesFiltrados] = useState([]);
  const { posts, filteredList } = useSelector((state) => state.post);
  const { genres } = useSelector((state) => state.genre);

  useEffect(() => {
    dispatch(fetchmovies());
    dispatch(genreList());
  }, []);

  useEffect(() => {
    filteredMovies();
  }, [filteredList]);

  function filteredMovies() {
    const initialState = posts.results;
    let filtroDeGeneros = [];
    filteredList.map((eachCat) => {
      filtroDeGeneros.push(parseInt(eachCat.id));
    });
    const filterByTagSet = new Set(filtroDeGeneros);
    if (initialState) {
      const result = initialState.filter((o) =>
        o.genre_ids.some((tag) => filterByTagSet.has(tag))
      );
      setfilmesFiltrados(result);
    }
  }

  function toggler(e) {
    e.preventDefault();
    const name = e.target.innerText;
    const id = e.target.value;
    e.disabled = true;
    dispatch(sendToFiltered(id, name));    
  }

  function removeFromChoices(e) {
    e.preventDefault();
    const name = e.target.innerText;
    const id = e.target.value;
    dispatch(removeFromFiltered(id, name));
    filteredMovies();
  }

  function cleanAllFilter(){
    dispatch(cleanFilters());
    filteredMovies();
  }

  function abreMenu(){
    setmenuMob(!menuMob)
  }

  function fechaMenu(){
    setmenuMob(!menuMob)
  }

  return (
    <Suspense fallback={renderLoader()}>
    <Layout>
      <IndexWrapper>
        <div className="ham" onClick={abreMenu}>MENU</div>
                
        <div className={menuMob ? 'hidden' : 'fixed show'}>  
        <div onClick={fechaMenu} className="fechar">Fechar X</div>             
          {filteredList.length > 0 && <MeusFiltros
            filteredList={filteredList}
            removeFromChoices={removeFromChoices}
            cleanAllFilter={cleanAllFilter}
          />}
          
          <Categorias genres={genres} toggler={toggler} abreMenu={abreMenu}/>
        </div>
        <div class="content">
          {filmesFiltrados.length > 0 ? (
            <Filtrados filmesFiltrados={filmesFiltrados}/>
          ) : (
            <>   
            {posts.results && <Pagination
            data={posts.results}
            RenderComponent={Filmes}
            title="Catálogo"
            pageLimit={4}
            dataLimit={6}
          />}             
            
          </>
          )}
        </div>
        <div>
    </div>
      </IndexWrapper>
    </Layout>
    </Suspense>
  );
};

export default Index;
