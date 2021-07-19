import Card from "../components/Card";
import Layout from "../components/Layout";
import styled from "styled-components";

const IndexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

function Index({ comercio }) {
  return (
    <Layout>
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
