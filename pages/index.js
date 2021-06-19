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
import { listaCategorias } from "../store/actions/CategoriasAction";
import IndexWrapper from './styles'
const Pagination = lazy(() => import('../components/Pagination'))
const Filmes = lazy(() => import('../components/Produtos'))
const MeusFiltros = lazy(() => import('../components/MeusFiltros'))
const Categorias = lazy(() => import('../components/Categorias'));
const Layout = lazy(() => import('../components/Layout'))
const Filtrados = lazy(() => import('../components/Filtrados'));
const renderLoader = () => <p>Carregando...</p>;


const Index = () => {
const [menuMob, setmenuMob] = useState(false);    
  const dispatch = useDispatch();
  const [filmesFiltrados, setfilmesFiltrados] = useState([]);
  const { posts, filteredList } = useSelector((state) => state.post);
  const { genres } = useSelector((state) => state.genre);

  useEffect(() => {
    dispatch(fetchmovies());
    dispatch(listaCategorias());
  }, []);

  useEffect(() => {
    produtosFiltrados();
  }, [filteredList]);

  function produtosFiltrados() {
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

  function adicionaCategoriaAoFiltro(e) {
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
    produtosFiltrados();
  }

  function cleanAllFilter(){
    dispatch(cleanFilters());
    produtosFiltrados();
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
          
          <Categorias genres={genres} adicionaCategoriaAoFiltro={adicionaCategoriaAoFiltro} abreMenu={abreMenu}/>
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
