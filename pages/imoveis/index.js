import CardImoveis from "../../components/CardImoveis";
import Layout from "../../components/Layout";
import styled from "styled-components";

const ImoveisWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

function Imoveis({ imoveis }) {
  return (
    <Layout>
      <ImoveisWrapper>
        {imoveis.map((imovel) => {
          return <CardImoveis key={imovel.id} imovel={imovel} />;
        })}
      </ImoveisWrapper>
    </Layout>
  );
}
export default Imoveis;

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/imoveis`);
  const data = await res.json();
  return {
    props: {
      imoveis: data,
    },
  };
}
