import Card from "../../components/Card";
import Layout from "../../components/Layout";
import styled from "styled-components";

const ProdutosWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

function Produtos({ comercio }) {
  return (
    <Layout>
      <ProdutosWrapper>
        {comercio.map((produto) => {
          return <Card key={produto.id} produto={produto} />;
        })}
      </ProdutosWrapper>
    </Layout>
  );
}
export default Produtos;

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/produtos`);
  const data = await res.json();
  return {
    props: {
      comercio: data,
    },
  };
}
