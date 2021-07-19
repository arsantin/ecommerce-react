import Card from "../components/Card";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { RootState } from "../store/store";
import { fetchProdutos } from "../store/actions/ProdutosAction";
import Layout from "../components/Layout";
import styled from 'styled-components'

const IndexWrapper = styled.div`
  display: flex;
  justify-content: space-around;;
  flex-wrap: wrap;
`

function Index({ comercio }) {
  const dispatch = useDispatch();
  const [dadosiniciais, setDadosiniciais] = useState([]);

  return (
    <Layout>
      {dadosiniciais && JSON.stringify(dadosiniciais)}
      <IndexWrapper>
      {comercio.map((produto) => {
        return <Card key={produto.id} produto={produto} />;
      })}
      </IndexWrapper>
    </Layout>
  );
}
export default Index;

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/produtos`);
  const data = await res.json();
  return {
    props: {
      comercio: data,
    },
  };
}
