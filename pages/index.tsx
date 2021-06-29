import React, { lazy, Suspense } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProdutos,
  enviaParaCategoriasFiltradas,
  removeCategoriaFiltrada,
  resetaFiltros,  
} from "../store/actions/ProdutosAction";
import { listaCategorias } from "../store/actions/CategoriasAction";
import IndexWrapper from "./styles";
import Carrinho from '../components/Carrinho';
import Layout from "../components/Layout";
import { RootState } from '../store/store'
import ProdutosDestaques from "../components/ProdutosDestaques";
const MeusFiltros = lazy(() => import("../components/MeusFiltros"));
const Categorias = lazy(() => import("../components/Categorias"));

const Filtrados = lazy(() => import("../components/Filtrados"));
const renderLoader = () => <p>Carregando...</p>;

const Index = () => {
  const [menuMob, setmenuMob] = useState(false);
  const dispatch = useDispatch();
  const [filmesFiltrados, setfilmesFiltrados] = useState([]);
  const { produtos, listaDeProdutosFiltrados } = useSelector(
    (state:RootState) => state.produto
  );
  const { carrinho } = useSelector(
    (state:RootState) => state.carrinho
  );
  const { categorias } = useSelector((state:RootState) => state.categoria);

  useEffect(() => {
    dispatch(fetchProdutos());
    dispatch(listaCategorias());
  }, []);

  useEffect(() => {
    produtosFiltrados();
  }, [listaDeProdutosFiltrados]);

  function produtosFiltrados() {
    const initialState = produtos.results;
    let filtroDeCategorias = [];
    listaDeProdutosFiltrados.map((eachCat) => {
      filtroDeCategorias.push(parseInt(eachCat.id));
    });
    const filterByTagSet = new Set(filtroDeCategorias);
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
    dispatch(enviaParaCategoriasFiltradas(id, name));
  }

  function removeDasCategoriasEscolhidas(e) {
    e.preventDefault();
    const name = e.target.innerText;
    const id = e.target.value;
    dispatch(removeCategoriaFiltrada(id, name));
    produtosFiltrados();
  }

  function resetaFiltroCategoria() {
    dispatch(resetaFiltros());
    produtosFiltrados();
  }

  function abreMenu() {
    setmenuMob(!menuMob);
  }

  function fechaMenu() {
    setmenuMob(!menuMob);
  }

  return (
    <Suspense fallback={renderLoader()}>
      <Layout>
        <IndexWrapper>
          <div className="ham" onClick={abreMenu}>
            MENU
          </div>

          <div className={menuMob ? "hidden" : "fixed show"}>
            <div onClick={fechaMenu} className="fechar">
              Fechar X
            </div>
            {carrinho.length > 0 && <Carrinho carrinho={carrinho}/>}            
            {listaDeProdutosFiltrados.length > 0 && (
              <MeusFiltros
                listaDeProdutosFiltrados={listaDeProdutosFiltrados}
                removeDasCategoriasEscolhidas={removeDasCategoriasEscolhidas}
                resetaFiltroCategoria={resetaFiltroCategoria}
              />
            )}

            <Categorias
              categorias={categorias}
              adicionaCategoriaAoFiltro={adicionaCategoriaAoFiltro}
              abreMenu={abreMenu}
            />
          </div>
          <div className="content">
            {filmesFiltrados.length > 0 ? (
              <Filtrados filmesFiltrados={filmesFiltrados} />
            ) : (
              <>
                {produtos.results && <ProdutosDestaques produtos={produtos.results} />}
              </>
            )}
          </div>
          <div></div>
        </IndexWrapper>
      </Layout>
    </Suspense>
  );
};

export default Index;
