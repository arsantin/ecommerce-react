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
import Carrinho from '../components/Carrinho'
const Pagination = lazy(() => import("../components/Pagination"));
const Produtos = lazy(() => import("../components/Produtos"));
const MeusFiltros = lazy(() => import("../components/MeusFiltros"));
const Categorias = lazy(() => import("../components/Categorias"));
const Layout = lazy(() => import("../components/Layout"));
const Filtrados = lazy(() => import("../components/Filtrados"));
const renderLoader = () => <p>Carregando...</p>;

const Index = () => {
  const [menuMob, setmenuMob] = useState(false);
  const dispatch = useDispatch();
  const [filmesFiltrados, setfilmesFiltrados] = useState([]);
  const { produtos, listaDeProdutosFiltrados } = useSelector(
    (state) => state.produto
  );
  const { categorias } = useSelector((state) => state.categoria);

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
            <Carrinho/>
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
          <div class="content">
            {filmesFiltrados.length > 0 ? (
              <Filtrados filmesFiltrados={filmesFiltrados} />
            ) : (
              <>
                {produtos.results && (
                  <Pagination
                    data={produtos.results}
                    RenderComponent={Produtos}
                    title="Catálogo"
                    pageLimit={4}
                    dataLimit={6}
                  />
                )}
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
